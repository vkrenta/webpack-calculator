export const INPUT_CHANGED = 'input-changed';
export const BUFFER_CHANGED = 'BUFFER_CHANGED';
export const SIGN_CHANGED = 'SIGN_CHANGED';
export const MEMORY_CHANGED = 'MEMORY_CHANGED';
export const OUTPUT_CHANGED = 'OUTPUT_CHANGED';
export type Sign = '*' | '+' | '-' | '/' | null;

class Context {
  private _input: string | null;
  private _memory: number;
  private _buffer: number | null;
  private _sign: Sign;
  private _output: string | null;
  private inputChanged = new Event(INPUT_CHANGED);
  private bufferChanged = new Event(BUFFER_CHANGED);
  private signChanged = new Event(SIGN_CHANGED);
  private memoryChanged = new Event(MEMORY_CHANGED);
  private outputChanged = new Event(OUTPUT_CHANGED);
  private math: Partial<import('mathjs').MathJsStatic>;

  set input(value: string | null) {
    this._input = value;
    dispatchEvent(this.inputChanged);
  }

  get input() {
    return this._input;
  }

  set memory(value: number) {
    this._memory = value;
    dispatchEvent(this.memoryChanged);
  }

  get memory() {
    return this._memory;
  }

  set buffer(v: number) {
    this._buffer = v;
    dispatchEvent(this.bufferChanged);
  }

  get buffer() {
    return this._buffer;
  }

  set sign(value: Sign) {
    this._sign = value;
    dispatchEvent(this.signChanged);
  }

  get sign() {
    return this._sign;
  }

  set output(v: string | null) {
    this._output = v;
    dispatchEvent(this.outputChanged);
  }

  get output() {
    return this._output;
  }

  constructor() {
    this.memory = 0;
    this.buffer = null;
    this.sign = null;
    this.input = null;
    this.output = null;
    import('mathjs').then(({ create, all }) => {
      this.math = create(all, { number: 'BigNumber', precision: 64 });
    });
  }

  toMemory() {
    const value = +(this.input ?? this.output ?? this.buffer);
    this.memory = isNaN(value) ? 0 : value;
  }

  plusMemory() {
    const value = +(this.input ?? this.output);
    this.output = this.math.evaluate(
      `${isNaN(value) ? 0 : value} + ${this.memory}`
    );
    this.buffer = +this.output;
  }

  minusMemory() {
    const value = +(this.input ?? this.output);
    this.output = this.math.evaluate(
      `${isNaN(value) ? 0 : value} - ${this.memory}`
    );
    this.buffer = +this.output;
  }

  clear() {
    this.input = null;
  }

  putNumber(value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0) {
    if (this.input === '0') {
      if (value === 0) return;
      this.input = value.toString();
      return;
    }
    this.input = (this.input ?? '') + value.toString();
  }

  putSign(value: Sign) {
    if (this.buffer && !this.sign && !this.input) this.input = `${this.buffer}`;
    if (this.sign) {
      this.calculate();
    } else {
      this.buffer = +this.input;
    }

    this.sign = value;

    this.input = null;
  }

  calculate() {
    this.output = this.math.evaluate(
      `${+this.buffer} ${this.sign ?? '+'} ${+this.input}`
    );
    this.buffer = +this.output;
    this.input = null;
    this.sign = null;
  }

  dot() {
    if (!this.input) this.input = '0';
    const value = this.input + '.';
    if (!isNaN(+value)) this.input = value;
  }
}

export const context = new Context();
