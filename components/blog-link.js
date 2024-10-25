class BlogLink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const linkText = this.getAttribute('link-text');
        const linkHref = this.getAttribute('link-href');
        const dateText = this.getAttribute('date-text');

        this.innerHTML = `
        <div class="card">
            <a href="blog-post.html?post=${linkHref}" class="blog-link">${linkText}</a>
            <p class="blog-date">${dateText}</p>
        </div>
        `;
    }
}

customElements.define('blog-link-component', BlogLink);