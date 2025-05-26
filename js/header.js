class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <header>
        <nav class="navbar">
            <i class="fas fa-bars" id="openMenu" onclick="showMenu()"></i>
            <div class="logo">
                <h1>IT Mobile Solution</h1>
            </div>
            <div class="nav-links" id="navLinks">
                <i class="fas fa-times" id="closeMenu" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="/index.html#home">Home</a></li>
                    <li><a href="/index.html#services">Services</a></li>
                    <li><a href="/pages/shop.html">Shop</a></li>
                    <li><a href="/pages/gallery.html">Gallery</a></li>
                    <li><a href="/index.html#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
        `;
    }
}

customElements.define('main-header', Header); 