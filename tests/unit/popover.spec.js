import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Popover from "@/components/popover/popover";
chai.use(sinonChai)

describe('Popover', () => {
    it("存在.", () => {
        expect(Popover).to.be.ok;
    });
})