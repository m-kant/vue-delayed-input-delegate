<template>
  <div id="app">
    <h1>Delayed Input Delegate</h1>
    <p>VueJs component.</p>
    <a class="btn btn-default" href="http://mkant.ru">MKant.ru</a>
    <a class="btn btn-default" href="https://github.com/m-kant/vue-delayed-input-delegate">View at <b>GIT Hub</b></a>
    <a class="btn btn-default" href="https://www.npmjs.com/package/vue-delayed-input-delegate">View at <b>NPM</b></a>

      <p>Emits one "delayedInput" event for series of events followed by each other with short interval. For example, fast text printing will emit one "delayedInput" after short print pause. This is intended for "auto save" or "auto validate" logic.</p>
      <p>It's not input itself - it is a wrapper element, listening for "input" or "change" events propagated by nested elements. So you can use one "delegate" for group of inputs.</p>

    <h2>Installation</h2>
<pre>npm install vue-delayed-input-delegate --S</pre>
<pre>import delayedInputDelegate from "vue-delayed-input-delegate";</pre>

    <h2>Usage</h2>
<pre>
&lt;delayed-delegate @delayedInput="autoSave">
  &lt;input v-model="title" />
  &lt;textarea v-model="text">&lt;/textarea>
  &lt;!-- any other input elements ... -->
&lt;/delayed-delegate>
</pre>

    <h2>Demo</h2>

    <delayed-input-delegate @delayedInput="onDelayed" :delay="localDelay" :use-change="localUseChange" :use-input="localUseInput">
      <div class="delayed-form" @input="onInput" @change="onChange">

        <table class="inputs">
          <caption>wrapped by delayed-input-delegate</caption>
          <tr>

            <td>
              <input type="text" placeholder="put any text here"><br/>
              <input type="number" placeholder="put any number here">
            </td>

            <td><textarea placeholder="print something"/></td>

            <td>
              <select><option>one</option><option>two</option></select><br/>
              <label><input type="checkbox"/> checkbox</label> <label><input type="radio" name="radio"/><input type="radio" name="radio"/> radio</label>
            </td>

          </tr>
        </table>
      </div>
    </delayed-input-delegate>


    <table width="100%" class="log-pane">
      <tr>
        <td><radiate ref="inputRadiate"/> input count: {{inputCount}}</td>
        <td rowspan="2"><radiate ref="delayedRadiate" big/> delayedInput count: {{delayedCount}}</td>
      </tr>
      <tr>
        <td><radiate ref="changeRadiate" /> change count: {{changeCount}}</td>
      </tr>
    </table>

    <div>
      <h2>Settings</h2>
      <table cellpadding="5" cellspacing="0" class="settings">
        <tr><th>Attr name</th><th>Defaults</th><th>Change</th><th>Description</th></tr>
        <tr><td>delay</td><td>1000ms</td><td><input v-model.number="localDelay" type="number"/></td><td>Interval in milliseconds. If pause between sequential inputs more then "duration" then "delayedInput" will be fired.</td></tr>
        <tr><td>use&#8209;input</td><td>true</td><td><input v-model.number="localUseInput" type="checkbox"/></td><td>Listen for "input" events.</td></tr>
        <tr><td>use&#8209;change</td><td>true</td><td><input v-model.number="localUseChange" type="checkbox"/></td><td>Listen for "change" events. Some form elements in some browsers emits only "change" events.</td></tr>
      </table>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DelayedInputDelegate from "./components/delayed-input-delegate.vue";
import Radiate from "./components/radiate.vue";

@Component({
  components: {
    DelayedInputDelegate, Radiate
  }
})
export default class App extends Vue {

  private inputCount = 0;
  private changeCount = 0;
  private delayedCount = 0;

  private localDelay = 1000;
  private localUseInput = true;
  private localUseChange = true;

  private onChange() {
    (this.$refs.changeRadiate as any).touch();
    this.changeCount++;
  }
  private onInput() {
    (this.$refs.inputRadiate as any).touch();
    this.inputCount++;
  }
  private onDelayed() {
    (this.$refs.delayedRadiate as any).touch();
    this.delayedCount++;
  }

}
</script>

<style>
#app {
  padding: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.log-pane td, pre {
  background-color: #eee;
  padding: 10px;
}
.inputs td{vertical-align: top;}
input[type=text],
input[type=number],
textarea,
select
{
  width: 200px;
  padding: 5px 10px;
  margin: 1px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
textarea{ min-height: 45px;}
table.inputs{
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
table.inputs caption{
  display: inline-block;
  padding: 2px 10px;
  position: absolute;
  top: -0.7em;
  left: 30px;
  background-color: #fff;
}
table.settings th{
  border-bottom: 2px solid #ccc;
}
table.settings td{
  border-bottom: 1px solid #ccc;
}
.btn{
  display: inline-block;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin:1px;
  color: #000;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;
}
.btn:hover{
  background-color:rgba(0,0,0,0.05);
}
</style>
