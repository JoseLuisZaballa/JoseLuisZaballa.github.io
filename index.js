// Array to store product data
	var products = [
		{
			name: "Jeans",
			class: "jeans",
			colors: ["Classic Blue"],
			sizes: ["38", "40", "42", "44"],
			price: 49.99,
			description: "Comfortable and stylish jeans.",
			image: "jeans.jpg",
			inventory: {
				"Classic Blue-38": 10,
				"Classic Blue-40": 10,
				"Classic Blue-42": 10,
				"Classic Blue-44": 10
			}
		},
		{
			name: "Shirt long-sleeve",
			class: "shirt",
			colors: ["Blue", "Green"],
			sizes: ["Small", "Medium", "Large", "XLarge"],
			price: 14.99,
			description: "Soft and breathable shirt.",
			image: "shirt-blue.jpeg",
			inventory: {
				"Blue-Small": 10,
				"Blue-Medium": 10,
				"Blue-Large": 10,
				"Blue-XLarge": 10,
				"Green-Small": 10,
				"Green-Medium": 10,
				"Green-Large": 10,
				"Green-XLarge": 10,
			}
		},
		{
			name: "Sport Bra",
			class: "bra",
			colors: ["Gray", "Black"],
			sizes: ["Small", "Medium", "Large", "XLarge"],
			price: 29.99,
			description: "Soft and breathable bra.",
			image: "bra.jpg",
			inventory: {
				"Gray-Small": 10,
				"Gray-Medium": 10,
				"Gray-Large": 10,
				"Gray-XLarge": 10,
				"Black-Small": 10,
				"Black-Medium": 10,
				"Black-Large": 10,
				"Black-XLarge": 10,
			}
		},
		{
			name: "5pk Body Suits",
			class: "body_suit",
			colors: ["White"],
			sizes: ["0M", "3M", "6M", "12M"],
			price: 44.99,
			description: "Soft and breathable body suits.",
			image: "baby_bodysuit.jpeg",
			inventory: {
				"White-0M": 10,
				"White-3M": 10,
				"White-6M": 10,
				"White-12M": 10,
			}
		},
		{
			name: "Shirt short-sleeve",
			class: "shirt",
			colors: ["Black", "White"],
			sizes: ["Small", "Medium", "Large", "XLarge"],
			price: 12.99,
			description: "Soft and breathable shirt.",
			image: "shirt_2.jpg",
			inventory: {
				"Black-Small": 10,
				"Black-Medium": 10,
				"Black-Large": 10,
				"Black-XLarge": 10,
				"White-Small": 10,
				"White-Medium": 10,
				"White-Large": 10,
				"White-XLarge": 10,
			}
		},
		{
			name: "Body long-sleeve",
			class: "body_suit",
			colors: ["Blue", "Pink"],
			sizes: ["0M", "3M", "6M", "12M"],
			price: 9.99,
			description: "Ultra comfort baby suit.",
			image: "baby_bodysuit_2.jpg",
			inventory: {
				"Blue-0M": 10,
				"Blue-3M": 10,
				"Blue-6M": 10,
				"Blue-12M": 10,
				"Pink-0M": 10,
				"Pink-3M": 10,
				"Pink-6M": 10,
				"Pink-12M": 10,
			}
		},
		{
			name: "Fashion Jeans",
			class: "jeans",
			colors: ["Blue", "Black"],
			sizes: ["40", "42"],
			price: 99.99,
			description: "Chic jeans.",
			image: "jeans_2.jpg",
			inventory: {
				"Blue-40": 10,
				"Blue-42": 10,
				"Black-40": 10,
				"Black-42": 10
			}
		},
		{
			name: "Sneakers",
			class: "sneakers",
			colors: ["Black", "Blue"],
			sizes: ["6", "7", "8", "9", "10"],
			price: 74.99,
			description: "Soft and breathable sneakers.",
			image: "sneakers.jpg",
			inventory: {
				"Black-6": 10,
				"Black-7": 10,
				"Black-8": 10,
				"Black-9": 10,
				"Black-10": 10,
				"Blue-6": 10,
				"Blue-7": 10,
				"Blue-8": 10,
				"Blue-9": 10,
				"Blue-10": 10
			}
		},
		{
			name: "3pk Body suits",
			class: "body_suit",
			colors: ["Unique"],
			sizes: ["0M", "3M", "6M", "12M"],
			price: 29.99,
			description: "Roar dinosaurs.",
			image: "baby_bodysuit_3.jpg",
			inventory: {
				"Unique-0M": 10,
				"Unique-3M": 10,
				"Unique-6M": 10,
				"Unique-12M": 10,
			}
		},
		{
			name: "Heather Sneakers",
			class: "sneakers",
			colors: ["Gray", "Blue"],
			sizes: ["6", "7", "8", "9", "10"],
			price: 59.99,
			description: "Comfortable sneakers.",
			image: "sneakers_2.jpg",
			inventory: {
				"Gray-6": 10,
				"Gray-7": 10,
				"Gray-8": 10,
				"Gray-9": 10,
				"Gray-10": 10,
				"Blue-6": 10,
				"Blue-7": 10,
				"Blue-8": 10,
				"Blue-9": 10,
				"Blue-10": 10
			}
		},
		{
			name: "Super Shirt",
			class: "shirt",
			colors: ["Unique"],
			sizes: ["Small", "Medium", "Large", "XLarge"],
			price: 24.99,
			description: "Cape is sold separately.",
			image: "super_shirt.jpg",
			inventory: {
				"Unique-Small": 10,
				"Unique-Medium": 10,
				"Unique-Large": 10,
				"Unique-XLarge": 10
			}
		}
	];
	
// Function to create a product card element
function createProductCard(product) {
	// Create the HTML elements
	var card = document.createElement("div");
	card.classList.add("col-md-2", "apparel-category", product.class.toLowerCase());

	var innerCard = document.createElement("div");
	innerCard.classList.add("card");
	innerCard.style.width = "12rem";

	var img = document.createElement("img");
	img.src = product.image;
	img.classList.add("card-img-top");
	img.alt = product.name;

	var cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	var title = document.createElement("h5");
	title.classList.add("card-title");
	title.textContent = product.name;

	var description = document.createElement("p");
	description.classList.add("card-text");
	description.textContent = product.description;

	var colorSelect = document.createElement("select");
	colorSelect.id = product.name.toLowerCase() + "-color";
	for (var i = 0; i < product.colors.length; i++) {
		var option = document.createElement("option");
		option.value = product.colors[i];
		option.textContent = product.colors[i];
		colorSelect.appendChild(option);
	}

	var sizeSelect = document.createElement("select");
	sizeSelect.id = product.name.toLowerCase() + "-size";
	for (var i = 0; i < product.sizes.length; i++) {
		var option = document.createElement("option");
		option.value = product.sizes[i];
		option.textContent = product.sizes[i];
		sizeSelect.appendChild(option);
	}

	var price = document.createElement("p");
	price.classList.add("card-text");
	price.textContent = "$" + product.price.toFixed(2);

	var button = document.createElement("button");
	button.textContent = "Add to Cart";
	button.onclick = function() {
		var color = document.getElementById(product.name.toLowerCase() + "-color").value;
		var size = document.getElementById(product.name.toLowerCase() + "-size").value;
		addToCart(products.indexOf(product), color, size);
	};

	// Append the child elements to the card body
	cardBody.appendChild(title);
	cardBody.appendChild(description);
	cardBody.appendChild(colorSelect);
	cardBody.appendChild(sizeSelect);
	cardBody.appendChild(price);
	cardBody.appendChild(button);

	// Append the card body to the inner card
	innerCard.appendChild(img);
	innerCard.appendChild(cardBody);

	// Append the inner card to the card
	card.appendChild(innerCard);

	// Append the card to the parent container element
	var parentContainer = document.getElementById("product-cards");
	parentContainer.appendChild(card);

	return card;
}

// Array to store items in cart
var cart = [];

// Function to add item to cart
function addToCart(productIndex, color, size) {
	// Get selected product
	var product = products[productIndex];

	// Check if item is already in cart
	var cartIndex = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].productIndex == productIndex && cart[i].color == color && cart[i].size == size) {
			cartIndex = i;
			break;
		}
	}

	// If item is already in cart, increase quantity
	if (cartIndex >= 0) {
		cart[cartIndex].quantity++;
	} else {
		// Otherwise, add new item to cart
		cart.push({
			productIndex: productIndex,
			color: color,
			size: size,
			quantity: 1
		});
	}

	// Update inventory
	product.inventory[color + "-" + size]--;

	// Update cart menu
	updateCartMenu();
}

// Function to increment the quantity of an item in the cart
function incrementCartItem(index) {
	cart[index].quantity++;
	updateCartMenu();   
}

// Function to decrement the quantity of an item in the cart
function decrementCartItem(index) {
	cart[index].quantity--;
	if (cart[index].quantity <= 0) {
	removeFromCart(index);
	} else {
	updateCartMenu();
	}
}

// Function to update cart menu
function updateCartMenu() {
	// Get cart menu element
	var cartMenu = document.getElementById("cart-container");

	// Clear cart menu
	cartMenu.innerHTML = "";

	// Calculate total price
	var totalPrice = 0;

	// Check if cart is empty
	if (cart.length === 0) {
		// Display "Your cart is empty" message
		cartMenu.innerHTML = "<h2>Your cart is empty</h2>";
	} else {
		// Add items to cart menu
		for (var i = 0; i < cart.length; i++) {
			// Get product data
			var product = products[cart[i].productIndex];

			// Calculate item price
			var itemPrice = product.price * cart[i].quantity;

			// Add item to cart menu
			cartMenu.innerHTML += "<div class='cart-item'><img src='" + product.image + "' width='50' height='50'>" +
				"<div>" + product.name + " - " + cart[i].color + " - " + cart[i].size + "</div>" +
				"<div><button onclick='decrementCartItem(" + i + ")'>-</button>" + 
				"Quantity: " + cart[i].quantity + "<button onclick='incrementCartItem(" + i + ")'>+</button>" +
				" - Price: $" + itemPrice.toFixed(2) + "</div>" +
				"<div><button onclick='removeFromCart(" + i + ")'>Remove</button></div>";

			// Add item price to total price
			totalPrice += itemPrice;
		}

		// Add total price and "Buy Now" button to cart menu
		cartMenu.innerHTML += "<div class='cart-total'>" +
			"<div>Total: <span id='cart-total-price'>$" + totalPrice.toFixed(2) + "</span></div>" +
			"<button onclick='buyNow()'>Buy Now</button>" +
			"</div>";
	}

	// Show cart menu
	cartMenu.style.display = "block";
}

	


// Function to remove item from cart
function removeFromCart(index) {
	// Get item from cart
	var item = cart[index];

	// Get product data
	var product = products[item.productIndex];

	// Increase inventory
	product.inventory[item.color + "-" + item.size] += item.quantity;

	// Remove item from cart
	cart.splice(index, 1);
	// Update cart menu
	updateCartMenu();
}

function filterApparel(category) {
	var apparelItems = document.getElementsByClassName("apparel-category");
	for (var i = 0; i < apparelItems.length; i++) {
		if (category === 'all' || apparelItems[i].classList.contains(category)) {
		apparelItems[i].style.display = "block";
		} else {
		apparelItems[i].style.display = "none";
		}
	}
}

for (var i = 0; i < products.length; i++) {
	createProductCard(products[i]);
}