import {
	defineComponent,
	h,
	isVue2,
	onActivated,
	onMounted,
	ref,
	Vue,
	watch,
} from 'vue-demi';
import {NOOP} from '@vue/shared';

let component = defineComponent({
	name: 'VueResizeSensor',
	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},
	setup(props, {
		emit,
		refs,
		slots,
	}) {
		let widthRef = ref(0);
		let heightRef = ref(0);
		watch([widthRef, heightRef], ([width, height]) => {
			emit('resize', {width, height, w: width, h: height});
		});
		let elRef = ref(null);
		let updateSize = (() => {
			let el = isVue2 ? refs.el : elRef.value;
			if (el) {
				widthRef.value = el.offsetWidth;
				heightRef.value = el.offsetHeight;
			}
		});
		onActivated(updateSize);
		onMounted(updateSize);
		let onLoad = (event => {
			event.target.contentWindow.addEventListener('resize', updateSize);
		});
		return (() => {
			let {tag} = props;
			let width = widthRef.value;
			let height = heightRef.value;
			let scopedSlots = {
				default: NOOP,
				...slots,
			};
			return h(
				tag,
				{
					style: {
						position: 'relative',
					},
					...(isVue2
						? {
							ref: 'el',
						}
						: {
							ref: elRef,
						}
					),
				},
				[
					h(
						'iframe',
						{
							style: {
								border: 'none',
								height: '100%',
								opacity: 0,
								position: 'absolute',
								width: '100%',
							},
							...(isVue2
								? {
									on: {
										load: onLoad,
									},
								}
								: {
									onLoad,
								}
							),
						},
					),
					scopedSlots.default({width, height, w: width, h: height}),
				],
			);
		});
	},
});

if (isVue2 && globalThis.window) {
	Vue.component(component.name, component);
}

export default component;