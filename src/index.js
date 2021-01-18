import component from './components/VueResizeSensor';

export default component;

import {isVue2} from 'vue-demi';

if (isVue2) {
	globalThis.window?.Vue?.component(component.name, component);
}
