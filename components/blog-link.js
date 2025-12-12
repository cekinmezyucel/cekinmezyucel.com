class BlogLink extends HTMLElement {

    connectedCallback() {
        const linkText = this.getAttribute('link-text');
        const linkHref = this.getAttribute('link-href');
        const dateText = this.getAttribute('date-text');

        this.innerHTML = `
        <div class="card">
            <a href="blog-post.html?post=${linkHref}" class="card-link">${linkText}</a>
            <p class="card-date">${dateText}</p>
        </div>
        `;
    }
}

customElements.define('blog-link-component', BlogLink);