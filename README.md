# cekinmezyucel.com

Personal developer portfolio and blog.

## Setup

```bash
npm install
```

## Adding a Blog Post

1. Create a new markdown file in `blog-posts/`:
   ```bash
   blog-posts/my-new-post.md
   ```

2. Add frontmatter at the top:
   ```yaml
   ---
   title: "My Post Title"
   date: 2024-12-12
   tags: [JavaScript, Tutorial]
   excerpt: "Short description of the post"
   ---

   # My Post Title

   Content goes here...
   ```

3. **Build the manifest** (generates `blog-posts.json`):
   ```bash
   npm run build:blog
   ```

4. Commit both files:
   ```bash
   git add blog-posts/my-new-post.md blog-posts.json
   git commit -m "Add new blog post"
   git push
   ```

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- Web Components
- Marked.js (Markdown rendering)
- gray-matter (Frontmatter parsing)
