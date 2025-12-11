# Development Roadmap

> **Last Updated:** 2025-12-11
> **Current Phase:** Phase 1 (Design System)
> **Next Task:** Phase 1, Task 1.3 - Update Existing Pages with New Design

---

## How to Use This Roadmap

**For Resuming Work:**
When returning to this project, tell your AI assistant:
```
"Read PLANNING.md, ROADMAP.md, and AGENTS.md. Continue with Phase X, Task Y."
```

**Why all three files?**
- PLANNING.md = Project decisions and requirements
- ROADMAP.md = Current status and next tasks (this file)
- AGENTS.md = Technical context and coding standards

**Status Indicators:**
- ✅ Complete
- 🚧 In Progress
- ⏭️ Next Up
- ⏸️ Planned (not started)

---

## 🔔 Documentation Reminders

**IMPORTANT:** Keep ALL planning documents updated during each session!

**Update this file (ROADMAP.md) when:**
- ✅ Tasks are completed
- 🚧 Starting a new task
- ⏭️ Priorities change
- 📝 Blockers or issues arise
- 💡 New tasks are discovered

**Update PLANNING.md when:**
- New decisions are made (design choices, technical approaches)
- Requirements change or become clearer
- Design system is finalized (colors, fonts, spacing)
- New features are discussed or planned

**Update AGENTS.md when:**
- New web components are created
- New coding patterns emerge
- Technical constraints change
- Design system is established (add to reference section)
- New common tasks need documentation

**Don't forget to update "Last Updated" dates at the top of each file!**

---

## Phase 0: Planning & Setup ✅

### Task 0.1: Project Planning ✅
**Status:** Complete
**Files:** PLANNING.md

**Completed:**
- ✅ Define project goals
- ✅ Gather requirements
- ✅ Make technical decisions
- ✅ Create planning documentation

---

### Task 0.2: Documentation Structure ✅
**Status:** Complete
**Files:** PLANNING.md, ROADMAP.md (this file), AGENTS.md

**Completed:**
- ✅ Create PLANNING.md with decisions
- ✅ Create ROADMAP.md with phases
- ✅ Create AGENTS.md for AI context

---

## Phase 1: Modern Design System 🚧

**Goal:** Refresh the site with modern design before adding new features
**Why First:** Better to build new features on a modern foundation

### Task 1.1: Design System Planning ✅
**Status:** Complete
**Files:** PLANNING.md (design decisions section added)

**Completed:**
- [x] Choose color palette (black/white + accent colors) → **Option C + Indigo**
- [x] Select typography (modern fonts, sizing scale) → **Inter font**
- [x] Define spacing system → **8px base scale**
- [x] Document design tokens (colors, fonts, spacing) → **In PLANNING.md**
- [x] Get user approval on design direction → **Approved**

**Decisions Made:**
- Style: Option C - Balanced Contrast (dark header/footer, light body)
- Accent: Indigo (#6366f1)
- Font: Inter (Google Fonts)
- See PLANNING.md "Design System" section for full token reference

---

### Task 1.2: CSS Architecture & Variables ✅
**Status:** Complete
**Files:** css/variables.css (new), styles.css (refactored), components/header.js, components/footer.js

**Completed:**
- [x] Create CSS custom properties (variables) for design system → `css/variables.css`
- [x] Set up color scheme with design tokens
- [x] Define typography scale (Inter font, size scale)
- [x] Create spacing utilities (8px base)
- [x] Ensure mobile-first responsive approach
- [x] Updated header component with navigation
- [x] Updated footer with dynamic year

**Technical Notes:**
- All colors, fonts, spacing now use CSS variables
- Header now includes sticky navigation bar
- Footer year updates automatically

---

### Task 1.3: Update Existing Pages with New Design ⏭️
**Status:** Next Up
**Files:** index.html, blog.html, blog-post.html, styles.css

**Acceptance Criteria:**
- [ ] Apply new design to home page
- [ ] Apply new design to blog listing
- [ ] Apply new design to blog post viewer
- [ ] Update web components styling
- [ ] Test on mobile devices
- [ ] Verify Vercel deployment looks correct

---

## Phase 2: Blog Enhancements ⏸️

**Goal:** Make blog self-managing with automatic post discovery and metadata

### Task 2.1: Add Frontmatter to Existing Posts ⏸️
**Status:** Planned
**Files:** blog-posts/*.md

**Acceptance Criteria:**
- [ ] Decide on metadata format (YAML frontmatter recommended)
- [ ] Add frontmatter to existing blog posts:
  - Title
  - Date
  - Tags/categories
  - Excerpt (optional)
- [ ] Document metadata schema

**Example Frontmatter:**
```yaml
---
title: "My Post Title"
date: 2025-12-07
tags: [JavaScript, Tutorial]
excerpt: "Short description of the post"
---
```

---

### Task 2.2: Create Blog Post Manifest Generator ⏸️
**Status:** Planned
**Files:** build-blog.js (new), package.json (new), blog-posts.json (generated)

**Acceptance Criteria:**
- [ ] Initialize npm project (package.json)
- [ ] Add gray-matter dependency (if using YAML frontmatter)
- [ ] Create Node.js script to scan /blog-posts/ directory
- [ ] Extract metadata from each .md file
- [ ] Generate blog-posts.json manifest with:
  - Post slug (filename)
  - Title, date, tags, excerpt
  - Posts sorted by date (descending)
- [ ] Add npm script to run build: `npm run build:blog`
- [ ] Document process in README or AGENTS.md

**Technical Notes:**
- Keep script simple (< 100 lines)
- Use only Node core modules + gray-matter
- No complex build tools

---

### Task 2.3: Update Blog Listing to Use Manifest ⏸️
**Status:** Planned
**Files:** blog.html, components/blog-link.js, new: components/blog-list.js

**Acceptance Criteria:**
- [ ] Create blog-list web component (or update existing)
- [ ] Fetch blog-posts.json on page load
- [ ] Dynamically render blog post cards from JSON
- [ ] Display tags/categories with each post
- [ ] Remove hardcoded blog posts from HTML
- [ ] Sort posts by date (newest first)
- [ ] Test automatic discovery (add new .md file, rebuild, verify it appears)

---

### Task 2.4: Enhance Blog Post Display ⏸️
**Status:** Planned
**Files:** blog-post.html, components/blog-post-renderer.js

**Acceptance Criteria:**
- [ ] Display post metadata (date, tags) on post page
- [ ] Add "Back to Blog" navigation
- [ ] Consider: Table of contents (future enhancement)
- [ ] Consider: Related posts by tags (future enhancement)

---

## Phase 3: Experience/Resume Page ⏸️

**Goal:** Create dedicated page showcasing professional background

### Task 3.1: Resume Content Preparation ⏸️
**Status:** Planned
**Files:** TBD (user to provide resume content)

**Acceptance Criteria:**
- [ ] User provides resume content or structure
- [ ] Decide on page layout/sections:
  - Work history
  - Skills/technologies
  - Certifications
  - Personal projects
- [ ] Agree on design approach (timeline? cards? table?)

**Blocker:** Waiting for user to share resume content

---

### Task 3.2: Create Experience Page ⏸️
**Status:** Planned
**Files:** experience.html (new), styles.css

**Acceptance Criteria:**
- [ ] Create experience.html page
- [ ] Structure matches resume format
- [ ] Include all required sections (work, skills, certs, projects)
- [ ] Apply modern design system
- [ ] Mobile responsive
- [ ] Add to navigation (header component)

---

## Phase 4: Meeting Calendar Integration ⏸️

**Goal:** Enable visitors to book meetings via Calendly

### Task 4.1: Calendly Setup ⏸️
**Status:** Planned
**External:** Calendly account

**Acceptance Criteria:**
- [ ] Create Calendly account (free tier)
- [ ] Configure meeting type
- [ ] Get embed code/link
- [ ] Decide: iframe embed or link-only?

---

### Task 4.2: Create Meeting Page ⏸️
**Status:** Planned
**Files:** meeting.html (new), styles.css

**Acceptance Criteria:**
- [ ] Create meeting.html page
- [ ] Embed Calendly widget or provide booking link
- [ ] Add context/instructions for visitors
- [ ] Apply modern design system
- [ ] Add to navigation (header component)
- [ ] Test booking flow

---

## Phase 5: Polish & Launch ⏸️

**Goal:** Final touches before considering v1.0 complete

### Task 5.1: Navigation & UX Improvements ⏸️
**Status:** Planned
**Files:** components/header.js, various pages

**Acceptance Criteria:**
- [ ] Ensure all pages in navigation
- [ ] Add active page indicator
- [ ] Test all internal links
- [ ] Verify mobile navigation works well
- [ ] Add footer links if needed

---

### Task 5.2: Content & SEO ⏸️
**Status:** Planned
**Files:** All HTML files

**Acceptance Criteria:**
- [ ] Add proper page titles
- [ ] Add meta descriptions
- [ ] Add Open Graph tags (for social sharing)
- [ ] Verify favicon exists
- [ ] Add robots.txt if needed
- [ ] Test social media preview cards

---

### Task 5.3: Final Testing & Deployment ⏸️
**Status:** Planned
**Files:** All files

**Acceptance Criteria:**
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify Vercel deployment working
- [ ] Check all links (internal and external)
- [ ] Review blog post build process
- [ ] Performance check (load times)
- [ ] Spell check all content

---

## Future Enhancements (Beyond v1.0)

**Not prioritized yet - ideas for later:**
- [ ] TypeScript conversion (when ready to learn)
- [ ] Dark mode toggle
- [ ] Blog search functionality
- [ ] Archive/filter by tags
- [ ] Reading time estimates
- [ ] Comments system
- [ ] RSS feed
- [ ] Analytics (privacy-friendly)
- [ ] Performance optimizations

---

## Notes

**Current Focus:** Design system first, then blog improvements

**Reasoning:** Better to establish modern design foundation before adding features

**Flexibility:** Phase order can be adjusted based on priorities
