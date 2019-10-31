<template>
  <div class="delayed-input-delegate" v-on:input="onInput" v-on:change="onChange">
    <slot />
  </div>
</template>

<script lang='ts'>
/** Wrapper for set of inputs. Listens for 'input' events of nested elements.
 * And emits one 'delayedInput' event for sequential events
 * followed by each other with short interval less than 'delay' prop.
 * For example, fast text printing will emit one 'delayedInput' after short print pause.
 * This is intended for 'auto save' or 'auto validate' logic
 */
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class DelayedInputDelegate extends Vue {
  @Prop({ type: Number,  default: 500 })    public delay!:      number;
  @Prop({ type: Boolean, default: true })   public useInput!:   boolean;
  @Prop({ type: Boolean, default: false })  public useChange!:  boolean;

  private timeout?: number = undefined;

  private onInput(ev: Event) {
    if (this.useInput) this.onEvent(ev);
  }
  private onChange(ev: Event) {
    if (this.useChange) this.onEvent(ev);
  }

  private onEvent(ev: Event) {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout);
    }
    this.timeout = window.setTimeout(() => {
      this.emitDelayedInput(ev);
    }, this.delay);
  }
  private emitDelayedInput(inputEvent: Event) {
    this.timeout = undefined;
    this.$emit("delayedInput", inputEvent);
  }
}
</script>
