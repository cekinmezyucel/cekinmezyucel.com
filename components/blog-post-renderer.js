/**
 * Blog Post Renderer Component
 *
 * Fetches metadata from blog-posts.json and content from markdown file.
 * Metadata is pre-parsed by build script (gray-matter), no client-side YAML parsing.
 */
class BlogPostRenderer extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    async render() {
        const slug = new URLSearchParams(globalThis.location.search).get('post');

        if (!slug) {
            this.innerHTML = '<p>No post specified.</p>';
            return;
        }

        try {
            const [markdownResponse, postsResponse] = await Promise.all([
                fetch(`blog-posts/${slug}.md`),
                fetch('blog-posts.json')
            ]);

            if (!markdownResponse.ok) {
                this.innerHTML = '<p>Post not found.</p>';
                return;
            }

            const markdown = await markdownResponse.text();
            const posts = await postsResponse.json();
            const metadata = posts.find(p => p.slug === slug) || {};

            const content = this.stripFrontmatter(markdown);
            this.innerHTML = this.renderPost(metadata, content);

            if (metadata.title) {
                document.title = `${metadata.title} | Yucel Cekinmez`;
            }
        } catch (error) {
            console.error('Error loading post:', error);
            this.innerHTML = '<p>Error loading post.</p>';
        }
    }

    stripFrontmatter(markdown) {
        return markdown.replace(/^---[\s\S]*?---\n*/, '');
    }

    renderPost(metadata, content) {
        const tags = metadata.tags || [];
        const tagsHtml = tags.length > 0
            ? `<div class="post-tags">${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`
            : '';

        return `
            <nav class="post-nav">
                <a href="blog.html">&larr; Back to Blog</a>
            </nav>
            <article class="post">
                <header class="post-header">
                    ${metadata.date ? `<time class="post-date">${metadata.date}</time>` : ''}
                    ${tagsHtml}
                </header>
                <div class="post-content">
                    ${marked.marked(content)}
                </div>
            </article>
        `;
    }
}

customElements.define('blog-post-renderer', BlogPostRenderer);