//colors
const backgroundPrimary = "#7e3c48";
const backgroundSecondary = "#eed7e6"
const textColor = "#7e3c48";
const inputBackground = "white";

//element selection
const body = document.querySelector("body");
const form = document.querySelector("form");

//elemet creation
const formContainer = document.createElement("div");


function bodyStyle() {
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.height = "100vh"
  body.style.fontFamily = "Arial, Helvetica";
  body.style.backgroundColor = backgroundPrimary;
  body.style.color = textColor;
}

function formContainerStyle() {
  formContainer.setAttribute("class", "form-container");
  formContainer.style.alignSelf = "center";
  formContainer.style.backgroundColor =backgroundSecondary;

  formContainer.appendChild(form);
  body.appendChild(formContainer);
}

function formStyle(){
    form.style.padding ="2rem"
    form.style.height = "fit-content"
    form.style.textAlign = "auto";
}
formStyle()

function createFormTitle() {
  const formTitle = document.createElement("h1");
  formTitle.textContent = "Sign-up";
  formTitle.style.textAlign="center"
  formContainer.appendChild(formTitle);
}

const label = document.querySelectorAll("label");


function labelsAndOptionsTextChange() {

    const labelTexts = ["What's your name?","What's your email?","What's your phone number?","Please give 5 original reasons of why you want to Sign up.","Do you have a pet?"]
        label.forEach((label, index)=>{
        if (labelTexts[index]) label.textContent=labelTexts[index];
        });

    const options = document.querySelectorAll("option");
    const optionTexts = ["Yes, a cat", "Yes, a dog", "No"];
        options.forEach((option, index) => {
        if (optionTexts[index]) option.textContent = optionTexts[index];
        });
    
    //i feel if i put this in the array labelTexts it would be harer to read (?)
    const option1radioLabel = label[6];
    const option2radioLabel = label[7];
    const option3radioLabel = label[8]; 

    option1radioLabel.textContent = "I love tacos.";
    option2radioLabel.textContent = "I love sports.";
    option3radioLabel.textContent = "My favorite color is red.";
}

function labelStyle(){

    label.forEach(label=> {
        label.style.padding= "0.3rem"
    })
    // nameLabel.style.padding = "1rem";
}

function inputAndTextareaStyle(){
    const input = document.querySelectorAll("#name, #email, #phone, #message")
  
    input.forEach(input =>{
        input.style.backgroundColor= inputBackground;
        input.style.border= "0.5px solid #7e3c48";
        input.style.float="right";
        input.style.marginRight="1rem";

    })

    const textArea = document.getElementById("message")
    textArea.style.margin = "1rem auto"
    
}

function buttonSubmitStyle(){
    const submitButton = document.querySelector('input[value="Submit"]');

    submitButton.style.position = "relative";
    submitButton.style.left = "50%";     
    submitButton.style.transform = "translateX(-50%)"; 

    submitButton.style.border = "4px solid #7e3c48";
    submitButton.style.backgroundColor = backgroundSecondary;
    submitButton.style.fontSize = "1.2rem"
    submitButton.style.color = textColor;
    submitButton.style.padding = "0.5rem 1rem";


}
buttonSubmitStyle();

createFormTitle();
formContainerStyle();
bodyStyle();

labelsAndOptionsTextChange();
inputAndTextareaStyle();
labelStyle();

