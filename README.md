# The Atomic Human Website

This repository hosts the Jekyll-based website for *The Atomic Human*, a companion to Neil D. Lawrence's book. The site explores themes, reflections, and concepts presented in the book while engaging the community with curated insights and discussions.

## Structure and Collections

The site is structured into several collections, each reflecting a critical aspect of the book's exploration:

### Collections

1. **Chapters**:  
   - Contains summaries, bibliographies, and reflections for each chapter.  
   - Explores the questions and narratives driving the book.  
   - URL Path: `/chapters/`

2. **Themes**:  
   - Unpacks central themes such as artificial intelligence, human identity, and the philosophy of technology.  
   - URL Path: `/themes/`

3. **Reviews**:  
   - Compiles human and AI-generated reviews for diverse perspectives on the book.  
   - URL Path: `/reviews/`

4. **People**:  
   - Profiles key figures mentioned in the book, such as Alan Turing and Norbert Wiener.  
   - URL Path: `/people/`

5. **History**:  
   - Covers historical events shaping the narrative, from computing's origins to modern AI milestones.  
   - URL Path: `/history/`

6. **Technology**:  
   - Discusses the technologies explored in the book, their societal impact, and future potential.  
   - URL Path: `/technology/`

### Page Metadata

Pages follow a consistent metadata format to ensure clarity and traceability. Example:

```
---
layout: default
title: "Page Title"
description: "Brief summary of the page."
contributed_by:
  initial:
    type: "machine" or "human"
    tool: "ChatGPT / other tools"
    version: "Version Info"
    date: "YYYY-MM-DD"
    notes: "Initial contribution notes."
  reviewed_by:
  - type: "human"
    name: "Reviewer Name"
    person_id: "person-identifier"
    date: "YYYY-MM-DD"
    notes: "Review notes."
---
'''

### Layouts

- **Default Layout**: The main structure for most pages.  
- **Custom Layouts**: Used for specific collection pages (e.g., `themes`, `chapters`).

## Features

- **Interactive Navigation**: Guided links to collections with structured overviews.  
- **Community Engagement**: Discussion prompts and links to platforms like Bluesky for deeper exploration.  
- **Accessible Design**: Adheres to web accessibility standards for all users.

## Development Setup

1. **Prerequisites**:
   - [Ruby](https://www.ruby-lang.org) and [Bundler](https://bundler.io/) installed.  
   - Basic understanding of Markdown and YAML.

2. **Setup**:
```
   git clone https://github.com/atomichuman/atomichuman.github.io
   cd atomichuman.github.io
   bundle install
'''

3. **Local Development**:
```
   bundle exec jekyll serve
'''
   Access the site locally at `http://127.0.0.1:4000`.

4. **Deployment**:
   - Push changes to the `main` branch for automatic deployment via GitHub Pages.

## Repository Guidelines

- **Content Creation**: Adhere to the structured metadata format.  
- **Attribution**: Contributions must clearly document initial creation and reviews.  
- **Updates**: Major content changes require thorough testing in the local environment.

## Key References

- **Book Details**:
  - Title: *The Atomic Human: Understanding Ourselves in the Age of AI*  
  - Author: Neil D. Lawrence  
  - Publisher: Allen Lane, 2024

- **Author Links**:
  - Personal Website: [Neil D. Lawrence](https://www.lawrennd.com)  
  - Bluesky: [@lawrennd.bsky.social](https://bsky.app/profile/lawrennd.bsky.social)

## Contributions and Licensing

- Contributions are welcome via pull requests.  
- Licensing terms align with the book's copyright and Penguin Random House's policies. Refer to `LICENSE` for details.

## Contact

For inquiries or feedback, reach out via the GitHub repository.
