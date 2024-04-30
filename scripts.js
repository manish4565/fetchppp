// scripts.js
const userInfo = document.getElementById('user-info');
const productsContainer = document.getElementById('products');

// Fetch user info
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        const loggedInUser = users.find(user => user.loggedIn);
        if (loggedInUser) {
            userInfo.textContent = `Welcome, ${loggedInUser.name}`;
        }
    });

// Fetch products
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.src}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.ratings}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn" onclick="deleteFromCart(${product.id})">Delete from Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    });

// Add product to cart
function addToCart(productId) {
    // Implement adding product to cart
}

// Delete product from cart
function deleteFromCart(productId) {
    // Implement deleting product from cart
}
