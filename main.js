var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var message = document.querySelector("#message");
var submitButton = document.querySelector("#submitButton");
var confirmationBanner = document.querySelector("#confirmationBanner");
var confirmationText = document.querySelector("#confirmationText");
var confirmationMessageToDisplay = " Thank you for contacting us, ";
var confirmationBannerCloseButton = document.querySelector("#closeButton");
var genderOptions = document.querySelectorAll("[name='gender']");
var genderError = document.querySelector("#errorGender");
function checkGenderIsSelected() {
  for (var i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      return true;
    }
  }

  return false;
}
function isEdited(field) {
  field.addEventListener("input", function () {
    field.classList.remove("invalid");
  });
}
isEdited(firstName);
isEdited(lastName);
isEdited(message);

for (var i = 0; i < genderOptions.length; i++) {
  genderOptions[i].addEventListener("click", function (event) {
    genderError.style.display = "none";
  });
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstName.value.trim() === "") {
    firstName.classList.add("invalid");
  }

  if (lastName.value.trim() === "") {
    lastName.classList.add("invalid");
  }

  if (!checkGenderIsSelected()) {
    genderError.style.display = "block";
  }
  if (message.value.trim() === "") {
    message.classList.add("invalid");
  }

  if (
    firstName.validity.valid &&
    lastName.validity.valid &&
    message.validity.valid &&
    checkGenderIsSelected()
  ) {
    console.log("The first name is " + firstName.value);
    console.log("The last name is " + lastName.value);
    console.log("The message is " + message.value);
    for (var i = 0; i < genderOptions.length; i++) {
      if (genderOptions[i].checked) {
        console.log("The selected gender is " + genderOptions[i].value);
      }
    }
    confirmationText.textContent =
      confirmationMessageToDisplay.toLowerCase() + firstName.value;
    confirmationBanner.style.display = "block";
  }
});
confirmationBannerCloseButton.addEventListener("click", function () {
  confirmationBanner.style.display = "none";
});
