/**
 * Blog Post Manifest Generator
 *
 * Scans the blog-posts directory for Markdown files,
 * extracts frontmatter metadata, and generates blog-posts.json
 *
 * Usage: npm run build:blog
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_POSTS_DIR = path.join(__dirname, 'blog-posts');
const OUTPUT_FILE = path.join(__dirname, 'blog-posts.json');

function buildBlogManifest() {
    console.log('Building blog post manifest...\n');

    // Get all .md files from blog-posts directory
    const files = fs.readdirSync(BLOG_POSTS_DIR)
        .filter(file => file.endsWith('.md'));

    console.log(`Found ${files.length} blog post(s):\n`);

    const posts = files.map(filename => {
        const filePath = path.join(BLOG_POSTS_DIR, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Parse frontmatter
        const { data } = matter(fileContent);

        // Generate slug from filename (remove .md extension)
        const slug = filename.replace('.md', '');

        // Validate required fields
        if (!data.title) {
            console.warn(`  Warning: ${filename} is missing 'title' in frontmatter`);
        }
        if (!data.date) {
            console.warn(`  Warning: ${filename} is missing 'date' in frontmatter`);
        }

        const post = {
            slug,
            title: data.title || slug,
            date: data.date ? new Date(data.date).toISOString().split('T')[0] : null,
            tags: data.tags || [],
            excerpt: data.excerpt || ''
        };

        console.log(`  ✓ ${post.title} (${post.date})`);

        return post;
    });

    // Sort by date (newest first)
    posts.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
    });

    // Write manifest file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));

    console.log(`\n✓ Generated ${OUTPUT_FILE}`);
    console.log(`  ${posts.length} post(s) in manifest\n`);
}

buildBlogManifest();
