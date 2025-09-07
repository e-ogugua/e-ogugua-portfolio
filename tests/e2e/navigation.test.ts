import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('Emmanuel Chukwuka Ogugua');
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.click('text=Blog');
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toContainText('Insights & Thoughts');
  });

  test('should navigate to Learn page', async ({ page }) => {
    await page.click('text=Learn');
    await expect(page).toHaveURL('/learn');
    await expect(page.locator('h1')).toContainText('Learn & Grow');
  });

  test('should navigate to Development page', async ({ page }) => {
    await page.click('text=Development');
    await expect(page).toHaveURL('/development');
    await expect(page.locator('h1')).toContainText('Development Services');
  });

  test('should navigate to Consulting page', async ({ page }) => {
    await page.click('text=Consulting');
    await expect(page).toHaveURL('/consulting');
    await expect(page.locator('h1')).toContainText('Strategic Consulting');
  });

  test('should navigate to Training page', async ({ page }) => {
    await page.click('text=Training');
    await expect(page).toHaveURL('/training');
    await expect(page.locator('h1')).toContainText('Professional Training');
  });

  test('should navigate back from pages', async ({ page }) => {
    // Go to About page
    await page.click('text=About');
    await expect(page).toHaveURL('/about');

    // Click back button
    await page.click('text=Back');
    await expect(page).toHaveURL('/');
  });

  test('should open SuperExplorer dashboard in new tab', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page');
    await page.click('text=SuperExplorer');
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL('https://emmanuelos-swart-dashboard.vercel.app');
  });
});

test.describe('Persona Switching', () => {
  test('should switch between developer and CEO personas', async ({ page }) => {
    await page.goto('/');
    
    // Move mouse to left side (developer persona)
    await page.mouse.move(200, 400);
    await expect(page.locator('text=CyberSecurity Expert')).toBeVisible();
    await expect(page.locator('text=Full-Stack Developer')).toBeVisible();

    // Move mouse to right side (CEO persona)
    await page.mouse.move(800, 400);
    await expect(page.locator('text=Serial Entrepreneur')).toBeVisible();
    await expect(page.locator('text=Brand Strategist')).toBeVisible();
  });

  test('should display persona-specific content', async ({ page }) => {
    await page.goto('/');
    
    // Check developer persona content
    await page.mouse.move(200, 400);
    await expect(page.locator('text=Systems Administrator')).toBeVisible();
    await expect(page.locator('text=Database Administrator')).toBeVisible();

    // Check CEO persona content
    await page.mouse.move(800, 400);
    await expect(page.locator('text=Digital Transformation')).toBeVisible();
    await expect(page.locator('text=Consultant')).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Get In Touch')).toBeVisible();
    await expect(page.locator('input[placeholder*="Name"]')).toBeVisible();
    await expect(page.locator('input[placeholder*="Email"]')).toBeVisible();
    await expect(page.locator('textarea[placeholder*="Message"]')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check for validation messages (implementation dependent)
    await expect(page.locator('input[placeholder*="Name"]')).toBeFocused();
  });

  test('should fill and submit contact form', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    await page.fill('input[placeholder*="Name"]', 'Test User');
    await page.fill('input[placeholder*="Email"]', 'test@example.com');
    await page.fill('textarea[placeholder*="Message"]', 'This is a test message');
    
    await page.click('button[type="submit"]');
    
    // Check for success message or form submission
    // This would depend on the actual form implementation
  });
});

test.describe('Portfolio Section', () => {
  test('should display portfolio projects', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=Featured Projects')).toBeVisible();
    await expect(page.locator('text=E-Commerce Platform')).toBeVisible();
    await expect(page.locator('text=Task Management System')).toBeVisible();
  });

  test('should filter projects by category', async ({ page }) => {
    await page.goto('/');
    
    // Click on Web Apps filter
    await page.click('text=Web Apps');
    
    // Should show web app projects
    await expect(page.locator('text=E-Commerce Platform')).toBeVisible();
  });

  test('should display project details on hover', async ({ page }) => {
    await page.goto('/');
    
    // Hover over a project card
    await page.hover('text=E-Commerce Platform');
    
    // Should show project technologies
    await expect(page.locator('text=React')).toBeVisible();
    await expect(page.locator('text=Node.js')).toBeVisible();
  });
});

test.describe('Services Section', () => {
  test('should display all service categories', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=Development')).toBeVisible();
    await expect(page.locator('text=Consulting')).toBeVisible();
    await expect(page.locator('text=Training')).toBeVisible();
  });

  test('should navigate to service pages', async ({ page }) => {
    await page.goto('/');
    
    // Click on Development service
    await page.click('text=Learn More >> nth=0');
    await expect(page).toHaveURL('/development');
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile navigation
    await expect(page.locator('text=Emmanuel Chukwuka Ogugua')).toBeVisible();
    
    // Check persona switching still works on mobile
    await page.tap('text=CyberSecurity Expert');
    await expect(page.locator('text=Full-Stack Developer')).toBeVisible();
  });

  test('should work on tablet devices', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('text=CyberSecurity Expert')).toBeVisible();
    await expect(page.locator('text=Serial Entrepreneur')).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('should load homepage quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    // Check that main content is visible
    await expect(page.locator('text=CyberSecurity Expert')).toBeVisible();
  });

  test('should load images properly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Check that profile images are loaded
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('src');
    }
  });
});
