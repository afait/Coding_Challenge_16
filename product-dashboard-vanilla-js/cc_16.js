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
}