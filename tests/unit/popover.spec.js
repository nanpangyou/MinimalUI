import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Popover from "@/components/popover/popover";
import Vue from 'vue';
chai.use(sinonChai)

describe('Popover', () => {
    it("存在.", () => {
        expect(Popover).to.be.ok;
    });
    it("可以设置position", (done) => {
        const wrapper = mount(Popover, {
            attachTo: document.body,
            propsData: {
                position: "bottom"
            },
            slots: {
                default: 'popover conent',
                reference: { template: "<button>click</button>" }
            },

        })
        wrapper.find('.trigger-wrapper').trigger("click");
        setTimeout(() => {
            expect(document.body.querySelector(".content-wrapper").classList.contains('position-bottom')).to.be.true;
            document.body.querySelector(".m-popover-wrapper").remove();
            done()
        }, 1000)
    })
    it("可以设置trigger", (done) => {
        const wrapper = mount(Popover, {
            attachTo: document.body,
            propsData: {
                trigger: "hover"
            },
            slots: {
                default: 'popover conent111',
                reference: { template: "<button>hover</button>" }
            },

        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.trigger-wrapper').trigger("mouseenter");
        setTimeout(() => {
            expect(document.body.querySelector(".content-wrapper")).to.be.exist
            done()
        }, 1300)

    })
})