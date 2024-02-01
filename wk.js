const APIURL= "https://cataas.com/cat"

function generateCat() {
    const catImgContainer = document.getElementById('Catimg');

    // Fetch a new cat image from the API
    fetch('https://cataas.com/cat')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat image');
            }
            return response.url;
        })
        .then(catImageUrl => {
            // Display the fetched cat image
            catImgContainer.innerHTML = `<img src="${catImageUrl}" alt="Cat Image">`;
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

// Add click event listener to the "Generate new Cat" button
document.getElementById('Rbtn').addEventListener('click', generateCuteat);


const FatURL= "https://cataas.com/cat/fat"

function generateCuteat() {
    const catImgContainer = document.getElementById('Catimg');

    // Fetch a new cat image from the API
    fetch('https://cataas.com/cat/cute')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat image');
            }
            return response.url;
        })
        .then(catImageUrl => {
            // Display the fetched cat image
            catImgContainer.innerHTML = `<img src="${catImageUrl}" alt="Cat Image">`;
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

// Add click event listener to the "Generate new Cat" button
document.getElementById('Fbtn').addEventListener('click', generateCuteat);