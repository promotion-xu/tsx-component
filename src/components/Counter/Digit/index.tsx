import vue from 'vue';
import Component from 'vue-class-component';
import digit0src from '@/assets/images/digits/0.png';
import digit1src from '@/assets/images/digits/1.png';
import digit2src from '@/assets/images/digits/2.png';
import digit3src from '@/assets/images/digits/3.png';
import digit4src from '@/assets/images/digits/4.png';
import digit5src from '@/assets/images/digits/5.png';
import digit6src from '@/assets/images/digits/6.png';
import digit7src from '@/assets/images/digits/7.png';
import digit8src from '@/assets/images/digits/8.png';
import digit9src from '@/assets/images/digits/9.png';
import './index.scss';

const digitSrcs = [
  digit0src, digit1src, digit2src, digit3src, digit4src,
  digit5src, digit6src, digit7src, digit8src, digit9src,
];

@Component<Digit>({
  props: {
    value: {
      type: Number,
      defailt: 0,
      validator: value => value < digitSrcs.length,
    },
    dimmed: {
      type: Boolean,
      defailt: false,
    },
    upwards: {
      type: Boolean,
      defailt: false,
    },
  },
  watch: {
    async value(value) {
      await this.untilCleaned;

      this.expectValue = value;
    },
    async dimmed(dimmed) {
      await this.untilCleaned;

      this.expectDimmed = dimmed;
    },
  },
})
export default class Digit extends vue {
  value: number;
  dimmed: boolean;
  upwards: boolean;

  $refs: {
    p: HTMLSpanElement,
  };

  currentValue = this.value;
  currentDimmed = this.dimmed;
  expectValue = this.value;
  expectDimmed = this.dimmed;

  untilCleaned: Promise<void>;
  private onCleaned: () => void;

  created() {
    if (this.isCleaned()) {
      this.untilCleaned = Promise.resolve();
      this.onCleaned = () => { };
    } else {
      this.untilCleaned = new Promise(resolve => this.onCleaned = resolve);
    }
  }

  mounted() {
    this.installListener();
  }

  updated() {
    this.installListener();
  }

  installListener() {
    if (this.$refs.p) {
      this.$refs.p.addEventListener('animationend', this.flush);
    }
  }

  get currentSrc() {
    return digitSrcs[this.currentValue];
  }

  get expectSrc() {
    return digitSrcs[this.expectValue];
  }

  isCleaned() {
    return this.expectValue === this.currentValue &&
      this.expectDimmed === this.currentDimmed;
  }

  flush() {
    this.currentValue = this.expectValue;
    this.currentDimmed = this.expectDimmed;
  }

  render(h) {
    if (this.isCleaned()) {
      // Wait for rendering is done
      this.$nextTick(this.onCleaned);

      return (
        <span class="digit" key="clean">
          <img src={this.currentSrc} alt={this.currentValue} class={['current', { dimmed: this.currentDimmed }]} />
        </span>
      );
    }

    this.untilCleaned = new Promise(resolve => this.onCleaned = resolve);

    if (this.upwards) {
      return (
        <span ref="p" class="digit scrolling-up" key="dirty">
          <img src={this.currentSrc} alt={this.currentValue} class={['current', { dimmed: this.currentDimmed }]} />
          <img src={this.expectSrc} alt={this.expectValue} class={['expect', { dimmed: this.expectDimmed }]} />
        </span>
      );
    }

    return (
      <span ref="p" class="digit scrolling-down" key="dirty">
        <img src={this.expectSrc} alt={this.expectValue} class={['expect', { dimmed: this.expectDimmed }]} />
        <img src={this.currentSrc} alt={this.currentValue} class={['current', { dimmed: this.currentDimmed }]} />
      </span>
    );
  }
}
