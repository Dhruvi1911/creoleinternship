const signupbtn = document.getElementById("SignUp");
const signinbtn = document.getElementById("SignIn");
const container = document.getElementById("container");

signupbtn.addEventListener("click", () =>
  container.classList.add("right-content-active")
);
signinbtn.addEventListener("click", () =>
  container.classList.remove("right-content-active")
);
