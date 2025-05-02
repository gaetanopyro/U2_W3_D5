const URL = "https://striveschool-api.herokuapp.com/api/product";
const row = document.getElementById("newRow");

const cardItem = () => {
  fetch(URL, {
    headers: {
      Authorization: "3nJnQe6flj3plvWrzpIZAgDGxldj59FeS5wCV7abjJcDQpVi4N5RgDMl",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Problemi di rete?!");
      }
      return response.json();
    })
    .then((objItem) => {
      row.innerHTML = "";

      const row = document.querySelector(".newRow");
       charactersObj.data.forEach(char => {
         console.log(char.name);


      objData.photos.forEach((imageUrl) => {
        console.log(imageUrl);

 window.onload = () => {
  cardItem();
};