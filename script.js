// Initialize EmailJS with your User ID
(function() {
    emailjs.init("xwC3cQRh_vNAZ1jVu");
})();

// Cart System (unchanged)
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.save();
    }

    updateQuantity(index, delta) {
        const item = this.items[index];
        item.quantity = Math.max(1, item.quantity + delta);
        this.save();
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.save();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateUI();
    }

    updateUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.querySelector('.cart-count');
        const cartTotalElement = document.getElementById('cart-total');
        const miniCart = document.getElementById('mini-cart');

        cartItemsContainer.innerHTML = this.items.length ? '' : '<p class="empty-cart">Your cart is empty.</p>';
        this.items.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <span>$${(item.price * item.quantity).toFixed(2)} (${item.quantity}x)</span>
                </div>
                <div class="cart-item-controls">
                    <button class="decrease-qty" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-qty" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}">×</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalElement.textContent = this.getTotal().toFixed(2);
        cartCount.textContent = this.getItemCount();
        miniCart.style.display = this.items.length ? 'block' : 'none';
    }
}

const cart = new Cart();

// Add to Cart (unchanged)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const product = {
            id: productCard.dataset.id,
            name: productCard.dataset.name,
            price: parseFloat(productCard.dataset.price),
            image: productCard.querySelector('img').src
        };
        cart.addItem(product);
        button.textContent = 'Added!';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }, 1000);
    });
});

// Cart Controls (unchanged)
document.getElementById('mini-cart').addEventListener('click', (e) => {
    const target = e.target;
    const index = parseInt(target.dataset.index);
    if (!Number.isInteger(index)) return;

    if (target.classList.contains('increase-qty')) {
        cart.updateQuantity(index, 1);
    } else if (target.classList.contains('decrease-qty')) {
        cart.updateQuantity(index, -1);
    } else if (target.classList.contains('remove-item')) {
        cart.removeItem(index);
    }
});

// Toggle Mini Cart (unchanged)
document.querySelector('.cart-icon').addEventListener('click', (e) => {
    e.stopPropagation();
    const miniCart = document.getElementById('mini-cart');
    miniCart.classList.toggle('active');
});

// Close Mini Cart when clicking outside (unchanged)
document.addEventListener('click', (e) => {
    const miniCart = document.getElementById('mini-cart');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!miniCart.contains(e.target) && !cartIcon.contains(e.target)) {
        miniCart.classList.remove('active');
    }
});

// Checkout Modal (unchanged)
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.querySelector('.close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const paymentRadios = document.querySelectorAll('input[name="payment"]');

checkoutBtn.addEventListener('click', () => {
    if (!cart.items.length) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    document.getElementById('mini-cart').classList.remove('active');
    checkoutModal.style.display = 'flex';
});

closeCheckout.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});

checkoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(checkoutForm);
    const paymentMethod = formData.get('payment');
    let paymentDetails = paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod;

    const order = {
        name: formData.get('name'),
        mobile: formData.get('mobile'),
        address: formData.get('address'),
        paymentMethod: paymentDetails,
        total: cart.getTotal(),
        items: cart.items
    };

    const currentDateTime = new Date().toLocaleString();
    const itemsList = order.items.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join(', ');

    const emailParams = {
        date_time: currentDateTime,
        name: order.name,
        address: order.address,
        mobile: order.mobile,
        items: itemsList,
        total: order.total.toFixed(2)
    };

    try {
        await emailjs.send('service_b53yo0p', 'template_yf9uc5b', emailParams);
        
        const orderSummary = `
            Order Placed Successfully!
            Name: ${order.name}
            Mobile: ${order.mobile}
            Address: ${order.address}
            Payment Method: ${order.paymentMethod}
            Total: $${order.total.toFixed(2)}
            Items: ${order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}
        `;
        showNotification(orderSummary, 'success');
        cart.clear();
        checkoutModal.style.display = 'none';
        checkoutForm.reset();
    } catch (error) {
        showNotification('Failed to place order. Please try again.', 'error');
    }
});

// Enhanced Contact Form with EmailJS and Confetti
let isFormSubmitting = false;

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isFormSubmitting) return;

    isFormSubmitting = true;
    const formData = new FormData(contactForm);
    
    const contactData = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        message: formData.get('message'),
        date_time: new Date().toLocaleString(),
        to_name: 'IT Mobile Solution',
        to_email: 'udautharu813@gmail.com' // Replace with your actual email
    };

    if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
        console.error('EmailJS is not properly initialized');
        showNotification('Error: Email service unavailable. Please try again later.', 'error');
        isFormSubmitting = false;
        return;
    }

    try {
        await emailjs.send('service_dfbln9o', 'template_90obdbh', contactData);
        showNotification('Message sent successfully! We will reply soon.', 'success');
        contactForm.reset();

        // Confetti animation
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
    } catch (error) {
        console.error('Failed to send message:', error);
        showNotification('Error sending message. Please try again or contact us directly at your-email@example.com.', 'error');
    } finally {
        isFormSubmitting = false;
    }
});

// Notification System (unchanged)
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Hamburger Menu (unchanged)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Lazy Loading and Fade-In Animation (unchanged)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Gallery Lightbox (unchanged)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});


// Initial Cart UI Update (unchanged)
cart.updateUI();

// Search Functionality for Shop (unchanged)
const searchInput = document.getElementById('search-input');
const productsGrid = document.getElementById('products-grid');
const productCards = productsGrid.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

// JavaScript
function callMe() {
    const button = document.querySelector('.callme-button');
    button.classList.add('shake');
    
    // Remove shake class after animation completes
    setTimeout(() => {
        button.classList.remove('shake');
    }, 500);
    
    // Your existing call functionality here
    window.location.href = 'tel:+1234567890'; // Replace with your actual phone number
}

function addToCart(productId, productName, price, image) {
    const button = event.target;
    button.classList.add('adding');
    
    // Add ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    button.appendChild(ripple);
    
    // Remove animation classes after animation completes
    setTimeout(() => {
        button.classList.remove('adding');
        ripple.remove();
    }, 500);

    // Update cart count with animation
    const cartCount = document.querySelector('.cart-count');
    cartCount.classList.add('updating');
    setTimeout(() => {
        cartCount.classList.remove('updating');
    }, 500);

    // Add item to cart
    const cartItem = {
        id: productId,
        name: productName,
        price: price,
        image: image,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification('Item added to cart!', 'success');
}

function removeFromCart(productId) {
    const cartItem = document.querySelector(`[data-product-id="${productId}"]`);
    if (cartItem) {
        cartItem.classList.add('removing');
        
        setTimeout(() => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            showNotification('Item removed from cart!', 'success');
        }, 300);
    }
}

function updateQuantity(productId, change) {
    const cartItem = document.querySelector(`[data-product-id="${productId}"]`);
    if (cartItem) {
        const quantitySpan = cartItem.querySelector('.quantity');
        let currentQuantity = parseInt(quantitySpan.textContent);
        currentQuantity += change;

        if (currentQuantity > 0) {
            quantitySpan.textContent = currentQuantity;
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = currentQuantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartTotal();
            }
        } else {
            removeFromCart(productId);
        }
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}