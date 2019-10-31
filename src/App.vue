<template>
  <div id="app">
    <h1>Delayed Input Delegate</h1>
    <p>
      VueJs component.
      <br />Emits one "delayedInput" event for series of events followed by each other with short interval. For example, fast text printing will emit one "delayedInput" after short print pause. This is intended for "auto save" or "auto validate" logic.
      <br />It's not input itself - it is a wrapper element, listening for "input" or "change" events propagated by nested elements. So you can use one "delegate" for group of inputs.
      <br />
    </p>
    <h2>Sample</h2>
    <table width="100%" class="log-pane">
      <tr>
        <td>input count</td>
        <td rowspan="2">delayedInput count</td>
      </tr>
      <tr>
        <td>change count</td>
      </tr>
    </table>
    <delayed-input-delegate></delayed-input-delegate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DelayedInputDelegate from "./components/delayed-input-delegate.vue";

@Component({
  components: {
    DelayedInputDelegate
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  padding: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.log-pane td {
  background-color: #eee;
  padding: 10px;
}
</style>
