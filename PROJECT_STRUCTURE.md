# IT Mobile Solution - Project Structure

## Overview
This is a website for IT Mobile Solution, a business offering mobile repair services, photography services, and mobile accessories. The project follows a modular structure with separate directories for different types of assets and pages. The website uses reusable components for the header and footer across all pages.

## Directory Structure

```
webstore/
├── index.html              # Main landing page
├── css/                    # Stylesheets
│   ├── styles.css         # Main stylesheet (12KB)
│   ├── shop.css           # Shop page styles (6.9KB)
│   ├── components.css     # Header & footer styles (2.81KB)
│   └── gallery.css        # Gallery page styles (3.8KB)
│
├── js/                     # JavaScript files
│   ├── script.js          # Common JavaScript functions (2.3KB)
│   ├── shop.js            # Shop functionality (13KB)
│   ├── header.js          # Header component (1.0KB)
│   ├── footer.js          # Footer component (2.92KB)
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
  - Uses reusable header and footer components

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
- **components.css** (2.81KB)
  - Styles for reusable components
  - Header styles:
    - Navigation menu
    - Logo
    - Shopping cart icon
    - Mobile responsive menu
  - Footer styles:
    - Grid layout for sections
    - Social media links
    - Contact information
    - Quick links
    - Copyright notice

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
- **header.js** (1.0KB)
  - Header component using Web Components
  - Features:
    - Responsive navigation menu
    - Mobile menu toggle
- **footer.js** (2.92KB)
  - Footer component using Web Components
  - Features:
    - About section
    - Quick links navigation
    - Services list
    - Contact information
    - Social media links
    - Copyright and legal links

### Additional Pages
- **shop.html** (9.6KB)
  - Product catalog
  - Shopping cart and checkout
  - Uses reusable  footer but owns its sperate header
- **gallery.html** (3.0KB)
  - Photo gallery
  - Photography portfolio
  - Uses reusable header and footer
- **faq.html** (17KB)
  - Frequently asked questions
  - Organized by service categories
  - Uses reusable header and footer
- **privacy-policy.html** (11KB)
  - Privacy policy and data handling
  - Uses reusable header and footer
- **terms.html** (11KB)
  - Terms of service and conditions
  - Uses reusable header and footer

### Assets
- **images/**
  - General website images
  - Icons and backgrounds
- **gallery/**
  - Photography portfolio images
- **shop/**
  - Product images organized by category
  - Each category has its own subdirectory

## Components

### Header Component
- Implemented as a Web Component (`<main-header>`)
- Features:
  - Responsive navigation menu
  - Logo with home link
  - Mobile-friendly hamburger menu
  - Sticky positioning
  - Smooth transitions

### Footer Component
- Implemented as a Web Component (`<main-footer>`)
- Features:
  - Four-column grid layout
  - About section with company description
  - Quick links navigation
  - Services overview
  - Contact information
  - Social media links
  - Copyright notice
  - Legal links (Privacy Policy, Terms, FAQ)
  - Responsive design

## Dependencies
- Font Awesome 6.0.0 (CDN)
  - Used for icons throughout the website
- Custom CSS variables for consistent theming
- Web Components for reusable header and footer
- Responsive design for all screen sizes

## Notes
- All pages use the same header and footer components but shop page has its owns header with cart function
- Components are implemented using Web Components for better reusability
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
11. Add dark mode support
12. Implement header search functionality
13. Add language switcher in header
14. Enhance mobile menu animations
15. Add newsletter subscription in footer 