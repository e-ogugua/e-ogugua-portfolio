describe('Responsive Behavior', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
  ];

  viewports.forEach(({ name, width, height }) => {
    describe(`${name} viewport`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit('/blog/1');
      });

      it(`should display comments section correctly on ${name}`, () => {
        // Check layout structure
        cy.get('[data-testid="comments-section"]').should('be.visible');
        
        // Check comment form visibility
        cy.get('[data-testid="open-comment-form-button"]').click();
        cy.get('form').should('be.visible');
        
        // Test form layout
        if (width < 768) {
          // On mobile, form inputs should stack vertically
          cy.get('form .grid').should('have.css', 'grid-template-columns', 'none');
        } else {
          // On tablet/desktop, form inputs should be in 2 columns
          cy.get('form .grid').should('have.css', 'grid-template-columns', 'repeat(2, minmax(0px, 1fr))');
        }
        
        // Test comment list layout
        cy.get('[data-testid="comments-list"]').should('be.visible');
        
        // Test comment item layout
        cy.get('[data-testid="comment-item"]').first().within(() => {
          cy.get('img').should('be.visible');
          cy.get('h4').should('be.visible');
          cy.get('p').should('be.visible');
          
          // Check action buttons visibility on hover (desktop only)
          if (width >= 768) {
            cy.get('button').contains('Delete').should('not.be.visible');
            cy.get('button').contains('Delete').invoke('show');
            cy.get('button').contains('Delete').should('be.visible');
          } else {
            // On mobile, delete button should be always visible
            cy.get('button').contains('Delete').should('be.visible');
          }
        });
      });
    });
  });

  // Test specific breakpoints
  it('should handle window resize correctly', () => {
    // Start with mobile view
    cy.viewport(375, 667);
    cy.visit('/blog/1');
    
    // Check mobile layout
    cy.get('form .grid').should('have.css', 'grid-template-columns', 'none');
    
    // Resize to desktop
    cy.viewport(1280, 800);
    cy.get('form .grid').should('have.css', 'grid-template-columns', 'repeat(2, minmax(0px, 1fr))');
    
    // Back to mobile
    cy.viewport(375, 667);
    cy.get('form .grid').should('have.css', 'grid-template-columns', 'none');
  });
});
