import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '@/pages/home';
import { About } from '@/pages/about';
import Blog from '@/pages/blog';
import Learn from '@/pages/learn';
import { Development } from '@/pages/development';
import { Consulting } from '@/pages/consulting';
import { Training } from '@/pages/training';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock wouter
vi.mock('wouter', () => ({
  useLocation: () => ['/', vi.fn()],
  Link: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

// Mock components
vi.mock('@/components/split-landing', () => ({
  SplitLanding: () => <div data-testid="split-landing">Split Landing Component</div>,
}));

vi.mock('@/components/portfolio-section', () => ({
  PortfolioSection: () => <div data-testid="portfolio-section">Portfolio Section</div>,
}));

vi.mock('@/components/services-section', () => ({
  ServicesSection: () => <div data-testid="services-section">Services Section</div>,
}));

vi.mock('@/components/contact-form', () => ({
  ContactForm: () => <div data-testid="contact-form">Contact Form</div>,
}));

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />);
    
    expect(screen.getByTestId('split-landing')).toBeInTheDocument();
    expect(screen.getByTestId('portfolio-section')).toBeInTheDocument();
    expect(screen.getByTestId('services-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('displays footer with navigation', () => {
    render(<Home />);
    
    expect(screen.getByText('Emmanuel Chukwuka Ogugua')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
    expect(screen.getByText('Consulting')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
  });

  it('has SuperExplorer button linking to dashboard', () => {
    render(<Home />);
    
    const superExplorerButton = screen.getByText('SuperExplorer');
    expect(superExplorerButton).toBeInTheDocument();
    expect(superExplorerButton.closest('a')).toHaveAttribute('href', 'https://emmanuelos-swart-dashboard.vercel.app');
  });
});

describe('About Page', () => {
  it('renders hero section with correct persona', () => {
    render(<About />);
    
    expect(screen.getByText('Emmanuel Chukwuka Ogugua')).toBeInTheDocument();
    expect(screen.getByText('CyberSecurity Expert')).toBeInTheDocument();
    expect(screen.getByText('Serial Entrepreneur')).toBeInTheDocument();
  });

  it('displays skills sections', () => {
    render(<About />);
    
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Business Skills')).toBeInTheDocument();
    expect(screen.getByText('Achievements')).toBeInTheDocument();
  });

  it('shows personal story section', () => {
    render(<About />);
    
    expect(screen.getByText('My Story')).toBeInTheDocument();
    expect(screen.getByText(/passionate about bridging/)).toBeInTheDocument();
  });
});

describe('Blog Page', () => {
  it('renders blog header and search', () => {
    render(<Blog />);
    
    expect(screen.getByText('Insights & Thoughts')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search articles...')).toBeInTheDocument();
  });

  it('displays category filters', () => {
    render(<Blog />);
    
    expect(screen.getByText('All Posts')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('Insights')).toBeInTheDocument();
  });

  it('shows blog posts', () => {
    render(<Blog />);
    
    expect(screen.getByText('The Future of Full-Stack Development in Africa')).toBeInTheDocument();
    expect(screen.getByText('Building Scalable SaaS Products: Lessons from the Field')).toBeInTheDocument();
  });

  it('filters posts by category', () => {
    render(<Blog />);
    
    const developmentFilter = screen.getByText('Development');
    fireEvent.click(developmentFilter);
    
    // Should show development posts
    expect(screen.getByText('React Performance: Beyond the Basics')).toBeInTheDocument();
  });

  it('searches posts by query', () => {
    render(<Blog />);
    
    const searchInput = screen.getByPlaceholderText('Search articles...');
    fireEvent.change(searchInput, { target: { value: 'React' } });
    
    // Should filter to React-related posts
    expect(screen.getByText('React Performance: Beyond the Basics')).toBeInTheDocument();
  });
});

describe('Learn Page', () => {
  it('renders learning resources header', () => {
    render(<Learn />);
    
    expect(screen.getByText('Learn & Grow')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search courses, tutorials...')).toBeInTheDocument();
  });

  it('displays category filters', () => {
    render(<Learn />);
    
    expect(screen.getByText('All Resources')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('Tutorials')).toBeInTheDocument();
  });

  it('shows learning resources', () => {
    render(<Learn />);
    
    expect(screen.getByText('Full-Stack Development Masterclass')).toBeInTheDocument();
    expect(screen.getByText('Digital Strategy for African Businesses')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity Fundamentals')).toBeInTheDocument();
  });

  it('displays resource details', () => {
    render(<Learn />);
    
    // Check for pricing and duration
    expect(screen.getByText('₦25,000')).toBeInTheDocument();
    expect(screen.getByText('12 hours')).toBeInTheDocument();
    expect(screen.getByText('Intermediate')).toBeInTheDocument();
  });
});

describe('Development Page', () => {
  it('renders development services header', () => {
    render(<Development />);
    
    expect(screen.getByText('Development Services')).toBeInTheDocument();
    expect(screen.getByText(/Expert development solutions/)).toBeInTheDocument();
  });

  it('displays service offerings', () => {
    render(<Development />);
    
    expect(screen.getByText('Cybersecurity Solutions')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Development')).toBeInTheDocument();
    expect(screen.getByText('Systems Administration')).toBeInTheDocument();
  });

  it('shows pricing and features', () => {
    render(<Development />);
    
    expect(screen.getByText('₦150,000')).toBeInTheDocument();
    expect(screen.getByText('Security Assessment')).toBeInTheDocument();
    expect(screen.getByText('Penetration Testing')).toBeInTheDocument();
  });

  it('has contact CTA buttons', () => {
    render(<Development />);
    
    const getQuoteButtons = screen.getAllByText('Get Quote');
    expect(getQuoteButtons.length).toBeGreaterThan(0);
  });
});

describe('Consulting Page', () => {
  it('renders consulting services header', () => {
    render(<Consulting />);
    
    expect(screen.getByText('Strategic Consulting')).toBeInTheDocument();
    expect(screen.getByText(/Transform your business/)).toBeInTheDocument();
  });

  it('displays consulting services', () => {
    render(<Consulting />);
    
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument();
    expect(screen.getByText('Business Strategy')).toBeInTheDocument();
    expect(screen.getByText('Brand Strategy')).toBeInTheDocument();
  });

  it('shows case studies section', () => {
    render(<Consulting />);
    
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('FinTech Startup Transformation')).toBeInTheDocument();
  });
});

describe('Training Page', () => {
  it('renders training programs header', () => {
    render(<Training />);
    
    expect(screen.getByText('Professional Training')).toBeInTheDocument();
    expect(screen.getByText(/Accelerate your career/)).toBeInTheDocument();
  });

  it('displays instructor stats', () => {
    render(<Training />);
    
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('1,200+')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();
  });

  it('shows training programs', () => {
    render(<Training />);
    
    expect(screen.getByText('Cybersecurity Mastery Bootcamp')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Development Intensive')).toBeInTheDocument();
    expect(screen.getByText('Entrepreneurship Accelerator')).toBeInTheDocument();
  });

  it('displays program pricing', () => {
    render(<Training />);
    
    expect(screen.getByText('₦850,000')).toBeInTheDocument();
    expect(screen.getByText('₦650,000')).toBeInTheDocument();
    expect(screen.getByText('₦1,200,000')).toBeInTheDocument();
  });

  it('shows student testimonials', () => {
    render(<Training />);
    
    expect(screen.getByText('Student Success Stories')).toBeInTheDocument();
    expect(screen.getByText('Kemi Adebayo')).toBeInTheDocument();
    expect(screen.getByText('David Okafor')).toBeInTheDocument();
  });
});
