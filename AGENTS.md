# AI Agent Context & Instructions

> **Purpose:** Technical reference for AI assistants working on this project
> **Owner:** Yucel Cekinmez (Backend engineer learning frontend)
> **Last Updated:** 2025-12-07

---

## Quick Start: How to Resume Work

When the user returns to this project or starts a new session, use this workflow:

### Step 1: Read Planning Documents
```
1. Read PLANNING.md → Understand decisions, requirements, philosophy
2. Read ROADMAP.md → Find current phase and next task
3. Read this file (AGENTS.md) → Understand technical context
```

### Step 2: Resume Work
User will typically say:
```
"Read PLANNING.md, ROADMAP.md, and AGENTS.md. Continue with Phase X, Task Y."
```

**Important:** All three files must be read to have full context.

Your response should be:
1. Confirm you've read both files
2. State the current task from roadmap
3. Summarize what needs to be done
4. Ask clarifying questions if needed
5. Begin work

### Step 3: Update Living Documentation
As you work, keep ALL documentation current:

**ROADMAP.md (update frequently):**
1. Mark completed tasks with ✅
2. Update current task status (⏭️ → 🚧 → ✅)
3. Note any blockers or decisions
4. Update "Last Updated" date at top

**PLANNING.md (update when decisions change):**
1. Add new decisions or requirements as they emerge
2. Update technical approach if it evolves
3. Document design choices (colors, fonts, etc.)
4. Update "Next Steps" or "Questions to Resolve"
5. Update "Last Updated" date at top

**AGENTS.md (update when patterns emerge):**
1. Document new web components or patterns
2. Update design system section after Phase 1
3. Add new common tasks to "How-Tos"
4. Note important technical decisions or gotchas
5. Update "Last Updated" date at top

**🔔 REMINDER:** These are LIVING documents - update them during each session!

---

## Project Overview

### What This Project Is
Personal developer portfolio and blog for Yucel Cekinmez:
- Showcase professional experience (resume/work history)
- Blog for sharing technical knowledge
- Meeting calendar for networking/freelance opportunities
- Educational project for learning frontend development

### Core Philosophy
1. **Simplicity First** - No over-engineering, minimal dependencies
2. **Learning-Oriented** - Explain decisions, discuss options
3. **Established Tools Only** - No "weekend project" libraries
4. **Incremental Progress** - Ship features iteratively

---

## Technical Stack & Constraints

### Current Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Components:** Web Components (Custom Elements API)
- **Content:** Markdown files parsed with Marked.js (loaded via CDN)
- **Hosting:** Vercel (auto-deploys from GitHub)
- **Build Tools:** None currently (adding Node.js build scripts is planned)

### Technology Constraints

#### ✅ ALLOWED
- Vanilla JavaScript (ES6+ features)
- Web Components (Custom Elements, Shadow DOM if beneficial)
- Modern CSS (Grid, Flexbox, custom properties)
- Node.js for build scripts (keep simple)
- Well-established libraries (8+ years old, 1M+ weekly downloads)
- Examples: gray-matter for frontmatter parsing

#### ❌ NOT ALLOWED
- Frontend frameworks (React, Vue, Angular, Svelte)
- Complex build tools (Webpack, Vite, Parcel) - not needed yet
- Random npm packages with low adoption
- "Flavor of the week" libraries
- CSS frameworks (Bootstrap, Tailwind) - custom CSS only
- Any unnecessary dependencies

#### 🤔 MAYBE LATER (Not Now)
- TypeScript (when user is ready to learn it)
- npm/build tooling beyond simple scripts
- Testing frameworks (when project grows)

### Dependency Philosophy
**Think "Apache Foundation" mindset:**
- Only mature, widely-adopted open source projects
- Prefer Node.js core modules over external libraries
- Every dependency must be justified
- If unsure, ask the user before adding

---

## Codebase Structure

```
cekinmezyucel.com/
├── index.html                    # Home page (profile/about)
├── blog.html                     # Blog post listing
├── blog-post.html                # Dynamic blog post viewer
├── styles.css                    # Global styles (will be refactored)
├── components/                   # Web Components
│   ├── header.js                 # Site header (navigation)
│   ├── footer.js                 # Site footer
│   ├── blog-link.js              # Blog post card component
│   └── blog-post-renderer.js     # Markdown renderer component
├── blog-posts/                   # Blog content (Markdown)
│   ├── *.md                      # Individual blog posts
│   └── images/                   # Post-specific images
├── images/                       # Site assets (profile, icons, bg)
├── PLANNING.md                   # Project decisions & requirements
├── ROADMAP.md                    # Development phases & tasks
└── AGENTS.md                     # This file

Future files:
├── package.json                  # npm config (when Node.js added)
├── build-blog.js                 # Blog manifest generator script
├── blog-posts.json               # Generated manifest (git-ignored)
├── experience.html               # Resume/experience page (planned)
└── meeting.html                  # Calendly integration (planned)
```

---

## Web Components Reference

### Custom Elements Defined
1. **`<header-component>`** (header.js)
   - Site header with navigation and profile section
   - Context-aware (shows different nav based on current page)

2. **`<footer-component>`** (footer.js)
   - Site footer with copyright

3. **`<blog-link>`** (blog-link.js)
   - Blog post card for listings
   - Attributes: `link-text`, `link-href`, `date-text`

4. **`<blog-post-renderer>`** (blog-post-renderer.js)
   - Fetches and renders Markdown posts dynamically
   - Uses URL query parameter `?post=slug`
   - Integrates Marked.js for parsing

### Web Component Patterns
- Use Custom Elements API (extends HTMLElement)
- connectedCallback() for initialization
- getAttribute() for props
- Keep components simple and focused
- No Shadow DOM currently (may add if beneficial)

---

## Coding Standards & Patterns

### JavaScript
- Use ES6+ features (const/let, arrow functions, template literals)
- Prefer async/await over promises for readability
- Use fetch API for HTTP requests
- Clear variable names (educational context)
- Comments where logic isn't obvious (but avoid over-commenting)

### HTML
- Semantic HTML5 elements
- Accessibility attributes (alt text, ARIA where needed)
- Mobile-first viewport meta tag
- Clean indentation (2 spaces)

### CSS
- Modern CSS (Grid, Flexbox for layouts)
- CSS custom properties for theming (to be added in design refresh)
- Mobile-first approach
- Avoid !important
- Class names: kebab-case, semantic (e.g., .blog-card, .post-content)

### File Organization
- Keep files focused (one component per file)
- Group related files (components/, blog-posts/)
- No deeply nested directories

---

## Current Limitations & Known Issues

### Blog System
- **Manual updates required:** New posts must be manually added to blog.html
- **No metadata:** Posts lack title, date, tags extraction
- **Hardcoded listings:** Blog cards hardcoded in HTML
- **Plan:** Add frontmatter + build script (Phase 2)

### Design
- **Outdated styling:** Blue links, white background feels old
- **Inconsistent spacing:** No systematic spacing scale
- **Typography:** Basic fonts, needs modern refresh
- **Plan:** Complete design overhaul (Phase 1)

### Missing Features
- No dedicated experience/resume page
- No meeting calendar integration
- No tag/category filtering on blog

---

## Development Workflow

### Before Making Changes
1. Read relevant planning docs (PLANNING.md, ROADMAP.md)
2. Understand the current task from roadmap
3. Discuss approach with user (especially for design decisions)
4. Get approval before major changes

### While Working
1. Explain what you're doing and why (educational context)
2. Show code before writing it when helpful
3. Discuss frontend concepts and patterns
4. Ask questions if multiple approaches exist

### After Completing Tasks
1. Update ROADMAP.md (mark tasks complete)
2. Test changes (explain how to test)
3. Update relevant documentation if needed
4. Summarize what was accomplished

### Git Workflow
- User manages git commits
- Clear, descriptive commit messages
- Small, focused commits preferred
- Branch strategy: main branch (user may create feature branches)

---

## Deployment

### Hosting: Vercel
- Auto-deploys from GitHub repository
- Live site URL: (user will provide if needed)
- User has Vercel account but may need reminders on configuration

### Deployment Checklist
When deploying new features:
- [ ] Test locally first
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Ensure build scripts run (when added)
- [ ] Push to GitHub (triggers Vercel deploy)
- [ ] Verify live site after deployment

---

## Working with This User

### User Background
- **Backend engineer** (Java, TypeScript, GCP, AWS, Terraform, Kubernetes)
- **Learning frontend** through this project
- **Values:** Simplicity, established tools, understanding over speed
- **Work style:** This is a side project, part-time work
- **Communication:** Prefers detailed planning, discussion, explanation

### What This User Likes
- ✅ Discussing approaches and options
- ✅ Learning frontend concepts
- ✅ Simple, maintainable solutions
- ✅ Mature, established libraries
- ✅ Clear documentation for resuming work
- ✅ Incremental progress

### What to Avoid
- ❌ Over-engineering or complex solutions
- ❌ Random npm packages
- ❌ Assuming knowledge of frontend patterns
- ❌ Making changes without discussion
- ❌ Framework recommendations (staying vanilla)
- ❌ Adding features beyond requirements

### Communication Style
- Explain frontend concepts clearly
- Present options with pros/cons
- Ask clarifying questions
- Use PLANNING.md for long discussions
- Keep terminal chat concise
- Educational tone welcome

---

## Common Tasks & How-Tos

### Adding a New Page
1. Create `page-name.html` in root
2. Include header-component and footer-component
3. Add viewport meta tag
4. Link styles.css
5. Add to navigation in header.js
6. Apply design system (when established)
7. Test on mobile

### Adding a New Web Component
1. Create `components/component-name.js`
2. Define class extending HTMLElement
3. Register with customElements.define()
4. Load script in HTML files that use it
5. Document component in this file

### Adding a Blog Post (Current Process)
1. Create `blog-posts/post-slug.md`
2. Write content in Markdown
3. Manually add blog-link card to blog.html
4. Set link-href to `blog-post.html?post=post-slug`
5. Test rendering

### Adding a Blog Post (Future Process - After Phase 2)
1. Create `blog-posts/post-slug.md` with frontmatter
2. Run `npm run build:blog`
3. Commit generated blog-posts.json
4. Deploy - post appears automatically

---

## Design System (To Be Defined in Phase 1)

**Status:** Not yet defined
**Task:** Phase 1, Task 1.1

Will include:
- Color palette (black/white + accent colors)
- Typography scale (fonts, sizes, weights)
- Spacing system (margins, padding)
- Component styles (buttons, cards, forms)
- Responsive breakpoints

**Update this section after design system is established.**

---

## Questions to Ask User

### For Design Decisions
- Color palette preferences
- Font choices
- Layout inspirations
- Any specific design must-haves

### For Features
- Priority of features (if unclear from roadmap)
- Content to include (resume details, blog topics)
- User experience preferences
- Integration requirements (Calendly setup)

### For Technical Approaches
- When multiple valid approaches exist
- When adding dependencies
- When considering future scalability

---

## Useful References

### Documentation
- PLANNING.md - All project decisions and requirements
- ROADMAP.md - Current phase, tasks, and status
- README.md - Basic project info (may be outdated)

### Web Standards
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [MDN Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [Modern CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Libraries in Use
- [Marked.js](https://marked.js.org/) - Markdown parser (CDN)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parser (planned)

---

## Notes

**This file should be updated as the project evolves:**
- Add new components to reference section
- Update design system section after Phase 1
- Document new patterns as they emerge
- Keep technical constraints current
- Note any important decisions or gotchas

**For AI Assistants:**
This is a learning project. Explanations and discussions are valuable.
Prioritize clarity and education over pure speed.
