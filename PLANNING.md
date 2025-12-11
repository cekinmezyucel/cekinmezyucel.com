# Personal Blog - Planning & Development Guide

> **Last Updated:** 2025-12-11
> **Status:** Phase 1 - Design System In Progress

---

## Quick Reference for AI Assistants

### Project Context
- **Owner:** Yucel Cekinmez (Backend developer learning frontend)
- **Site Type:** Personal developer portfolio + blog
- **Current Tech Stack:** Vanilla HTML/CSS/JS, Web Components, Marked.js
- **Hosting:** Vercel (auto-deploys from GitHub)
- **Approach:** Keep it simple, learn fundamentals, educational mindset

### Key Decisions Summary
✅ Create dedicated Experience page (mirroring resume structure)
✅ Implement automatic blog post discovery from Markdown files
✅ Add categories/tags to blog posts
✅ Modern design refresh (black/white contrast with accents)
✅ Calendly integration on separate "Book a Meeting" page
✅ Stay vanilla JS for now (TypeScript/npm considered for future)
✅ Blog posts sorted by date (descending), keep features minimal initially

---

## Project Goal

Build a lean but informative personal developer site featuring:
1. **Experience/Resume Section** - Showcase professional background
2. **Blog** - Share knowledge and demonstrate expertise
3. **Meeting Calendar** - Enable networking and freelance opportunities
4. **Learning Journey** - Use this project to learn frontend development fundamentals

---

## Current State

### Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Components:** Web Components (Custom Elements API)
- **Content:** Markdown files parsed with Marked.js (CDN)
- **Hosting:** Vercel (GitHub integration)
- **Build Tools:** None (intentionally simple)

### Existing Features
- ✅ Basic profile section (photo, bio, social links)
- ✅ Blog system with 2 posts (manual HTML updates required)
- ✅ Dynamic Markdown rendering via `blog-post.html?post=slug`
- ✅ Reusable web components (header, footer, blog cards)
- ✅ Custom CSS styling (no frameworks)
- ✅ Git version control with clean commit history

### Known Limitations
- ❌ Blog posts must be manually added to HTML listing
- ❌ No metadata extraction from Markdown (title, date, tags)
- ❌ Design feels outdated
- ❌ No dedicated experience/resume page
- ❌ No meeting calendar integration

---

## Feature Requirements & Decisions

### 1. Experience/Resume Page

**Decision:** Create dedicated page separate from home
**Content Source:** User has up-to-date resume to reference

**Must Include:**
- ✅ Work history (companies, roles, dates)
- ✅ Skills and technologies
- ✅ Personal/side projects
- ✅ Certifications

**Important:** Structure should mirror existing resume format

---

### 2. Blog Enhancements

#### Automatic Post Discovery
**Decision:** YES - Implement automatic discovery
**How it works:** Drop a `.md` file in `/blog-posts/` → appears automatically on blog listing

**Technical Approach:**
- Use simple Node.js build script to scan `/blog-posts/` directory
- Extract metadata from each Markdown file (title, date, tags)
- Generate `blog-posts.json` manifest file
- Vanilla JS frontend reads JSON and renders post list
- Keep dependencies minimal (Node core modules + potentially gray-matter for frontmatter)

#### Categories/Tags
**Decision:** YES - Implement tagging system
**Examples:** JavaScript, DevOps, Tutorials, Career, TypeScript, AWS, etc.

#### Post Metadata
**Required metadata for each post:**
- Title
- Date (for sorting)
- Category/tags
- Excerpt/description (optional)

#### Sorting & Display
**Decision:** Blog list shows posts in descending date order (newest first)
**Philosophy:** Start simple, add features incrementally

**Future Considerations (NOT immediate priorities):**
- Search functionality
- Archive by date
- Reading time estimates
- Comments section

---

### 3. Meeting Calendar

**Tool Choice:** Calendly (free tier)
**Reasoning:** Popular, free option works well for low initial meeting volume

**Location:** Separate "Book a Meeting" page
**Note:** No strong preference - can adjust based on UX after implementation

**Integration:** Embed Calendly widget via iframe or script

---

### 4. Technical Approach

#### Current Direction
**Decision:** Stay vanilla JS for frontend - no frameworks
**Reasoning:**
- Learning fundamentals first
- Keep deployment simple
- Owner is backend engineer learning frontend

#### Node.js Usage Philosophy
**Decision:** Open to adding Node.js for build tasks IF justified
**Important Constraint:** Only use well-established, de facto standard libraries
- NO random "weekend project" dependencies
- Prefer Apache Foundation-style, mature open source projects
- Minimal dependencies - only what's truly necessary
- Examples of acceptable: Node.js core modules, gray-matter (8+ years, 1M+ weekly downloads)

#### Future Considerations
- TypeScript (when ready to add type safety)
- Simple build scripts with Node (for blog post manifest generation)
- No frontend frameworks planned currently

#### Hosting & Deployment
**Platform:** Vercel
**Setup:** Auto-deploys from GitHub repository
**Note:** Owner needs reminder on Vercel configuration (forgotten since initial setup)

---

### 5. Design & Style Refresh

**Decision:** Complete design overhaul needed
**Current State:** Outdated look with blue links and white background

#### Design Direction
**Chosen Style:** Option C - Balanced Contrast (dark header/footer, light body)
**Color Scheme:** Black and white contrast with indigo accent
**Inspiration:** Modern, clean, professional developer portfolio

#### Design System (Finalized 2025-12-11)

**Color Palette:**
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-hero` | `#000000` | Header and footer background |
| `--bg-primary` | `#fafafa` | Main body background |
| `--bg-card` | `#ffffff` | Card/surface backgrounds |
| `--text-primary` | `#111111` | Main text color |
| `--text-secondary` | `#666666` | Muted/secondary text |
| `--text-inverse` | `#ffffff` | Text on dark backgrounds |
| `--accent` | `#6366f1` | Links, highlights, interactive elements |
| `--accent-hover` | `#4f46e5` | Hover state for accent |
| `--border` | `#e5e5e5` | Borders and dividers |

**Typography:**
- **Font Family:** Inter (Google Fonts) with system font fallbacks
- **Fallback Stack:** `-apple-system, BlinkMacSystemFont, sans-serif`
- **Weights Used:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Spacing Scale (8px base):**
| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |
| `--space-9` | `80px` |

**Border Radius:**
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Tags, small elements |
| `--radius-md` | `6px` | Buttons, inputs |
| `--radius-lg` | `8px` | Cards |
| `--radius-full` | `50%` | Avatars, circular elements |

#### Areas to Improve
- ✅ Color scheme (outdated blue/white → modern high-contrast) - DONE
- ✅ Typography (fonts, sizing, readability improvements) - DONE
- ✅ Layout structure (modernize grid/flex layouts)
- ⏸️ Mobile responsiveness (current design has basics, can enhance)
- ⏸️ Animations/transitions (not priority, can add later)

**Approach:** Explore modern design patterns together (educational opportunity)

---

## Development Philosophy

### Core Principles
1. **Simplicity First** - Avoid over-engineering, start minimal
2. **Learning-Oriented** - Explain decisions, explore options together
3. **Incremental Progress** - Ship features iteratively, not all at once
4. **Educational** - Owner is learning frontend, discussions are valuable

### Working Style
- Discuss approaches before implementing
- Explain frontend concepts and patterns
- Make decisions collaboratively
- Prioritize understanding over speed

---

## Next Steps

### Immediate Actions
1. ✅ Planning discussion complete
2. ⏭️ Create prioritized roadmap
3. ⏭️ Break roadmap into actionable tasks
4. ⏭️ Create AGENTS.md for AI assistant context
5. ⏭️ Begin implementation with design or blog improvements

### Questions to Resolve
- [ ] Share resume/experience content for new page?
- [x] Preferred color palette for design refresh? → **Option C + Indigo accent**
- [ ] Blog post metadata format (YAML frontmatter vs JSON manifest)?

---

## Notes & Collaboration

**Communication Preference:** Use this PLANNING.md file for long discussions and planning
**Reason:** Terminal-based chat is hard to read for lengthy content

**For Future Sessions:**
- AI assistants should read PLANNING.md, ROADMAP.md, and AGENTS.md at start of each session
- All three files are LIVING DOCUMENTS - update them as the project evolves

---

## 🔔 When to Update This File

**PLANNING.md should be updated when:**
- ✅ New decisions are made (design, technical approach, features)
- ✅ Requirements become clearer or change
- ✅ Design system is finalized (document color palette, typography choices)
- ✅ Technical philosophy changes (e.g., deciding to add TypeScript)
- ✅ New features are planned that change the project scope
- ✅ Questions are resolved (move from "Questions to Resolve" to decisions)

**Remember:**
- Update "Last Updated" date at top of file
- Keep decisions section current and accurate
- This file is the source of truth for "why" decisions were made
- Future you (and AI) will thank you for keeping this current!
