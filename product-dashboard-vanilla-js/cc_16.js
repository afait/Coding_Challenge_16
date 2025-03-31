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
            data.forEach(product => {
                console.log(product.name);
            });
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
        // Displays all of teh products
    } catch (error) {
        handleError(error)
    };
    // If an error occurs, it gets passed to handleError
    function displayProducts(products) {
        const productList = document.getElementById('list of products');
// Created a function to show all of the products

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.textContent = product.name; 
            productList.appendChild(productElement);
          });
          // Appends the previous product list
        }
        
        function handleError(error) {
          console.error('Error fetching products:', error);
          // If there is an error it gets passed to this handleError which will log "Error fetching products" and display the name of the error that occurred
          const errorElement = document.createElement('div');
          errorElement.classList.add('error');
          errorElement.textContent = 'Failed to load products. Please try again later.';
          document.body.appendChild(errorElement);
        }
    };


    // Task 4 - Display the Products

    function displayProducts(products) {
        const productContainer = document.getElementById('Product Container');
    // Creates function to show all of the products 
        
        
        for (let i = 0; i < products.length && i < 5; i++) {
            const product = products[i];
    // Loops and adds products until there are five products

            
            const productElement = document.createElement('div');
            productElement.classList.add('product');
    
            const productName = document.createElement('h3');
            productName.textContent = product.name;
            // Names each product
    
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            // Sets the price of the product and rounds to 2 decimal places
    
            const productImage = document.createElement('img');
            productImage.src = product.imageUrl; 
            
            productElement.appendChild(productName);
            productElement.appendChild(productPrice);
            productElement.appendChild(productImage);

            // Appends the products name, price and image
    
            productContainer.appendChild(productElement);
        };
    }