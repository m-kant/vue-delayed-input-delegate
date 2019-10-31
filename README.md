# vue-delayed-input-delegate

VueJs component.

Emits one "delayedInput" event for series of events followed by each other with short interval. For example, fast text printing will emit one "delayedInput" after short print pause. This is intended for "auto save" or "auto validate" logic.

It's not input itself - it is a wrapper element, listening for "input" or "change" events propagated by nested elements. So you can use one "delegate" for group of inputs.

## Usage

```html
<delayed-delegate @delayedInput="autoSave">
  <input v-model="title" />
  <textarea v-model="text"></textarea>
  <!-- any other input elements ... -->
</delayed-delegate>
```
