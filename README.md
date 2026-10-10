lemduc.github.io
================

This is the personal academic website of Duc Minh Le, PhD, built using Jekyll and hosted on GitHub Pages.

## Overview
The site serves as an online academic CV and professional portfolio, featuring:
- Latest Updates: News, achievements, and recent activities
- Education: Academic background and degrees
- Work Experience: Professional roles and responsibilities
- Research Experience: Research projects and collaborations
- Presentations: Talks and poster sessions
- Awards: Honors and recognitions
- Services: Professional and editorial services
- Patents: Granted patents and details
- Publications: Selected research publications

## Features
- Modern, clean, and responsive design
- Floating navigation menu for quick access to all sections
- Toggle functionality to show/hide each section for better user experience
- Dark mode with toggle button, `Ctrl/Cmd+Shift+D` shortcut, system preference detection, and localStorage persistence (see [DARK_MODE_README.md](DARK_MODE_README.md))
- RSS feed at [`/feed.xml`](https://lemduc.github.io/feed.xml) aggregating updates and publications (see [RSS_FEED_README.md](RSS_FEED_README.md))
- Easy to update content via modular Jekyll includes

## Content Management

Content is data-driven — no blog, no `_posts/`. The two sources of truth are:

- `_data/updates.yml` — news, achievements, activities
- `_data/publications.yml` — publications with metadata, PDF links, and BibTeX

Edit the YAML directly, or use the helpers in `update_rss.py` (`add_update()` / `add_publication()`). Each section of the page is rendered by a matching fragment in `_includes/`.

## Requirements

- **Ruby 3.x** (tested with Ruby 3.4.9). Ruby 4.x is not compatible with the `github-pages` gem.
- [Bundler](https://bundler.io/) for dependency management

## Local Development

```sh
bundle install
bundle exec jekyll serve --livereload
```

## Testing

```sh
rake test
```

Builds the site and runs [HTMLProofer](https://github.com/gjtorikian/html-proofer) against `_site/` (validates HTML, internal links, images, and favicons).

## Deployment
The site is automatically built and deployed via GitHub Pages.

## License
Content is © Duc Minh Le. Source code is open for personal and academic use.

## Hint
For fast updates and content management, use an AI coding assistant such as [Claude Code](https://claude.com/claude-code) or [Cursor](https://cursor.com) — the repo ships a `CLAUDE.md` with project-specific guidance for AI-assisted editing.

## Windows Users: Using WSL2 and rbenv

If you are developing or building this site on Windows, it is highly recommended to use [WSL2 (Windows Subsystem for Linux 2)](https://docs.microsoft.com/en-us/windows/wsl/) for a smoother Unix-like development experience.

To manage Ruby versions easily, use [rbenv](https://github.com/rbenv/rbenv?tab=readme-ov-file#readme) inside your WSL2 environment:

1. **Install WSL2**: Follow the [official Microsoft guide](https://docs.microsoft.com/en-us/windows/wsl/install) to set up WSL2 and a Linux distribution (e.g., Ubuntu).
2. **Install rbenv**: Follow the [rbenv installation instructions](https://github.com/rbenv/rbenv?tab=readme-ov-file#readme) to install rbenv and ruby-build in your WSL2 shell.
3. **Install Ruby**: Use rbenv to install the required Ruby version:
   ```sh
   rbenv install 3.4.9
   rbenv global 3.4.9
   ```
4. **Install Bundler and Jekyll**:
   ```sh
   gem install bundler jekyll
   bundle install
   ```
5. **Build and serve the site**:
   ```sh
   bundle exec jekyll serve --livereload
   ```

This setup ensures compatibility and avoids common issues with native Windows Ruby environments.
