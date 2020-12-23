import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Col from "@/components/grid/col";
import Row from "@/components/grid/row";
chai.use(sinonChai)

describe("Row", () => {
    it("存在.", () => {
        expect(Row).to.be.ok;
    });

    it("可以设置gutter.", async () => {
        const wrapper = await mount(Row, {
            attachTo: document.body,
            slots: {
                default: [Col],
            },
            propsData: {
                gutter: '20'
            }
        })
        const colDom = wrapper.find(".m-col").vm.$el;
        expect(getComputedStyle(colDom).paddingRight).to.eq("10px");
        expect(getComputedStyle(colDom).paddingLeft).to.eq("10px");
    });

    it("可以设置align1.", async () => {
        const wrapper = await mount(Row, {
            attachTo: document.body,
            propsData: {
                align: 'center'
            }
        })
        const rowDom = wrapper.find(".m-row").vm.$el;
        expect(getComputedStyle(rowDom).justifyContent).to.eq("center");
    });

    it("可以设置align2.", async () => {
        const wrapper = await mount(Row, {
            attachTo: document.body,
            propsData: {
                align: 'right'
            }
        })
        const rowDom = wrapper.find(".m-row").vm.$el;
        expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-end");
    });

    it("可以设置align3.", async () => {
        const wrapper = await mount(Row, {
            attachTo: document.body
        });
        const rowDom = wrapper.find(".m-row").vm.$el;
        expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-start");
    });
});
