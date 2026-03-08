import { signupUser, loginUser } from "../firebaseFunctions.js";

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signupForm[0].value;
    const email = signupForm[1].value;
    const password = signupForm[2].value;
    const cPassword = signupForm[3].value;

    if (password !== cPassword) {
      return alert("Password and Confirm Password are not matching");
    }

    console.log(name, email, password)
    const result = await signupUser(name, email, password);

    if (result.success) {
      alert("Signup Successful 🎉");
      window.location.href = "login.html";
    } else {
      alert(result.message);
    }
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm[0].value;
    const password = loginForm[1].value;

    const result = await loginUser(email, password);

    if (result.success) {
      alert(`Welcome ${result.data.name} 👋`);
      window.location.href = "../dashboard/dashboard.html";
    } else {
      alert(result.message);
    }
  });
}
