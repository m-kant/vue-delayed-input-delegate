
import Vue from 'vue';

declare class DelayedInputDelegate extends Vue {
  delay: number;
  useInput: boolean;
  useChange: boolean;
}

export default DelayedInputDelegate;
