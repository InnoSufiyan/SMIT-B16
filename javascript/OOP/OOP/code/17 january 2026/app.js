// function Insaan(name, fathersName) {
//   this.name = name;
//   this.fathersName = fathersName;
// }

// Insaan.prototype.introduction = function () {
//   console.log(
//     `Hi, my name ${this.name} and my father name is ${this.fathersName}`,
//   );
// };

// function Smit(name, fathersName, course, batch, campus) {
//   //   this.name = name;
//   //   this.fathersName = fathersName;
//   Insaan.call(this, name, fathersName);
//   this.course = course;
//   this.batch = batch;
//   this.campus = campus;
// }

// Smit.prototype = Object.create(Insaan.prototype)

// Smit.prototype.courseIntroduction = function () {
//   console.log(
//     `Hi, i am learning ${this.course} in ${this.campus} in batch ${this.batch}`,
//   );
// };

// const sufiyan = new Smit(
//   "Sufiyan",
//   "Abdul Ghaffar",
//   "WebNApp",
//   16,
//   "Bahaduraba",
// );

// const ahmed = new Smit("Ahmed Raza", "Irfan", "WebNApp", 16, "Bahaduraba");

"use strict";

class InsaanClass {
  constructor(name, fathersName) {
    this.name = name;
    this.fathersName = fathersName;
  }

  introduction() {
    console.log(
      `Hi, my name is ${this.name} and fathers name is ${this.fathersName}`,
    );
  }
}

class SmitClass extends InsaanClass {
  #courseOutline = ["html", "css", "javascript"];
  #awsPassword = "police";

  constructor(name, fathersName, course, batch, campus) {
    super(name, fathersName);
    this.course = course;
    this.batch = batch;
    this.campus = campus;
  }

  static eventOrganizing() {
    console.log("===>> we will organize an event in february")
  }

  getCourseOutline() {
    console.log(this.#courseOutline);
  }
}

const jani = new SmitClass(
  "Shoaib Jani",
  "Sikander",
  "webNapp",
  16,
  "Bahadurabad",
);
const ahmed = new SmitClass(
  "Ahmed Raza",
  "Irfan",
  "webNapp",
  16,
  "Bahadurabad",
);

console.log(jani.getCourseOutline());
// console.log(jani.#pin);

// ahmed.#awsPassword = "dadad"