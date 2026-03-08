import { loginFunction, toGetLoggedInUser } from "./firebase.js";

toGetLoggedInUser()

const button = document.querySelector("button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

button.addEventListener("click", () => {
  console.log("==>> button is working");

  loginFunction(email.value, password.value);
});
