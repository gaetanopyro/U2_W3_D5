const URL = "https://striveschool-api.herokuapp.com/api/product";
const row = document.getElementById("newRow");

const newCard = () => {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OGI5MzFjMjUwNDAwMTUxYWI2OTIiLCJpYXQiOjE3NDYxNzY5MTUsImV4cCI6MTc0NzM4NjUxNX0.muFLEb0JxkjnCUW9S0O3BcEh5hekLALr1glNBR0sIn0",
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }

      return resp.json();
    })
    .then((item) => {
      row.innerText = "";
      item.forEach((newItem) => {
        const ItemUrl = "./details.html?" + "id" + newItem._id;
        console.log(newItem);

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

        const colCard = document.createElement("div");
        colCard.className = "card-4 shadow p-1 mb-5 bg-body-tertiary rounded";

        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top cardImg";
        img.src = newItem.imageUrl;
        img.alt = newItem.description;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = newItem.name;

        const p = document.createElement("p");
        p.className = "card-text text-truncate";
        p.innerText = newItem.description;

        const brand = document.createElement("p");
        brand.className = "card-text text-truncate";
        brand.innerText = newItem.brand;

        const price = document.createElement("p");
        price.className = "card-text text-truncate";
        price.innerText = newItem.price;

        const divBtn = document.createElement("div");
        divBtn.className = "d-flex justify-content-between align-items-center";

        const divBtnGroup = document.createElement("div");
        divBtnGroup.className = "btn-group";

        const btnFirst = document.createElement("a");
        btnFirst.type = "button";
        btnFirst.href = "./details.html";
        btnFirst.className = "btn btn-sm btn-success";
        btnFirst.innerText = "Details";

        const btnSecond = document.createElement("a");
        btnSecond.type = "button";
        btnSecond.className = "btn btn-sm btn-danger";
        btnSecond.innerText = "Delete";

        console.log(newItem._id);

        divBtnGroup.appendChild(btnFirst);
        divBtnGroup.appendChild(btnSecond);

        divBtn.appendChild(divBtnGroup);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(brand);
        cardBody.appendChild(price);
        cardBody.appendChild(divBtn);

        colCard.appendChild(img);
        colCard.appendChild(cardBody);

        col.appendChild(colCard);

        row.appendChild(col);
      });
    })

    .catch((error) => {
      alert("Errore durante la creazione del prodotto!");
      console.error(error);
    });
};

newCard();
