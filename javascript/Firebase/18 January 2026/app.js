import { getAllUserDetails, getSingleUserDetail, signUpFunction } from "./firebase.js";

const button = document.querySelector("#signup");
const getSingleData = document.querySelector("#getSingleData");
const getAllData = document.querySelector("#getAllData");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

button.addEventListener("click", () => {
  console.log("==>> button is working");

  signUpFunction(userName.value, email.value, password.value);

});


getSingleData.addEventListener('click', () => {
    getSingleUserDetail('1OWuQ3iB6RYpNzUM2r3w5Qj7ggm2')
})
getAllData.addEventListener('click', () => {
   getAllUserDetails()
})