function collect(){
  emailjs.init("user_IyhKBCwNmwjzbr74BXJyi");
  console.log("function ran successfully")
  let form = document.getElementById("email-collection");
  console.log(form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errors = [];
    let emailField = document.querySelector("#email-field");
    let submitButton = document.querySelector("#email-submit-button");
    let params = {
      email: emailField.value,
    };
    emailjs.send("gmail", "pf-email-collect", params).then(
      function () {
        emailField.value = "We got your email"
        submitButton.setAttribute("disabled", "true");
        emailField.setAttribute("disabled", "true");
        submitButton.innerHTML = "Thank you!"
        submitButton.style.opacity = 1;
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });  
}
collect()