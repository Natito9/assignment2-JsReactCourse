//element selection

const body = document.querySelector("body");
const form = document.querySelector("form");

//elemet creation
const formContainer = document.createElement("div");

function bodyStyle() {
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.height = "90vh";
  body.style.fontFamily = "Fira Code, Arial, Helvetica";
  body.style.backgroundColor = "#7e3c48";
  body.style.color = "#7e3c48";
}

function formContainerStyle() {
  formContainer.setAttribute("class", "form-container");
  formContainer.style.alignContent = "center";
  formContainer.style.backgroundColor = "whitesmoke";
  formContainer.style.padding = "1.7rem";

  formContainer.appendChild(form);
  body.appendChild(formContainer);
}

function createFormTitle() {
  const formTitle = document.createElement("h1");
  formTitle.textContent = "Sign-up";
  formTitle.style.textAlign="center"
  formContainer.appendChild(formTitle);
}

function labelsAndOptionsTextChange() {
  const label = document.querySelectorAll("label");
  const nameLabel = label[0];
  const emailLabel = label[1];
  const phoneLabel = label[2];
  const messageLabel = label[3];
  const optionsLabel = label[4];
  const option1radioLabel = label[6];
  const option2radioLabel = label[7];
  const option3radioLabel = label[8];

  const option = document.querySelectorAll("option");
  const option1 = option[0];
  const option2 = option[1];
  const option3 = option[2];

  nameLabel.textContent = "What's your name?";
  emailLabel.textContent = "What's your email?";
  phoneLabel.textContent = "What's your phone number?";
  messageLabel.textContent =
    "Please give 5 original reasons of why you want to Sign up.";

  optionsLabel.textContent = "Do you own a pet?";
  option1.textContent = "Yes, a cat";
  option2.textContent = "Yes, a dog";
  option3.textContent = "No";

  option1radioLabel.textContent = "Im happy with my life.";
  option2radioLabel.textContent = "I love sports.";
  option3radioLabel.textContent = "My favorite color is red.";
}

createFormTitle();
formContainerStyle();
bodyStyle();

labelsAndOptionsTextChange();
