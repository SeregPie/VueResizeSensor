# VueResizeSensor

A Vue container that supports the resize event.

Works for Vue 2 & 3.

## dependencies

- [Vue Demi](https://github.com/antfu/vue-demi)

## setup

### npm

```shell
npm i @seregpie/vue-resize-sensor
```

---

```javascript
import VueResizeSensor from '@seregpie/vue-resize-sensor';
```

### browser

```html
<!-- if using Vue 2 -->
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/@vue/composition-api"></script>

<!-- if using Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<script src="https://unpkg.com/vue-demi"></script>
<script src="https://unpkg.com/@seregpie/vue-resize-sensor"></script>
```

The component is globally available as `VueResizeSensor`.

## usage

Register the component globally.

```javascript
import {createApp} from 'vue';
import VueResizeSensor from '@seregpie/vue-resize-sensor';

let app = createApp({/*...*/});
app.component(VueResizeSensor.name, VueResizeSensor);
app.mount('body');
```

*or*

Register the component locally.

```javascript
import VueResizeSensor from '@seregpie/vue-resize-sensor';

export default {
  components: {
    VueResizeSensor,
  },
  // ...
};
```

---

Wrap the content inside the default slot.

```html
<vue-resize-sensor
  style="width: 100%; height: 100%"
  v-slot="{width, height}"
>
  <my-header v-if="height > 400"/>
  <div
    :style="{flexDirection: (width > height) ? 'row' : 'column'}"
    style="display: flex"
  >
    <my-first-item/>
    <my-second-item/>
  </div>
</vue-resize-sensor>
```

---

Capture the `resize` event.

```html
<div>
  <vue-resize-sensor @resize="onResize"/>
  <my-content/>
</div>
```

```javascript
methods: {
  onResize({width, height}) {
    // handle resize
  },
},
```

---

The component renders a `<div>` element by default. You can change the element that is rendered with the `tag` attribute.

```html
<vue-resize-sensor tag="form"/>
```
