import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Input from "@/components/input/input";
chai.use(sinonChai)



describe("Input.vue", () => {
    it("存在.", () => {
        expect(Input).to.be.ok;
    });
    describe("props 属性部分", () => {
        let wrapper = null;
        beforeEach(() => {
            // Constructor = Vue.extend(Input);
        });
        afterEach(() => {
            // vm.$el.remove();
            // vm.$destroy();
        });
        it("可以设置value.", () => {
            wrapper = mount(Input, {
                propsData: {
                    value: "xxx"
                }
            });
            const inputElement = wrapper.find("input");
            expect(inputElement.element.value).to.equal("xxx");
        });
        it("可以设置disabled.", () => {
            wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            });
            const inputElement = wrapper.find('input');
            expect(inputElement.attributes()['disabled']).to.equal("disabled");
        });
        it("可以设置readonly", () => {
            wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            });
            const inputElement = wrapper.find("input");
            expect(inputElement.attributes()["readonly"]).to.equal("readonly");
        });
        it("设置 error ", () => {
            wrapper = mount(Input, {
                propsData: {
                    error: "you are wrong"
                }
            });
            const errorIconElement = wrapper.find(".m-icon");
            expect(
                errorIconElement.find('use').attributes()['href']
            ).to.equal("#i-error");
            const errorMsgElement = wrapper.find("span");
            expect(errorMsgElement.text()).to.equal("you are wrong");
        });
    });
    describe("事件部分", () => {
        let wrapper = null;
        const triggerWithValueEventList = ["input"];
        const triggerWithoutValueEventList = ["change", "focus", "blur"];
        beforeEach(() => {
            wrapper = mount(Input)
        });
        afterEach(() => {
            // vm.$destroy();
        });
        triggerWithValueEventList.map((item) => {
            it(`触发${item}事件`, () => {
                const callback = sinon.fake();
                wrapper.vm.$on(item, callback);
                wrapper.vm.$emit(item)
                wrapper.vm.$emit(item, 'hi')
                expect(callback).to.have.been.called;
                expect(callback).to.have.been.calledWith("hi");
            });
        });
        triggerWithoutValueEventList.map((item) => {
            it(`触发${item}事件`, () => {
                let callback = sinon.fake();
                wrapper.vm.$on(item, callback);
                wrapper.vm.$emit(item);
                expect(callback).to.have.been.called;
            });
        });
    });
});
