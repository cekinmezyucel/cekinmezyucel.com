class BlogPostRenderer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const blogPostContent = this;
        const urlParams = new URLSearchParams(window.location.search);
        const post = urlParams.get('post');

        if (post) {
            fetch(`blog-posts/${post}.md`)
                .then(response => response.text())
                .then(markdown => {
                    blogPostContent.innerHTML = marked.marked(markdown);
                })
                .catch(error => {
                    console.error('Error fetching the Markdown file:', error);
                    blogPostContent.innerHTML = '<p>Error loading post.</p>';
                });
        } else {
            blogPostContent.innerHTML = '<p>No post specified.</p>';
        }
    }
}

customElements.define('blog-post-renderer', BlogPostRenderer);