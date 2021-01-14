import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Toast from "@/components/toast/toast";
chai.use(sinonChai)

describe("Toast", () => {
    it("存在.", () => {
        expect(Toast).to.be.ok;
    });
    describe("props 属性部分", () => {
        it("可以设置autoDelay.", function (done) {
            this.timeout(5000)
            const wrapper = mount(Toast, {
                attachTo: document.body,
                propsData: {
                    autoDelay: false
                }
            });
            setTimeout(() => {
                expect(document.body.contains(wrapper.vm.$el)).to.eq(true);
                done();
            }, 4000)
        });

        it("可以设置delayTime", function (done) {
            this.timeout(5000)
            const wrapper = mount(Toast, {
                attachTo: document.body,
                propsData: {
                    delayTime: 5000
                }
            });
            setTimeout(() => {
                expect(document.body.contains(wrapper.vm.$el)).to.eq(true);
                done();
            }, 4000)
        });

        it("设置closeButton", function () {
            const wrapper = mount(Toast, {
                attachTo: document.body,
                slots: {
                    default: ['我是toast'],
                },
                propsData: {
                    closeButton: {
                        msg: 'xxx',
                        callback: sinon.fake()
                    }
                }
            })
            expect(wrapper.find('.close-btn').text()).to.eq('xxx');
        })
        it("触发closeButton", function (done) {
            const callback = sinon.fake();
            const wrapper = mount(Toast, {
                attachTo: document.body,
                slots: {
                    default: ['我是toast'],
                },
                propsData: {
                    closeButton: {
                        msg: 'xxx',
                        callback
                    }
                }
            })
            setTimeout(() => {
                wrapper.find(".close-btn").trigger("click");
                expect(callback).to.have.been.called;
                done();
            }, 0)
        })
        it("设置position-bottom", function (done) {
            const wrapper = mount(Toast, {
                attachTo: document.body,
                slots: {
                    default: ['我是toast'],
                },
                propsData: {
                    position: 'bottom'
                }
            })
            setTimeout(() => {
                expect(wrapper.find(".m-toast").classes()).contains('position-bottom')
                done();
            }, 0)
        })
        it("设置position-middle", function (done) {
            const wrapper = mount(Toast, {
                attachTo: document.body,
                slots: {
                    default: ['我是toast'],
                },
                propsData: {
                    position: 'middle'
                }
            })
            setTimeout(() => {
                expect(wrapper.find(".m-toast").classes()).contains('position-middle')
                done();
            }, 0)
        })
        // xit("设置enableHTML", function () {
        //     const wrapper = mount(Toast, {
        //         attachTo: document.body,
        //         slots: {
        //             default: ['<strong id="xx">xxx</strong>'],
        //         },
        //         propsData: {
        //             enableHtml: true,
        //         }
        //     })
        //     expect(wrapper.vm.$el.querySelector('#xx')).to.been.exist;
        // })
    });
});
