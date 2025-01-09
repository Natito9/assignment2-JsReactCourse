const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
  event.stopPropagation();
});

//button 1
const button1 = document.getElementById("button1");

button1.addEventListener('click', (event) => {
    event.stopPropagation();
});

//button 2 
//why does this work without const button2?? ask 
button2.onclick = function(event) {
  alert('button 2 clicked')
  event.stopPropagation();
};

//buttons 3, 4 y 5

const buttons = document.querySelectorAll(('#button3, #button4, #button5'));
function alertButtons (){

  buttons.forEach(button=>{
    button.addEventListener("click", (event) => {

      alert(`${button.id} clicked!`);
      event.stopPropagation()
      ;
    });
  })
};


alertButtons();
