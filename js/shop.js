// Sample product data
const products = [
    // Phone Cases
    {
        id: 1,
        name: "iPhone 13 Pro Case",
        price: 29.99,
        category: "cases",
        image: "/assets/shop/cases/cover.jpg",
        description: "Premium protective case for iPhone 13 Pro with military-grade protection"
    },
    {
        id: 2,
        name: "Samsung S21 Ultra Case",
        price: 24.99,
        category: "cases",
        image: "/assets/shop/cases/samsung-case.jpg",
        description: "Slim fit case with raised edges for Samsung S21 Ultra"
    },
    {
        id: 3,
        name: "Google Pixel 6 Pro Case",
        price: 22.99,
        category: "cases",
        image: "/assets/shop/cases/pixel-case.jpg",
        description: "Clear transparent case for Google Pixel 6 Pro"
    },
    {
        id: 4,
        name: "iPhone 12 Silicone Case",
        price: 19.99,
        category: "cases",
        image: "/assets/shop/cases/iphone-silicone.jpg",
        description: "Soft silicone case with microfiber lining for iPhone 12"
    },

    // Chargers
    {
        id: 5,
        name: "Fast Charging Cable",
        price: 19.99,
        category: "chargers",
        image: "/assets/shop/chargers/charger.jpg",
        description: "3-in-1 Fast Charging Cable (USB-C, Lightning, Micro USB)"
    },
    {
        id: 6,
        name: "Wireless Charging Pad",
        price: 34.99,
        category: "chargers",
        image: "/assets/shop/chargers/wireless-charger.jpg",
        description: "15W Fast Wireless Charging Pad with LED indicator"
    },
    {
        id: 7,
        name: "Car Charger Adapter",
        price: 15.99,
        category: "chargers",
        image: "/assets/shop/chargers/car-charger.jpg",
        description: "Dual USB Car Charger with Quick Charge 3.0"
    },
    {
        id: 8,
        name: "Power Bank 20000mAh",
        price: 49.99,
        category: "chargers",
        image: "/assets/shop/chargers/power-bank.jpg",
        description: "High Capacity Power Bank with USB-C and USB-A ports"
    },

    // Screen Protectors
    {
        id: 9,
        name: "Tempered Glass Screen Protector",
        price: 14.99,
        category: "protectors",
        image: "/assets/shop/protectors/screen-protector.jpg",
        description: "9H Hardness Screen Protector with Oleophobic Coating"
    },
    {
        id: 10,
        name: "Privacy Screen Protector",
        price: 19.99,
        category: "protectors",
        image: "/assets/shop/protectors/privacy-protector.jpg",
        description: "Anti-Spy Privacy Screen Protector with Blue Light Filter"
    },
    {
        id: 11,
        name: "Camera Lens Protector",
        price: 12.99,
        category: "protectors",
        image: "/assets/shop/protectors/lens-protector.jpg",
        description: "Camera Lens Protector Set with Installation Kit"
    },
    {
        id: 12,
        name: "Full Coverage Screen Protector",
        price: 16.99,
        category: "protectors",
        image: "/assets/shop/protectors/full-coverage.jpg",
        description: "Full Coverage Screen Protector with Case-Friendly Design"
    },

    // Earphones
    {
        id: 13,
        name: "Wireless Earbuds",
        price: 49.99,
        category: "earphones",
        image: "/assets/shop/earphones/earphones.jpg",
        description: "Bluetooth 5.0 Wireless Earbuds with Noise Cancellation"
    },
    {
        id: 14,
        name: "Sports Earphones",
        price: 39.99,
        category: "earphones",
        image: "/assets/shop/earphones/sports-earphones.jpg",
        description: "Waterproof Sports Earphones with Ear Hooks"
    },
    {
        id: 15,
        name: "USB-C Earphones",
        price: 24.99,
        category: "earphones",
        image: "/assets/shop/earphones/usbc-earphones.jpg",
        description: "High-Quality USB-C Earphones with In-line Controls"
    },
    {
        id: 16,
        name: "Wireless Neckband",
        price: 44.99,
        category: "earphones",
        image: "/assets/shop/earphones/neckband.jpg",
        description: "Bluetooth Neckband with 20-hour Battery Life"
    },

    // Additional Accessories
    {
        id: 17,
        name: "Phone Stand",
        price: 12.99,
        category: "accessories",
        image: "/assets/shop/accessories/phone-stand.jpg",
        description: "Adjustable Phone Stand with Cable Management"
    },
    {
        id: 18,
        name: "Phone Grip",
        price: 9.99,
        category: "accessories",
        image: "/assets/shop/accessories/phone-grip.jpg",
        description: "Pop Socket Phone Grip with Swappable Tops"
    },
    {
        id: 19,
        name: "Phone Lanyard",
        price: 7.99,
        category: "accessories",
        image: "/assets/shop/accessories/lanyard.jpg",
        description: "Adjustable Phone Lanyard with Quick Release"
    },
    {
        id: 20,
        name: "Phone Cleaning Kit",
        price: 14.99,
        category: "accessories",
        image: "/assets/shop/accessories/cleaning-kit.jpg",
        description: "Professional Phone Cleaning Kit with Microfiber Cloth"
    }
];

// Cart functionality
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutTotal = document.getElementById('checkoutTotal');

// Initialize the shop
function initShop() {
    displayProducts(products);
    updateCartCount();
}

// Display products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCount();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            updateCartCount();
        }
    }
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });

    cartTotal.textContent = total.toFixed(2);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Cart sidebar toggle
function toggleCart(e) {
    if (e) {
        e.stopPropagation(); // Prevent event from bubbling up
    }
    cartSidebar.classList.toggle('active');
}

// Checkout functions
function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    checkoutItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const checkoutItem = `
            <div class="checkout-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
        checkoutItems.innerHTML += checkoutItem;
    });

    checkoutTotal.textContent = total.toFixed(2);
    checkoutModal.classList.add('active');
}

function hideCheckout() {
    checkoutModal.classList.remove('active');
}

// Search functionality
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    let filteredProducts = products;

    // First filter by category if not 'all'
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Then filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts(filteredProducts);
}

// Update filterProducts to work with search
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = products;

    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Apply search filter if there's a search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts(filteredProducts);
}

// Update sortProducts to work with search and category filters
function sortProducts() {
    const sortBy = document.getElementById('sortFilter').value;
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredProducts = [...products];

    // Apply category filter
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    // Apply sorting
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayProducts(filteredProducts);
}

// Event Listeners
cartIcon.addEventListener('click', function(e) {
    e.stopPropagation(); // Stop event from bubbling up
    toggleCart(e);
});

checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the order to a server
    alert('Thank you for your order! We will process it shortly.');
    cart = [];
    updateCart();
    updateCartCount();
    hideCheckout();
    toggleCart();
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    // Don't close if clicking inside cart
    if (cartSidebar.contains(e.target)) {
        return;
    }
    
    // Don't close if clicking on quantity buttons
    if (e.target.classList.contains('quantity-btn')) {
        return;
    }
    
    // Don't close if clicking on cart icon or its children
    if (cartIcon.contains(e.target)) {
        return;
    }
    
    // Close cart for all other clicks outside
    cartSidebar.classList.remove('active');
});

// Initialize the shop when the page loads
initShop(); 