
declare module 'vue-delayed-input-delegate' {
  import Vue from 'vue';

  export default class extends Vue {
    delay: number;
    useInput: boolean;
    useChange: boolean;
  }
}

