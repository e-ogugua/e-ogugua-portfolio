# Blog Content

This directory contains all the blog posts for the website. Each post is written in MDX format, which allows you to use React components within your markdown.

## Creating a New Blog Post

1. Create a new `.mdx` file in this directory with the following frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your blog post"
tags: ["tag1", "tag2"]
author: "Your Name"
image: "/path/to/image.jpg"  # Optional
featured: false  # Set to true to feature this post on the blog home page
---
```

2. Write your blog post content using Markdown or MDX syntax.

## Features

- **Tags**: Add tags to categorize your posts
- **Featured Posts**: Mark posts as featured to highlight them on the blog home page
- **Code Highlighting**: Use fenced code blocks with language specifiers for syntax highlighting
- **Images**: Reference images from the `public` directory
- **MDX Components**: Use React components within your markdown

## Example Post

```mdx
---
title: "My First Blog Post"
date: "2023-10-01"
description: "This is my first blog post on my new website"
tags: ["welcome", "introduction"]
author: "Your Name"
image: "/images/blog/my-first-post.jpg"
featured: true
---

# Welcome to My First Blog Post

This is the content of my first blog post.

## Here's a Subheading

And some more content with **bold** and *italic* text.

### Code Example

```javascript
function helloWorld() {
  console.log('Hello, world!');
}
```

### Image Example

![Alt text](/images/sample.jpg)
```

## Organization

- Store all images in the `public/images/blog` directory
- Use kebab-case for filenames (e.g., `my-awesome-post.mdx`)
- Keep descriptions concise and under 160 characters for better SEO

## Publishing Workflow

1. Create your post in this directory
2. Test locally using the development server
3. Commit and push your changes
4. The site will automatically rebuild with your new post
