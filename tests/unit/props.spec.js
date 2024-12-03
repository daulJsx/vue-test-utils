import { mount } from "@vue/test-utils";
import App from "./App.vue";
import { createStore } from "vuex";
import { reactive } from "vue";
import Fetcher from "./Fetcher.vue";

const createVuexStore = () => { 
    return createStore({
        state() {
            return {
                count: 0
            }
        },

        mutations: {
            increment(state) {
                state.count += 1
            }
        }
    })
}


function factory() {
  const store = createVuexStore()
  return mount(App, {
    global: {
      plugins: [store],
      stubs: {
        Fetcher: true
      }
    }
  });
}

let mockGet = jest.fn()

jest.mock('axios', () => ({
    get: () => mockGet()
}))

describe("App", () => {
    beforeEach(() => {
        mockGet = jest.fn()
    })
    it('render count when even', async() => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain("Count: 2. Count is even.");
    })

    it('render count when odd', async() => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain("Count: 1. Count is odd.");
    })
    // it('makes an api call', async() => {
    //     const wrapper = factory()
    //     expect(mockGet). toHaveBeenCalledTimes(1)
    // })
});
