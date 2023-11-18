const OTPInputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
var onlyNumRegex = /^[0-9]+$/;

window.addEventListener("load", () => OTPInputs[0].focus());

submitBtn.addEventListener("click", (e) => {
  let val = "";
  e.preventDefault();
  OTPInputs.forEach((o) => (val += o.value));
  if (onlyNumRegex.test(val)) {
    console.log("submitted OK", val);
  } else {
    console.log("invalid input", val);
  }
});

OTPInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;

    if (currentInput.value.length > 1 && currentInput.value.length == 2) {
      currentInput.value = "";
    }

    if (
      nextInput !== null &&
      nextInput.hasAttribute("type") &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!OTPInputs[4].disabled && OTPInputs[4].value !== "") {
      submitBtn.classList.add("active");
    } else {
      submitBtn.classList.remove("active");
    }

    input.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        if (input.previousElementSibling !== null) {
          e.target.value = "";
          e.target.setAttribute("disabled", true);
          input.previousElementSibling.focus();
        }
      }
    });
  })
);
