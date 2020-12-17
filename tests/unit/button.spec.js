import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Button from "@/components/button/button";
chai.use(sinonChai)

describe('Button.vue', () => {
  it("存在.", () => {
    expect(Button).to.be.ok;
  });
  it("可以设置icon.", () => {
    const wrapper = mount(Button, {
      propsData: {
        name: "setting"
      }
    })
    const useElement = wrapper.find("use")
    expect(useElement.attributes()['href']).to.equal("#i-setting");
  });
  it("可以设置loading.", () => {
    const wrapper = mount(Button, {
      propsData: {
        name: "setting",
        loading: true
      }
    })
    const useElement = wrapper.find("use");
    expect(useElement.attributes()['href']).to.equal("#i-loading");
  });
  it("icon 默认的 order 是 1", () => {
    const wrapper = mount(Button, {
      attachTo: document.body,
      propsData: {
        name: "setting"
      }
    })
    const icon = wrapper.find("svg");
    expect(getComputedStyle(icon.vm.$el).order).to.eq("1");
  });
  it("设置 iconPosition 可以改变 order", () => {
    const wrapper = mount(Button, {
      attachTo: document.body,
      propsData: {
        name: "setting",
        iconPosition: "right"
      }
    })
    const icon = wrapper.find("svg");
    expect(getComputedStyle(icon.vm.$el).order).to.eq("2");
  });
  it("点击 button 触发 click 事件", () => {
    const wrapper = mount(Button, {
      propsData: {
        name: "setting"
      }
    })
    const callback = sinon.fake();
    wrapper.vm.$on('click', callback)
    wrapper.trigger('click');
    expect(callback).to.have.been.called;
  });
})
