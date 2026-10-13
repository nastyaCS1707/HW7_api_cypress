Cypress.Commands.add("deleteUser", (id) => {
  return cy.request({
    method: "DELETE",
    url: `/users/${id}`,
  });
});

Cypress.Commands.add("create", (name, surname) => {
  return cy.request({
    method: "POST",
    url: "/users/",
    body: {
      firstName: name,
      surName: surname,
    },
  });
});

Cypress.Commands.add("getUser", (id) => {
  return cy.request({
    method: "GET",
    url: `/users/${id}`,
    failOnStatusCode: false,
  });
});
