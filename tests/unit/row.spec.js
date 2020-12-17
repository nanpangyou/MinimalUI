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
    // 暂时没法测试css
    xit("可以设置gutter.", (done) => {
        const wrapper = mount(Row, {
            slots: {
                default: [Col],
            },
            propsData: {
                gutter: '20'
            }
        })
        console.log(wrapper.html())
        const colDom = wrapper.find(".m-col");
        console.log(colDom.html())
        expect(getComputedStyle(colDom).paddingRight).to.eq("10px");
        expect(getComputedStyle(colDom).paddingLeft).to.eq("10px");
    });
    //暂时没法测试css
    xit("可以设置align1.", () => {
        const wrapper = mount(Row, {
            propsData: {
                align: 'center'
            }
        })
        const rowDom = wrapper.find(".m-row");
        expect(getComputedStyle(rowDom).justifyContent).to.eq("center");
    });
    // 暂时没法测试css
    xit("可以设置align2.", () => {
        const wrapper = mount(Row, {
            propsData: {
                align: 'right'
            }
        })
        const rowDom = wrapper.find(".m-row");
        expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-end");
    });
    //暂时没法测试css
    xit("可以设置align3.", () => {
        const wrapper = mount(Row);
        const rowDom = wrapper.find(".m-row");
        expect(getComputedStyle(rowDom).justifyContent).to.eq("flex-start");
        vm.$el.remove();
        vm.$destroy();
    });
});
