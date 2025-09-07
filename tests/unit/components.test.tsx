import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SplitLanding } from '../../../client/src/components/split-landing';
import { PortfolioSection } from '../../../client/src/components/portfolio-section';
import { ServicesSection } from '../../../client/src/components/services-section';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock wouter
vi.mock('wouter', () => ({
  useLocation: () => ['/', vi.fn()],
  Link: ({ children, href, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

describe('SplitLanding Component', () => {
  it('renders both personas correctly', () => {
    render(<SplitLanding />);
    
    expect(screen.getByText('CyberSecurity Expert')).toBeInTheDocument();
    expect(screen.getByText('Serial Entrepreneur')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Brand Strategist')).toBeInTheDocument();
  });

  it('switches personas on mouse move', () => {
    render(<SplitLanding />);
    
    const container = screen.getByTestId('split-container') || document.querySelector('.min-h-screen');
    
    // Simulate mouse move to left side (developer persona)
    fireEvent.mouseMove(container!, { clientX: 100 });
    
    // Check if developer persona is active
    expect(screen.getByText('Systems Administrator')).toBeInTheDocument();
    
    // Simulate mouse move to right side (CEO persona)
    fireEvent.mouseMove(container!, { clientX: 800 });
    
    // Check if CEO persona is active
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument();
  });

  it('displays navigation buttons', () => {
    render(<SplitLanding />);
    
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Learn')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });
});

describe('PortfolioSection Component', () => {
  it('renders portfolio projects', () => {
    render(<PortfolioSection />);
    
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    
    // Check for some project titles
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management System')).toBeInTheDocument();
  });

  it('filters projects by category', () => {
    render(<PortfolioSection />);
    
    const webButton = screen.getByText('Web Apps');
    fireEvent.click(webButton);
    
    // Should show web app projects
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
  });

  it('displays project details correctly', () => {
    render(<PortfolioSection />);
    
    // Check for project technologies
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});

describe('ServicesSection Component', () => {
  it('renders all service categories', () => {
    render(<ServicesSection />);
    
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
    expect(screen.getByText('Consulting')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
  });

  it('displays service descriptions', () => {
    render(<ServicesSection />);
    
    expect(screen.getByText(/Full-stack development/)).toBeInTheDocument();
    expect(screen.getByText(/Strategic consulting/)).toBeInTheDocument();
    expect(screen.getByText(/Professional training/)).toBeInTheDocument();
  });

  it('has working service buttons', () => {
    render(<ServicesSection />);
    
    const developmentButton = screen.getByRole('button', { name: /Learn More.*Development/ });
    expect(developmentButton).toBeInTheDocument();
    
    fireEvent.click(developmentButton);
    // Button should be clickable (navigation would be handled by routing)
  });
});
