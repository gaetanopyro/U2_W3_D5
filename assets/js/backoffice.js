const URL = "https://striveschool-api.herokuapp.com/api/product";
const form = document.getElementById("form-item");

form.onsubmit = function (e) {
  e.preventDefault();

  const nameInp = document.getElementById("name");
  const descriptionInp = document.getElementById("description");
  const brandInp = document.getElementById("brand");
  const imageUrlInp = document.getElementById("imageUrl");
  const priceInp = document.getElementById("imageUrl");

  const newInformation = {
    name: nameInp.value,
    description: descriptionInp.value,
    brand: brandInp.value,
    imageUrl: imageUrlInp.value,
    price: priceInp.value,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newInformation),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OGI5MzFjMjUwNDAwMTUxYWI2OTIiLCJpYXQiOjE3NDYxNzY5MTUsImV4cCI6MTc0NzM4NjUxNX0.muFLEb0JxkjnCUW9S0O3BcEh5hekLALr1glNBR0sIn0",
    },
  });
  console.log("SUBMIT", newInformation);
};
/*
const deleteBtn = document.getElementById("btn-delete");

const nameForm =document.

const itemPhone = () => {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OGI5MzFjMjUwNDAwMTUxYWI2OTIiLCJpYXQiOjE3NDYxNzY5MTUsImV4cCI6MTc0NzM4NjUxNX0.muFLEb0JxkjnCUW9S0O3BcEh5hekLALr1glNBR0sIn0",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Problemi di rete?!");
      }
      return response.json();
    })
    .then((information) => {
      document.getElementById("name").value = information.name;
      document.getElementById("description").value = information.description;
      document.getElementById("brand").value = information.brand;
      document.getElementById("imageUrl").value = information.imageUrl;
      document.getElementById("price").value = information.price;
    })
    .catch((error) => console.log(error));
};
*/
