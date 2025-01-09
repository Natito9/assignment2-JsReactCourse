// TODO: Set item in localStorage
localStorage.setItem('name', 'natalia');
// TODO: Get item from localStorage
let persona = localStorage.getItem('name');
// TODO: Remove item from localStorage
localStorage.removeItem('name');
// TODO: Clear all items from localStorage
localStorage.clear();
// TODO: Add an object to localStorage
let object = {name:'natalia'. age ='31'};
localStorage.serItem('person', JSON.stringify(object));
// TODO: Get an object from localStorage
let storedObject = 
JSON.parse(localStorage.getItem('person'));
// TODO: Set item in sessionStorage
sessionStorage.setItem('name', 'natalia');
// TODO: Get item from sessionStorage
let thePerson = sessionStorage.getItem('name');
// TODO: Remove item from sessionStorage
sessionStorage.removeItem('name');
// TODO: Clear all items from sessionStorage
sessionStorage.clear();
// TODO: Add an object to sessionStorage
let person = { name: 'Natalia', age: 30 };
sessionStorage.setItem('person', JSON.stringify(person));
// TODO: Get an object from sessionStorage
let storedPerson = JSON.parse(sessionStorage.getItem('person'));

//DONE :) 