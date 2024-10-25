document.addEventListener("DOMContentLoaded", function() {
    const blogPostContent = document.getElementById('blog-content');
    const urlParams = new URLSearchParams(window.location.search);
    const post = urlParams.get('post');

    if (post) {
        fetch(`blog_posts/${post}.md`)
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
});