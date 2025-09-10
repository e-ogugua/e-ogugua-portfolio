describe('Comment Form Validation', () => {
  beforeEach(() => {
    cy.visit('/blog/1');
    cy.get('[data-testid="open-comment-form-button"]').click();
  });

  it('should show validation errors for empty form submission', () => {
    cy.get('form').submit();
    
    // Check for validation messages
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Comment cannot be empty').should('be.visible');
  });

  it('should validate email format', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('form').submit();
    
    // Check for email validation message
    cy.contains('Please enter a valid email').should('be.visible');
  });

  it('should clear validation errors when input is corrected', () => {
    // Submit empty form to show errors
    cy.get('form').submit();
    
    // Fill in the form correctly
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="content"]').type('This is a test comment');
    
    // Check that validation errors are gone
    cy.contains('Name is required').should('not.exist');
    cy.contains('Email is required').should('not.exist');
    cy.contains('Comment cannot be empty').should('not.exist');
  });

  it('should show server error message when comment submission fails', () => {
    // Mock a server error
    cy.intercept('POST', '/api/comments', {
      statusCode: 500,
      body: { message: 'Failed to submit comment' },
      delay: 100
    }).as('submitComment');
    
    // Fill in the form
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('textarea[name="content"]').type('This is a test comment');
    
    // Submit the form
    cy.get('form').submit();
    
    // Check for loading state
    cy.get('button[type="submit"]').should('be.disabled');
    
    // Wait for the request to complete
    cy.wait('@submitComment');
    
    // Check for error message
    cy.contains('Failed to submit comment. Please try again.').should('be.visible');
  });
});
