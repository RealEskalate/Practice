import { shallowMount } from "@vue/test-utils";
import NatneamInfoCard from "@/components/NatneamInfoCard.vue";

describe("NatneamInfoCard", () => {
  //   const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NatneamInfoCard);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("have an image with a source", () => {
    expect(wrapper.find("[src='/natneam.jpg']").exists()).toBe(true);
  });

  it("shows name and email ", () => {
    expect(wrapper.find("v-list-item-title").text()).toContain(
      "Natnaem Mesele"
    );
    expect(wrapper.find("v-list-item-subtitle").text()).toContain(
      "se.natneam.mesele@gmail.com"
    );
  });
});
