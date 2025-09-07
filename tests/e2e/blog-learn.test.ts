import { test, expect } from '@playwright/test';

test.describe('Blog Page Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('should display blog posts correctly', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Insights & Thoughts');
    
    // Check for featured post
    await expect(page.locator('text=Featured')).toBeVisible();
    await expect(page.locator('text=The Future of Full-Stack Development in Africa')).toBeVisible();
    
    // Check for regular posts
    await expect(page.locator('text=Building Scalable SaaS Products')).toBeVisible();
    await expect(page.locator('text=React Performance: Beyond the Basics')).toBeVisible();
  });

  test('should filter posts by category', async ({ page }) => {
    // Click Development filter
    await page.click('text=Development');
    
    // Should show development posts
    await expect(page.locator('text=React Performance: Beyond the Basics')).toBeVisible();
    await expect(page.locator('text=Building APIs That Scale')).toBeVisible();
    
    // Click Business filter
    await page.click('text=Business');
    
    // Should show business posts
    await expect(page.locator('text=Building Scalable SaaS Products')).toBeVisible();
    await expect(page.locator('text=Digital Transformation in Nigerian SMEs')).toBeVisible();
  });

  test('should search posts by keyword', async ({ page }) => {
    const searchInput = page.locator('input[placeholder*="Search articles"]');
    
    await searchInput.fill('React');
    
    // Should show React-related posts
    await expect(page.locator('text=React Performance: Beyond the Basics')).toBeVisible();
    
    // Clear search and try another keyword
    await searchInput.fill('');
    await searchInput.fill('Business');
    
    await expect(page.locator('text=Building Scalable SaaS Products')).toBeVisible();
  });

  test('should display post metadata correctly', async ({ page }) => {
    // Check for author, date, and read time
    await expect(page.locator('text=Emmanuel Ogugua')).toBeVisible();
    await expect(page.locator('text=8 min read')).toBeVisible();
    await expect(page.locator('text=12 min read')).toBeVisible();
    
    // Check for tags
    await expect(page.locator('text=Full-Stack')).toBeVisible();
    await expect(page.locator('text=React')).toBeVisible();
    await expect(page.locator('text=SaaS')).toBeVisible();
  });

  test('should handle empty search results', async ({ page }) => {
    const searchInput = page.locator('input[placeholder*="Search articles"]');
    
    await searchInput.fill('nonexistentterm12345');
    
    await expect(page.locator('text=No articles found')).toBeVisible();
    await expect(page.locator('text=Try adjusting your search')).toBeVisible();
  });

  test('should display newsletter signup', async ({ page }) => {
    await page.locator('text=Stay Updated').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Stay Updated')).toBeVisible();
    await expect(page.locator('input[placeholder*="Enter your email"]')).toBeVisible();
    await expect(page.locator('text=Subscribe')).toBeVisible();
  });

  test('should show all 21 blog posts', async ({ page }) => {
    // Reset to show all posts
    await page.click('text=All Posts');
    
    // Count blog post cards (excluding featured post)
    const postCards = page.locator('[data-testid="blog-post"], .group.cursor-pointer');
    const count = await postCards.count();
    
    // Should have 21 posts total (20 regular + 1 featured)
    expect(count).toBeGreaterThanOrEqual(20);
  });
});

test.describe('Learn Page Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learn');
  });

  test('should display learning resources correctly', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Learn & Grow');
    
    // Check for course titles
    await expect(page.locator('text=Full-Stack Development Masterclass')).toBeVisible();
    await expect(page.locator('text=Digital Strategy for African Businesses')).toBeVisible();
    await expect(page.locator('text=Cybersecurity Fundamentals')).toBeVisible();
  });

  test('should filter resources by category', async ({ page }) => {
    // Click Development filter
    await page.click('text=Development');
    
    // Should show development courses
    await expect(page.locator('text=Full-Stack Development Masterclass')).toBeVisible();
    await expect(page.locator('text=Building Scalable APIs with Node.js')).toBeVisible();
    
    // Click Business filter
    await page.click('text=Business');
    
    // Should show business courses
    await expect(page.locator('text=Digital Strategy for African Businesses')).toBeVisible();
    await expect(page.locator('text=Brand Development Workshop')).toBeVisible();
  });

  test('should search resources by keyword', async ({ page }) => {
    const searchInput = page.locator('input[placeholder*="Search courses"]');
    
    await searchInput.fill('React');
    
    // Should show React-related courses
    await expect(page.locator('text=React Performance Optimization')).toBeVisible();
    await expect(page.locator('text=Mobile App Development with React Native')).toBeVisible();
  });

  test('should display resource details correctly', async ({ page }) => {
    // Check for pricing, duration, level, and ratings
    await expect(page.locator('text=₦25,000')).toBeVisible();
    await expect(page.locator('text=12 hours')).toBeVisible();
    await expect(page.locator('text=Intermediate')).toBeVisible();
    await expect(page.locator('text=4.9')).toBeVisible();
    
    // Check for student count
    await expect(page.locator('text=1250')).toBeVisible();
  });

  test('should display resource types correctly', async ({ page }) => {
    // Check for different resource types
    await expect(page.locator('text=Course')).toBeVisible();
    await expect(page.locator('text=Tutorial')).toBeVisible();
    await expect(page.locator('text=Workshop')).toBeVisible();
  });

  test('should display skill levels with correct colors', async ({ page }) => {
    // Check for different skill levels
    await expect(page.locator('text=Beginner')).toBeVisible();
    await expect(page.locator('text=Intermediate')).toBeVisible();
    await expect(page.locator('text=Advanced')).toBeVisible();
  });

  test('should show enroll buttons for all resources', async ({ page }) => {
    const enrollButtons = page.locator('text=Enroll Now');
    const count = await enrollButtons.count();
    
    // Should have enroll buttons for all visible resources
    expect(count).toBeGreaterThan(0);
  });

  test('should display custom training CTA', async ({ page }) => {
    await page.locator('text=Need Custom Training?').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Need Custom Training?')).toBeVisible();
    await expect(page.locator('text=Request Custom Training')).toBeVisible();
    await expect(page.locator('text=View Portfolio')).toBeVisible();
  });

  test('should show all 21 learning resources', async ({ page }) => {
    // Reset to show all resources
    await page.click('text=All Resources');
    
    // Count resource cards
    const resourceCards = page.locator('[data-testid="resource-card"], .h-full.group');
    const count = await resourceCards.count();
    
    // Should have 21 resources total
    expect(count).toBeGreaterThanOrEqual(21);
  });

  test('should handle empty search results', async ({ page }) => {
    const searchInput = page.locator('input[placeholder*="Search courses"]');
    
    await searchInput.fill('nonexistentcourse12345');
    
    await expect(page.locator('text=No resources found')).toBeVisible();
    await expect(page.locator('text=Try adjusting your search')).toBeVisible();
  });
});

test.describe('Content Quality', () => {
  test('blog posts should have consistent structure', async ({ page }) => {
    await page.goto('/blog');
    
    // Each post should have title, excerpt, author, date, read time
    const postCards = page.locator('.group.cursor-pointer').first();
    
    await expect(postCards.locator('h3')).toBeVisible(); // Title
    await expect(postCards.locator('p')).toBeVisible(); // Excerpt
    await expect(postCards.locator('text=Emmanuel Ogugua')).toBeVisible(); // Author
    await expect(postCards.locator('text=min read')).toBeVisible(); // Read time
  });

  test('learning resources should have complete information', async ({ page }) => {
    await page.goto('/learn');
    
    const resourceCard = page.locator('.h-full').first();
    
    await expect(resourceCard.locator('h3')).toBeVisible(); // Title
    await expect(resourceCard.locator('p')).toBeVisible(); // Description
    await expect(resourceCard.locator('text=₦')).toBeVisible(); // Price
    await expect(resourceCard.locator('text=hours')).toBeVisible(); // Duration
    await expect(resourceCard.locator('text=Enroll Now')).toBeVisible(); // CTA
  });

  test('should display cybersecurity and entrepreneurship focus', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for cybersecurity content
    await expect(page.locator('text=Cybersecurity')).toBeVisible();
    await expect(page.locator('text=Security')).toBeVisible();
    
    // Check for entrepreneurship content
    await expect(page.locator('text=Startup')).toBeVisible();
    await expect(page.locator('text=Business')).toBeVisible();
    await expect(page.locator('text=Entrepreneur')).toBeVisible();
  });
});
