# How to Build a List Component

Wow! The first day of my blog and I'm already started to write my second post. I'm on fire! 🔥

I have only one post. But what if I have more posts? I need a list of posts to show on my blog page. So, let's build a
list component to show all the posts.

## Step 1: Create a List Component

But first, I need a list of posts, right?

My final goal is to have an automated way to list all the posts when I add a new blog post. But for now, I'll create a
list of posts manually.

For listing the posts, I believe I need a card component for each row. So, I'll create a card component first.

```html
<div class="card">
    <a href="blog_post.html?post=${linkHref}" class="blog-link">${linkText}</a>
    <p class="blog-date">${dateText}</p>
</div>
```

For reusing this card component, I want to get benefit from the Web Components like I did for the header and the footer.
So, I'll create a new file named `blog-link.js` and put the card component code in it.

```javascript
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
            <a href="blog_post.html?post=${linkHref}" class="blog-link">${linkText}</a>
            <p class="blog-date">${dateText}</p>
        </div>
        `;
    }
}

customElements.define('blog-link-componen
```

The only problem we have is that the existing Markdown renderer doesn't support multiple files. It's just hardcoded to
the existing file. So, I'll update the renderer to support multiple files.

```javascript
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
```

And our new html file for rendering the blog posts will be like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Yucel Cekinmez | Software Engineer</title>
    <link href="styles.css" rel="stylesheet">
    <script src="components/header.js" type="text/javascript" defer></script>
    <script src="components/footer.js" type="text/javascript" defer></script>
    <script src="scripts/render-markdown.js" type="text/javascript" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
<header-component></header-component>
<main>
    <section class="content" id="blog-content"></section>
</main>
<footer-component></footer-component>
</body>
</html>
```