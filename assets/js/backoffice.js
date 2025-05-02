const URL = "https://striveschool-api.herokuapp.com/api/product";
const form = document.getElementById("form_enter");
const deleteBtn = document.getElementById("delete-btn");
console.log(form);

form.onsubmit = function (e) {
  e.preventDefault();

  const nameInp = document.getElementById("name");
  const descriptionInp = document.getElementById("description");
  const brandInp = document.getElementById("brand");
  const imageUrlInp = document.getElementById("imageUrl");
  const priceInp = document.getElementById("price");

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
  })
    .then((Response) => {
      console.log(Response);
      if (!Response.ok) {
        throw new Error("Errore nella fetch");
      }
      return Response.json();
    })
    .catch((error) => console.log(error));

  console.log("SUBMIT", newInformation);
};

deleteBtn.onclick = function () {
  fetch(URL, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        alert("Item eliminato");

        window.location.assign("./index.html");
      }
    })
    .catch((error) => console.log(error));
};
