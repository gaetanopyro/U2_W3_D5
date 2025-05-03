const URL = "https://striveschool-api.herokuapp.com/api/product";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

window.onload = () => {
  fetch(URL + id, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDYxODAxNDIsImV4cCI6MTc0NzM4OTc0Mn0.gqHgm9oMRMV6a9xQfr0aPRASQQqUZKE5GrJFP4pK6qE",
    },
    body: JSON.stringify(),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }

      return resp.json();
    })
    .then((id) => {
      console.log(id);

      const h2 = document.querySelector("h2");
      h2.innerText = id.name;

      const img = document.querySelector("img");
      img.src = id.imageUrl;
      img.alt = id.description;

      const h5 = document.querySelector("h5");
      h5.innerText = id.name;

      const firstP = document.getElementById("first");
      firstP.innerText = id.description;

      const secondP = document.getElementById("second");
      secondP.innerText = id.brand;

      const thirdP = document.getElementById("third");
      thirdP.innerText = id.price;
    })

    .catch((error) => {
      console.error(error);
    });
};
