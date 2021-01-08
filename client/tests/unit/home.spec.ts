import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import * as Vuex from "vuex";
import Element from "element-ui";

import HomePage from "@/views/pages/Home.vue";

Vue.use(Element);

const localView = createLocalVue();
localView.use(Vuex);

describe("HomePage.vue", () => {
  const $t = jest.fn();
  const store = new Vuex.Store({
    modules: {
      Articles: {
        namespaced: true
      }
    }
  });
  let wrapper;

  beforeEach(() => {
    // @ts-ignore
    wrapper = shallowMount(HomePage, {
      localView,
      store,
      mocks: {
        $t
      }
    });
  });

  it("Check default value", () => {
    expect(wrapper.vm.searchValue).toBeFalsy();
    expect(wrapper.vm.viewMode).toBeTruthy();
  });
  it("Check function changeView", () => {
    wrapper.vm.changeView();
    expect(wrapper.vm.viewMode).toBeFalsy();
  });
  it("Check function changeView", () => {
    wrapper.vm.changeView = jest.fn();
    wrapper.vm.changeView();
    expect(wrapper.vm.changeView).toHaveBeenCalled();
  });
});
