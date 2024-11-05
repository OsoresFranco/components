describe('SpinnerComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/'); // Reemplaza con la URL del componente
  });

  it('should render the spinner component', () => {
    cy.get('ly-spinner').should('exist');
  });

  it('should reflect the correct animation duration in ng-reflect', () => {
    const duration = 5; // Duración en segundos
    cy.get('ly-spinner').invoke(
      'attr',
      'ng-reflect-animation-duration',
      duration
    );

    cy.get('ly-spinner')
      .should('have.attr', 'ng-reflect-animation-duration', `${duration}`)
      .get('.ly-spinner__svg-circle-background--fill')
      .should('have.css', 'animation-duration', `${duration}s`);
  });

  it('should apply the correct stroke color', () => {
    const color = 'rgb(196, 22, 28)';
    cy.get('ly-spinner').invoke('attr', 'stroke', color);

    cy.get('.ly-spinner__svg-circle-background--fill').should(
      'have.css',
      'stroke',
      color
    );
  });

  it('should have an aria-label that reflects loading status', () => {
    const loadingText = 'Loading data...';
    cy.get('ly-spinner').invoke('attr', 'aria-label', loadingText);
    cy.get('ly-spinner').should('have.attr', 'aria-label', loadingText);
  });
});
