Cypress.Commands.add("vue", () => {
  return cy.wrap(Cypress.vueWrapper);
});
Cypress.Commands.add("dataCy", (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});
