// Sample gallery data
const galleryItems = [
    {
        id: 1,
        title: "Professional Portrait",
        category: "portrait",
        image: "/assets/gallery/portrait.jpg",
        description: "Professional portrait photography session in studio"
    },
    {
        id: 2,
        title: "Wedding Ceremony",
        category: "event",
        image: "/assets/gallery/event.png",
        description: "Beautiful wedding ceremony photography"
    },
    {
        id: 3,
        title: "Product Showcase",
        category: "product",
        image: "/assets/gallery/accessories.jpg",
        description: "Professional product photography for e-commerce"
    },
    {
        id: 4,
        title: "Mobile Photography",
        category: "mobile",
        image: "/assets/gallery/main.jpg",
        description: "Stunning mobile photography showcase"
    },
    {
        id: 5,
        title: "Family Portrait",
        category: "portrait",
        image: "/assets/gallery/photography.jpg",
        description: "Family portrait session in natural setting"
    },
    {
        id: 6,
        title: "Corporate Event",
        category: "event",
        image: "/assets/gallery/reparing.png",
        description: "Corporate event photography coverage"
    },
    {
        id: 7,
        title: "Accessories Collection",
        category: "product",
        image: "/assets/gallery/portrait.jpg",
        description: "Mobile accessories product photography"
    },
    {
        id: 8,
        title: "Street Photography",
        category: "mobile",
        image: "/assets/gallery/event.png",
        description: "Urban street photography with mobile device"
    }
];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const categoryFilter = document.getElementById('categoryFilter');
const viewButtons = document.querySelectorAll('.view-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');

let currentView = 'grid';
let currentIndex = 0;
let filteredItems = [...galleryItems];

// Initialize the gallery
function initGallery() {
    displayGalleryItems(galleryItems);
    setupEventListeners();
}

// Display gallery items
function displayGalleryItems(items) {
    galleryGrid.innerHTML = '';
    galleryGrid.className = `gallery-grid ${currentView}`;

    items.forEach((item, index) => {
        const galleryItem = `
            <div class="gallery-item ${getItemClass(item)}" onclick="openLightbox(${index})">
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-item-overlay">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-category">${item.category}</p>
                </div>
            </div>
        `;
        galleryGrid.innerHTML += galleryItem;
    });
}

// Get item class for masonry layout
function getItemClass(item) {
    if (currentView === 'masonry') {
        const random = Math.random();
        if (random < 0.3) return 'tall';
        if (random < 0.6) return 'wide';
    }
    return '';
}

// Filter gallery items
function filterGallery() {
    const category = categoryFilter.value;
    filteredItems = category === 'all' 
        ? [...galleryItems]
        : galleryItems.filter(item => item.category === category);
    displayGalleryItems(filteredItems);
}

// Setup event listeners
function setupEventListeners() {
    // View buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentView = button.dataset.view;
            displayGalleryItems(filteredItems);
        });
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
}

// Lightbox functions
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const item = filteredItems[currentIndex];
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % filteredItems.length;
    updateLightboxContent();
}

// Initialize the gallery when the page loads
initGallery(); 