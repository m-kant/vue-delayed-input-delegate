<template>
  <div ref="root" class="radiate" :class="cssClasses">
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Radiate extends Vue {
  @Prop({ type: Boolean,  default: false }) public big!: boolean;

  public touch() {
    const root: Element = this.$refs.root as Element;
    const wave = document.createElement("div");
    wave.className = "radiate__wave";
    root.appendChild(wave);
    setTimeout( () => wave.remove(), 300 );
  }

  private mounted() { this.touch(); }

  private get cssClasses() {
    let res = "";
    if (this.big) res += "radiate_big";
    return res;
  }
}
</script>


<style>
 .radiate{
   display: inline-block;
   background-color: rgba(0,0,0,0.05);
   width: 30px;
   height: 30px;
   border-radius: 50%;
   vertical-align: middle;
   position: relative;
 }
 .radiate__wave{
   position: absolute;
   display: inline-block;
   background-color: #E08119;
   width: 100%;
   height: 100%;
   border-radius: 50%;
   vertical-align: middle;
   animation: extend 300ms forwards;
 }
 .radiate.radiate_big{
   width: 60px;
   height: 60px;
 }
 @keyframes extend {
   from { transform: scale(0,0); }
   to   { opacity: 0; }
 }
</style>
