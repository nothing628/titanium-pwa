import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

it("renders a Helloworld", () => {
  mount(HelloWorld, {
    props: {
      msg: "Hello Cypress!",
    },
  });

  cy.get("h1").contains("Hello Cypress!");
});
