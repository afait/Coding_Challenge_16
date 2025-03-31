// Taks 2 - Fetch Products with .then()

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    // Requests the URL
        .then(response => {
            if (!response.ok) {
                throw new Error ('Error');
            }
            return response.json();
        })
        // if there is no error it returns the json
        .then(data => {
            console.log(data)
                displayProducts(data)
})

        
        // Logs the data from the array using all the product names
        .catch(error => {
            console.error('An Error Has Occured:', error);
        });
        // if there is an error, it will log "An Error Has Occured" with the name of the error
};


// Task 3 - Fetch Products with async/await

async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products')
        // fetches the website
        if (!response.ok) {
            throw new Error ('Error with network');
        }
        // If there is an error connecting the console will show "Error with network"

        const products = await response.json();
        displayProducts(products);
        console.log(products);
    } catch (error) {
        handleError(error)
    }};
    // If an error occurs, it gets passed to handleError

        

    // Task 4 - Display the Products

    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');
    // Creates function to show all of the products 
        
        for (let i = 0; i < products.length && i < 5; i++) {
            const product = products[i];
    // Loops and adds products until there are five products

            
            const productElement = document.createElement('div');
            productElement.classList.add('product');
    
            const productName = document.createElement('h3');
            productName.textContent = product.fields.name;
            // Names each product
    
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            // Sets the price of the product and rounds to 2 decimal places
    
            const productImage = document.createElement('img');
            productImage.src = product.fields.image[0].url; 
            
            productElement.appendChild(productName);
            productElement.appendChild(productPrice);
            productElement.appendChild(productImage);

            // Appends the products name, price and image
    
            productContainer.appendChild(productElement);
        };
    }


    // Task 5 - Resuable Error Hangler

    function handleError(error) {
        console.error("An error has occurred", error.message)
        // Created reusable handleError function
    };


    // Task 6 - Call Your Fetch Functions

    fetchProductsThen();
    fetchProductsAsync();