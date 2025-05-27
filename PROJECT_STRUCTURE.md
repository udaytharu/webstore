# IT Mobile Solution - Project Structure

## Overview
This is a website for IT Mobile Solution, a business offering mobile repair services, photography services, and mobile accessories. The project follows a modular structure with separate directories for different types of assets and pages.

## Directory Structure

```
webstore/
├── index.html              # Main landing page
├── css/                    # Stylesheets
│   ├── styles.css         # Main stylesheet (12KB)
│   ├── shop.css           # Shop page styles (6.9KB)
|   ├──components.css      # header & footer style (2.81KB)
│   └── gallery.css        # Gallery page styles (3.8KB)
│
├── js/                     # JavaScript files
│   ├── script.js          # Common JavaScript functions (2.3KB)
│   ├── shop.js            # Shop functionality (13KB)
|   ├──header.js           # header using inner html (1005B)
|   ├──footer.js           # footer using inner htmk (2.92KB)
│   └── gallery.js         # Gallery functionality (5.2KB)
│
├── pages/                  # Additional HTML pages
│   ├── shop.html          # Shop page (9.6KB)
│   ├── gallery.html       # Gallery page (3.0KB)
│   ├── faq.html           # FAQ page (17KB)
│   ├── privacy-policy.html # Privacy policy (11KB)
│   └── terms.html         # Terms of service (11KB)
│
└── assets/                 # Media and other assets
    ├── images/            # General images
    ├── gallery/           # Gallery photos
    └── shop/              # Shop product images
        ├── cases/         # Phone cases images
        ├── chargers/      # Chargers images
        ├── protectors/    # Screen protectors images
        ├── earphones/     # Earphones images
        └── accessories/   # Other accessories images
```

## File Details

### Main Pages
- **index.html** (9.0KB)
  - Landing page with services overview
  - Contains hero section, services, why choose us, and contact sections
  - Links to all other pages

### CSS Files
- **styles.css** (12KB)
  - Main stylesheet with global styles
  - Contains variables, layout, typography, and component styles
- **shop.css** (6.9KB)
  - Styles specific to the shop page
  - Product grid, cart, and checkout styles
- **gallery.css** (3.8KB)
  - Styles for the gallery page
  - Photo grid and lightbox styles
- **components.css**(2.81KB)
  - Style for the header and footer
  - 

### JavaScript Files
- **script.js** (2.3KB)
  - Common functionality
  - Navigation menu, form handling
- **shop.js** (13KB)
  - Shop functionality
  - Product display, cart management, checkout
- **gallery.js** (5.2KB)
  - Gallery functionality
  - Photo grid, lightbox, filtering

### Additional Pages
- **shop.html** (9.6KB)
  - Product catalog
  - Shopping cart and checkout
- **gallery.html** (3.0KB)
  - Photo gallery
  - Photography portfolio
- **faq.html** (17KB)
  - Frequently asked questions
  - Organized by service categories
- **privacy-policy.html** (11KB)
  - Privacy policy and data handling
- **terms.html** (11KB)
  - Terms of service and conditions

### Assets
- **images/**
  - General website images
  - Icons and backgrounds
- **gallery/**
  - Photography portfolio images
- **shop/**
  - Product images organized by category
  - Each category has its own subdirectory

## Dependencies
- Font Awesome 6.0.0 (CDN)
  - Used for icons throughout the website
- Custom CSS variables for consistent theming
- Responsive design for all screen sizes

## Notes
- All pages use a consistent header and footer
- Navigation is standardized across all pages
- CSS uses a dark blue theme with modern design elements
- JavaScript is modular and organized by functionality
- Images are optimized and organized by category
- All pages are responsive and mobile-friendly

## Future Improvements
1. Add image optimization
2. Implement lazy loading for images
3. Add more product categories
4. Enhance gallery filtering
5. Implement search functionality
6. Add user authentication
7. Implement a backend for orders
8. Add a blog section
9. Implement SEO optimizations
10. Add analytics tracking 