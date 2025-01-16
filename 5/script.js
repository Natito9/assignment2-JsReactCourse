// Base URL
const apiUrl = `https://opentdb.com/api.php`;

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const results = data.results;
      return results;
    })


    .catch(error => {
  console.error("Somethign went wrong!" + error);
    });
} 

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}


const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);

//done