console.log("==>> file abc");

import { apiData } from "./data.js";
import { price as xyzPrice } from "./xyz.js";

const price = 300;

console.log(xyzPrice, "==>> xyzPrice");

console.log(apiData, "==>> apiData");


// if(!userName) {
//     return 
// }

if(userName && email && password) {
    console.log("signup")
} else if(userName && email) {
    console.log("password nai hai")
} else if (userName && password) {
    console.log("email nai hai")
} else if