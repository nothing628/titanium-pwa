import { mount } from "@cypress/vue";
import Button from "./button.vue";

it("renders a Register button", () => {
  mount(Button, {
    slots: {
      default: () => "Register",
    },
  });

  cy.get("button").contains("Register");
});

it("can click event", () => {
  mount(Button, {
    slots: {
      default: () => "Click Me",
    },
  });

  cy.contains("button", "Click Me")
    .click()
    .vue()
    .then((wrapper) => {
      expect(wrapper.emitted("click")).to.have.length(1);
    });
});

it("should be disabled", () => {
  mount(Button, {
    props: {
      disabled: true,
    },
    slots: {
      default: () => "This should be disabled",
    },
  });

  cy.get("button").should("be.disabled");
});

it("should be enabled", () => {
  mount(Button, {
    props: {
      disabled: false,
    },
    slots: {
      default: () => "This should be enabled",
    },
  });

  cy.get("button").should("be.enabled");
});
