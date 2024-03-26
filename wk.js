const APIURL = "https://cataas.com/cat";

function generateCat() {
  const catImgContainer = document.getElementById("Catimg");

  fetch("https://cataas.com/cat")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cat image");
      }
      return response.url;
    })
    .then((catImageUrl) => {
      catImgContainer.innerHTML = `<img src="${catImageUrl}" alt="Cat Image">`;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

document.getElementById("Rbtn").addEventListener("click", generateCuteat);

const FatURL = "https://cataas.com/cat/fat";

function generateCuteat() {
  const catImgContainer = document.getElementById("Catimg");

  fetch("https://cataas.com/cat/cute")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cat image");
      }
      return response.url;
    })
    .then((catImageUrl) => {
      catImgContainer.innerHTML = `<img src="${catImageUrl}" alt="Cat Image">`;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

document.getElementById("Fbtn").addEventListener("click", generateCuteat);
