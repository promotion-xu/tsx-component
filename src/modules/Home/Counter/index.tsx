import vue from 'vue';
import Component from 'vue-class-component';
import Digit from './Digit';
import { integerWidth, positiveIntegerValidator, naturalIntegerValidator } from '@/utils/math'
import './index.scss';

@Component<Counter>({
  props: {
    maxDigits: {
      type: Number,
      required: true,
      validator: positiveIntegerValidator,
    },
    value: {
      type: Number,
      default: 0,
      validator: naturalIntegerValidator,
    },
    base: {
      type: Number,
      default: 10,
      validator: positiveIntegerValidator,
    },
    dimLeadingZeros: {
      type: Boolean,
      default: true,
    },
    upwards: {
      type: Boolean,
      defailt: false,
    },
  },
  watch: {
    async value(value) {
      await this.untilCleaned();
      this.currentValue = value;
    },
  },
})
export default class Counter extends vue {
  maxDigits: number;
  value: number;
  base: number;
  dimLeadingZeros: boolean;
  upwards: boolean;
  currentValue = this.value;

  getDigits() {
    let { currentValue: value } = this;
    const { base, maxDigits: maxWidth } = this;
    const width = integerWidth(value, base);
    const digits = [];

    if (width > maxWidth) {
      throw new TypeError("Number is too long");
    } else {
      let i = 0;

      for (i = 0; i < width; i += 1) {
        digits.unshift(value % this.base);
        value = Math.floor(value / this.base);
      }

      for (i; i < maxWidth; i += 1) {
        digits.unshift(0);
      }

      return digits;
    }
  }

  untilCleaned() {
    return Promise.all((this.$children as Digit[]).map(vm => vm.untilCleaned));
  }

  render(h) {
    let dimmed = this.dimLeadingZeros;

    return (
      <div class="counter">
        {this.getDigits().map((digit, i) => {
          if (dimmed && digit !== 0) {
            dimmed = false;
          }

          return <Digit upwards={this.upwards} dimmed={dimmed} value={digit} />;
        })}
      </div>
    );
  }
}
