import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Col from "@/components/grid/col";
import Row from "@/components/grid/row";
chai.use(sinonChai)


describe("Col", () => {
    it("存在.", () => {
        expect(Col).to.be.ok;
    });
    it("可以设置gutter.", async () => {
        const RowWrapper = await mount(Row, {
            attachTo: document.body,
            slots: {
                default: [Col]
            },
            propsData: {
                gutter: 20
            }
        })
        const colDom = RowWrapper.find('.m-col').vm.$el;
        expect(getComputedStyle(colDom).paddingRight).to.eq("10px");
        expect(getComputedStyle(colDom).paddingLeft).to.eq("10px");
    });
    it("可以设置span.", () => {
        const ColWrapper = mount(Col, {
            propsData: {
                span: "6"
            }
        })
        expect(ColWrapper.find('.m-col').classes().includes('m-col-6')).to.be.true;
    });
    it("可以设置xs.", () => {
        const ColWrapper = mount(Col, {
            propsData: {
                xs: {
                    span: 3,
                    offset: 5
                }
            }
        })
        expect(ColWrapper.find('.m-col').classes().includes('m-xs-col-3')).to.be.true;
        expect(ColWrapper.find('.m-col').classes().includes('m-xs-col-offset-5')).to.be.true;
    });
});
