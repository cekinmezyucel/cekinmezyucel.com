document.addEventListener("DOMContentLoaded", function() {
    const blogContent = document.getElementById('blog-content');

    fetch('blog_posts/first_blog_post.md')
        .then(response => response.text())
        .then(markdown => {
            blogContent.innerHTML = marked.marked(markdown);
        })
        .catch(error => {
            console.error('Error fetching the Markdown file:', error);
        });
});