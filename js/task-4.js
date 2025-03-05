const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let form = event.target;
  let password = event.target.elements.password;
  let email = event.target.elements.email;
  if (password.value === "" || email.value === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log({
    password: password.value.trim(),
    email: email.value.trim(),
  });
  form.reset();
});
