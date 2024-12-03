import { mount } from "@vue/test-utils";

const App = {
  props: {
    count: {
      type: Number
    }
  },
  template: `
    <div>Count: {{ count }}</div>
  `,
};

test("App", () => {
  const wrapper = mount(App, {
    props: {
      count: 1,
    },
  });
  console.log(wrapper.html());

  expect(wrapper.html()).toContain("Count: 1");
});
