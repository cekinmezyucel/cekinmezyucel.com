class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2024 Yucel Cekinmez</p>
        </footer>
    `;
    }

}

customElements.define('footer-component', Footer);