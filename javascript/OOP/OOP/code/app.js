"use strict";

// function Insaan(gender, name, age) {
//   console.log(this);
//   this.gender = gender;
//   this.name = name;
//   this.age = age;
// }

class Insaan {
  constructor(gender, name, age) {
    this.gender = gender;
    this.name = name;
    this.age = age;
  }
  // prototype
  unique() {
    console.log("==>> main aap ko unique cheezeyn laaa kar dunga");
  }

  //   static function create kardeyga
  static zindagi() {
    console.log("===>>> life limit");
  }
}

const ahmedRaza = new Insaan("male", "Ahmed Raza", 17);

// Insaan.prototype.walk = "Zameen per chalna"

// Insaan.prototype.unique = function() {
//     console.log("==>> main aap ko unique cheezeyn laaa kar dunga")
// }
