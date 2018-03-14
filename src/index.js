class SmartCalculator {
  constructor(initialValue) {
     this.start = initialValue.toString();
  }

  valueOf() {
  return eval(this.start);
  }

  add(number) {
    this.start = this.start + " + " + number;
    return this;
  }

  subtract(number) {
    this.start = this.start + " - " + number;
    return this;
  }

  multiply(number) {
    this.start = this.start + " * " + number;
    return this;
  }

  devide(number) {
    this.start = this.start + " / " + number;
    return this;
  }

  pow(number) {
    this.start = this.start + " ** " + number;
    return this;
  }
}

module.exports = SmartCalculator;
