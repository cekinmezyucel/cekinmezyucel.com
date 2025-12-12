/**
 * Blog List Component
 *
 * Fetches blog-posts.json and dynamically renders blog post cards.
 * Posts are already sorted by date (newest first) from the build script.
 */
class BlogList extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    async render() {
        try {
            const response = await fetch('blog-posts.json');
            const posts = await response.json();

            if (posts.length === 0) {
                this.innerHTML = '<p>No blog posts yet.</p>';
                return;
            }

            this.innerHTML = posts.map(post => this.renderCard(post)).join('');
        } catch (error) {
            console.error('Error loading blog posts:', error);
            this.innerHTML = '<p>Error loading blog posts.</p>';
        }
    }

    renderCard(post) {
        const tagsHtml = post.tags && post.tags.length > 0
            ? `<div class="card-tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`
            : '';

        const excerptHtml = post.excerpt
            ? `<p class="card-excerpt">${post.excerpt}</p>`
            : '';

        return `
            <div class="card">
                <a href="blog-post.html?post=${post.slug}" class="card-link">${post.title}</a>
                <p class="card-date">${post.date}</p>
                ${excerptHtml}
                ${tagsHtml}
            </div>
        `;
    }
}

customElements.define('blog-list', BlogList);
