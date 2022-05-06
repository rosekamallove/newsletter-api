const cta = document.getElementById("cta");
const email = document.getElementById("email");
const error = document.getElementById("error");
const success = document.getElementById("success");
const signup = document.getElementById("signup");

cta.addEventListener("click", (e) => {
  e.preventDefault();

  if (!this.email.value || this.email.value == "") {
    // error.classList.add("errorAnim");
  } else {
    const fetchData = {
      method: "POST",
      body: JSON.stringify({ email: this.email.value, js: true }),
      headers: { "Content-type": "application/json" },
    };
    fetch("/subscribe", fetchData).then((res) => {
      if (res.ok) {
        //  ...
      } else {
        // error.classList.add("errorAnim");
      }
    });
  }
});
