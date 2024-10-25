class Footer extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <p>&copy; 2024 Yucel Cekinmez</p>
        </footer>
    `;
    }

}

customElements.define('footer-component', Footer);