class Footer extends HTMLElement {

    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
        <footer class="footer">
            <p>&copy; ${year} Yucel Cekinmez. All rights reserved.</p>
        </footer>
    `;
    }

}

customElements.define('footer-component', Footer);