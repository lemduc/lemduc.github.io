# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website for Duc Minh Le, PhD, hosted on GitHub Pages. The site serves as an online academic CV and professional portfolio with features including publications, research experience, awards, and blog posts.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve site locally with live reload
bundle exec jekyll serve --livereload

# Build site (output to _site/)
bundle exec jekyll build
```

### Testing
```bash
# Run HTML proofer tests (validates HTML, links, images)
rake test

# Or manually:
bundle exec jekyll build
# HTML proofer runs automatically via Rakefile
```

## Architecture Overview

### Content Structure
The site uses Jekyll's modular include system for content organization:

- **Data-Driven Content**: Primary content lives in YAML files under `_data/`:
  - `_data/updates.yml`: Latest news, achievements, activities
  - `_data/publications.yml`: Research publications with metadata, PDFs, and BibTeX

- **Modular Includes**: HTML fragments in `_includes/` render each section:
  - `education.html`, `experience.html`, `research.html`
  - `awards.html`, `services.html`, `patents.html`, `publications.html`
  - `latest_updates.html`: Displays updates from `_data/updates.yml`
  - `header.html`, `footer.html`, `nav.html`: Layout components

- **Main Layout**: `index.html` orchestrates all sections with:
  - Click-to-toggle functionality for each section
  - Floating navigation menu (fixed position, right side)
  - Anchor links to section IDs

### Theme System

**Dark Mode Implementation** (`stylesheets/dark-mode.css` + `js/dark-mode.js`):
- Uses CSS custom properties (variables) for theming
- Toggle button (fixed top-right) and keyboard shortcut (Ctrl+Shift+D)
- System preference detection via `prefers-color-scheme`
- Theme persistence in localStorage
- Applied via `data-theme` attribute on `<html>` element

### RSS Feed Architecture

**Feed Generation** (`feed.xml`):
- Aggregates content from three sources:
  1. Blog posts from `_posts/`
  2. Updates from `_data/updates.yml`
  3. Publications from `_data/publications.yml`
- Available at: `https://lemduc.github.io/feed.xml`
- Automatically regenerated on each Jekyll build

### Blog Posts
- Stored in `_posts/` directory
- Follow Jekyll naming convention: `YYYY-MM-DD-title.md`
- Use frontmatter for metadata (layout, title, date, categories)

## Content Management

### Adding Updates
**Option 1: Python script**
```bash
python update_rss.py
```
Or use programmatically:
```python
from update_rss import add_update

add_update(
    title="New Publication Accepted",
    content="Paper accepted at ICSA 2024...",
    update_type="publication",  # or "research", "career", "general"
    link="https://example.com/paper"
)
```

**Option 2: Edit YAML directly**
Edit `_data/updates.yml`:
```yaml
- title: "Update Title"
  content: "Description of update..."
  date: 2024-01-15
  type: "publication"
  link: "https://optional-link.com"
```

### Adding Publications
**Option 1: Python script**
```python
from update_rss import add_publication

add_publication(
    title="Paper Title",
    authors="Author List",
    venue="Conference/Journal Name",
    date="2024-01-01",
    pub_type="conference",  # or "journal", "workshop"
    pdf_link="https://paper-url.pdf",
    bibtex="@inproceedings{...}"
)
```

**Option 2: Edit YAML directly**
Edit `_data/publications.yml`:
```yaml
- title: "Paper Title"
  authors: "First Author, Second Author"
  venue: "Conference Name (CONF 2024)"
  date: 2024-01-01
  type: "conference"
  pdf: "https://paper-url.pdf"
  bibtex: |
    @inproceedings{key2024,
      ...
    }
```

### Adding Blog Posts
Create file in `_posts/` with naming pattern `YYYY-MM-DD-title.md`:
```markdown
---
layout: post
title: "Post Title"
date: 2024-01-15 10:00:00 -0500
categories: [blog, research]
---

Post content in Markdown...
```

## Configuration

### Site Settings (`_config.yml`)
- Site metadata (title, author, description, keywords)
- Social links (GitHub, Twitter, email)
- RSS feed configuration
- Google Analytics tracking
- Timezone: America/New_York
- Markdown processor: kramdown
- Plugins: jekyll-sitemap

### Ruby Environment
- Ruby version specified in `.ruby-version`
- Dependencies managed via Bundler (Gemfile)
- Uses `github-pages` gem for GitHub Pages compatibility

## Deployment

The site automatically builds and deploys via GitHub Pages when pushing to the repository. No manual deployment steps required.

## Windows Development Notes

On Windows, use WSL2 with rbenv for Ruby version management to avoid compatibility issues with native Windows Ruby environments. See README.md for detailed setup instructions.
