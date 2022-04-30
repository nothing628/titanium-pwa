import { mount } from "@vue/test-utils";
import { it, describe, expect } from "vitest";
import Button from "./button.vue";

it("exists", () => {
  expect(Button).toBeTruthy();
});

it("can show correct slot", async () => {
  const wrapper = mount(Button, { slots: { default: () => "Test button" } });

  expect(wrapper.text()).toBe("Test button");
});

it('can emit event click', async () => {
  const wrapper = mount(Button, { slots: { default: () => "Test button" } });

  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted('click')).toHaveLength(1)
})
