import { mount } from "@vue/test-utils";
import Admin from "./Admin.vue";

describe('Admin', () => {
    it('renders a profile link', () => {
        const wrapper = mount(Admin)
        expect(wrapper.find('#profile').text()).toBe('My Profile')
    })
    it('renders an admin link', () => {
        const wrapper = mount(Admin, {
          data() {
            return {
              admin: true,
            };
          },
        });
        expect(wrapper.find("#admin").isVisible()).toBe(true);
    })

    it('does not render an admin link', () => {
        const wrapper = mount(Admin)
        expect(wrapper.find("#admin").isVisible()).toBe(false);
    })
})