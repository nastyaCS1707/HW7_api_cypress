describe("API testing", () => {
  it("Add user", () => {
    cy.create("Иван", "Смирнов").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq("Иван");
      expect(response.body.surName).to.eq("Смирнов");

      cy.deleteUser(response.body.id);
    });
  });

  it("Change user", () => {
    cy.create("Дима", "Логинов").then((responseCreate) => {
      cy.request({
        method: "PUT",
        url: `/users/${responseCreate.body.id}`,
        qs: {
          firstName: "Василий",
          surName: "Петров",
        },
      }).then((responsePut) => {
        expect(responsePut.body.id).to.eq(responseCreate.body.id);
        expect(responsePut.body.firstName).to.eq("Василий");
        expect(responsePut.body.surName).to.eq("Петров");
      });
      cy.deleteUser(responseCreate.body.id);
    });
  });

  it("Delete user", () => {
    cy.create("Анна", "Косова").then((responseCreate) => {
      cy.deleteUser(responseCreate.body.id).then((responseDelete) => {
        expect(responseDelete.status).to.eq(200);
      });
      cy.getUser(responseCreate.body.id).then((responseGet) => {
        expect(responseGet.status).to.eq(400);
      });
    });
  });
});
