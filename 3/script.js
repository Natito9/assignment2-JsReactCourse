//element selection

const body = document.querySelector("body");
const form = document.querySelector("form");


//elemet creation
const formContainer = document.createElement("div");

//colors
const backgroundPrimary = "#7e3c48";
const backgroundSecondary = "#eed7e6"
const textColor = "#7e3c48";
const inputBackground = "white";




function bodyStyle() {
  body.style.display = "flex";
  body.style.justifyContent = "center";
//   body.style.height = "fit-content";
  body.style.fontFamily = "Fira Code, Arial, Helvetica";
  body.style.backgroundColor = backgroundPrimary;
  body.style.color = textColor;
}

function formContainerStyle() {
  formContainer.setAttribute("class", "form-container");
  formContainer.style.alignContent = "center";
  formContainer.style.backgroundColor =backgroundSecondary;
  formContainer.style.padding = "2rem";

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

  optionsLabel.style.border = "0.5px solid #7e3c48";

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

function inputAndTextareaStyle(){
    const input = document.querySelectorAll("#name, #email, #phone, #message, #radio1, #radio")
  
    input.forEach(input =>{
        input.style.backgroundColor= inputBackground;
        input.style.border= "0.5px solid #7e3c48";
        input.style.float="right";
    })
}

createFormTitle();
formContainerStyle();
bodyStyle();

labelsAndOptionsTextChange();
inputAndTextareaStyle();
