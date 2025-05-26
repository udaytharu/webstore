class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <footer>
        <div class="footer-content">
            <div class="footer-sections">
                <div class="footer-section">
                    <h3>IT Mobile Solution</h3>
                    <p>Your trusted partner for mobile repairs, photography, and accessories. We provide quality service and products to keep your devices running smoothly.</p>
                    <div class="social-links">
                        <a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/index.html#home">Home</a></li>
                        <li><a href="/index.html#services">Services</a></li>
                        <li><a href="/pages/shop.html">Shop</a></li>
                        <li><a href="/pages/gallery.html">Gallery</a></li>
                        <li><a href="/index.html#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Mobile Repair</li>
                        <li>Screen Replacement</li>
                        <li>Photography</li>
                        <li>Mobile Accessories</li>
                        <li>Photo Editing</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> Your Shop Address</li>
                        <li><i class="fas fa-phone"></i> Your Phone Number</li>
                        <li><i class="fas fa-envelope"></i> your.email@example.com</li>
                        <li><i class="fas fa-clock"></i> Mon-Sat: 9:00 AM - 8:00 PM</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 IT Mobile Solution. Created by <a href="https://www.udayrajchaudhary.com.np/">uday-studio</a> All rights reserved.</p>
                <div class="footer-links">
                    <a href="/pages/privacy-policy.html">Privacy Policy</a>
                    <a href="/pages/terms.html">Terms of Service</a>
                    <a href="/pages/faq.html">FAQ</a>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('main-footer', Footer); 