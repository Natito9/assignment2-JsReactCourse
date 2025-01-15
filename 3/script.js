//colors
const backgroundPrimary = "#7e3c48";
const backgroundSecondary = "#eed7e6"
const textColor = "#7e3c48";
const inputBackground = "white";

//element selection
const body = document.querySelector("body");
const form = document.querySelector("form");
const label = document.querySelectorAll("label");
const options = document.querySelectorAll("option");
const dropdownMenu = document.getElementById("options")

//elemet creation
const formContainer = document.createElement("div");


  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.height = "100vh"
  body.style.fontFamily = "Arial, Helvetica";
  body.style.backgroundColor = backgroundPrimary;
  body.style.color = textColor;


  formContainer.setAttribute("class", "form-container");
  formContainer.style.alignSelf = "center";
  formContainer.style.backgroundColor =backgroundSecondary;

  formContainer.appendChild(form);
  body.appendChild(formContainer);



    form.style.padding ="2rem"
    form.style.height = "fit-content"
    form.style.textAlign = "auto";




    const formTitle = document.createElement("h1");

    formTitle.textContent = "Sign-up";
    formTitle.style.textAlign="center"
    formContainer.appendChild(formTitle);





    const labelTexts = ["- What's your name?",
        "- What's your email?",
        "- What's your phone number?",
        "- Give 5 original reasons why you want to Sign up.",
        "- Do you have a pet?",
        "- What phrase identifies you best?",
        "- I love tacos.",
        "- I love sports.",
        "- My favorite color is red."
        ]
        label.forEach((label, index)=>{
        if (labelTexts[index]) label.textContent=labelTexts[index];
        });


    const optionTexts = ["Yes, a cat", "Yes, a dog", "No"];
        options.forEach((option, index) => {
        if (optionTexts[index]) option.textContent = optionTexts[index];
        });
    



    label.forEach(label=> {
        label.style.padding= "0.3rem"
    })


    const input = document.querySelectorAll("#name, #email, #phone, #message")
  
    input.forEach(input =>{
        input.style.backgroundColor= inputBackground;
        input.style.border= "0.5px solid #7e3c48";
        input.style.float="right";

    })

    const textArea = document.getElementById("message")
    textArea.style.margin = "1rem auto"
    

    dropdownMenu.style.backgroundColor= inputBackground;
    dropdownMenu.style.border= "0.5px solid #7e3c48";
    dropdownMenu.style.float="right";
    dropdownMenu.style.padding = "0.3rem 2rem"
    dropdownMenu.style.color = textColor;
  

    const submitButton = document.querySelector('input[value="Submit"]');

    submitButton.style.position = "relative";
    submitButton.style.left = "50%";     
    submitButton.style.transform = "translateX(-50%)"; 

    submitButton.style.border = "4px solid #7e3c48";
    submitButton.style.backgroundColor = backgroundSecondary;
    submitButton.style.fontSize = "1.2rem"
    submitButton.style.color = textColor;
    submitButton.style.padding = "0.5rem 1rem";



