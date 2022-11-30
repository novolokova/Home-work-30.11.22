"use strict";

// Створити новий клас RangeValidator, з полями from і to
// (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number)
// і повертає true, якщо значення входить в діапазон,
// якщо не входить - повертає false


class RangeValidator {

  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from = FROM, to = TO) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("FROM must be a number");
    }
    if (from > this._to) {
      throw new RangeError("FROM must be less than TO");
    }
    this._from = from;
  }
  get from() {
    return this.to._from;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("TO must be a number");
    }
    if (to < this._from) {
      throw new RangeError("TO must be bigger than FROM");
    }
    this._to = to;
  }
  get to() {
    return this._to;
  }

  getRang = () => [this._from, this._to];

  isValidate = (value) =>
    typeof value !== "number"
      ? new TypeError("value must be a number")
      : value >= this._from && value <= this._to;
}

try {
  const rengeVal = new RangeValidator(15, 25);
  console.log(rengeVal);
  // rengeVal.from = 100; // error
  // rengeVal.from = '10';// error
  rengeVal.from = 10;
  console.log(rengeVal);
  // rengeVal.to = '2' // error
  // rengeVal.to = 2 // error
  rengeVal.to = 29;
  console.log(rengeVal);
  console.log(rengeVal.getRang());
  // console.log(rengeVal.isValidate("7")); // error
  console.log(rengeVal.isValidate(7));
  console.log(rengeVal.isValidate(17));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Wrong type");
  }
  if (error instanceof RangeError) {
    console.log("Wrong value");
  }
  console.log(error);
}

console.log("***********");
