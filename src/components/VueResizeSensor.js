import {
	defineComponent,
	h,
	isVue2,
	onActivated,
	onMounted,
	ref,
	watch,
} from 'vue-demi';

export default defineComponent({
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
			emit('resize', {width, height});
		});
		let elRef = ref(null);
		let updateSize = (() => {
			let el = isVue2 ? refs['el'] : elRef.value;
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
			return h(
				tag,
				{
					style: {
						position: 'relative',
					},
					ref: isVue2 ? 'el' : elRef,
				},
				[
					h(
						'iframe',
						{
							style: {
								border: 'none',
								bottom: 0,
								left: 0,
								opacity: 0,
								pointerEvents: 'none',
								position: 'absolute',
								right: 0,
								top: 0,
								userSelect: 'none',
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
					...(() => {
						let slot = slots['default'];
						if (slot) {
							let width = widthRef.value;
							let height = heightRef.value;
							return slot({width, height});
						}
						return [];
					})(),
				],
			);
		});
	},
});
