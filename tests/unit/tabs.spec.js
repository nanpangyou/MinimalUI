import chai, { expect } from 'chai'
import sinon from 'sinon'
import { mount, createLocalVue, render } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import MTabs from "@/components/tabs/tabs";
import MTabsHead from "@/components/tabs/tabs-head";
import MTabsBody from "@/components/tabs/tabs-body";
import MTabsItem from "@/components/tabs/tabs-item";
import MTabsPane from "@/components/tabs/tabs-pane";
import Vue from 'vue/dist/vue.esm.js';
chai.use(sinonChai)

describe("MTabs", () => {
    it("存在.", () => {
        expect(MTabs).to.be.ok;
    });
    it("可以设置selected.", () => {
        Vue.component('m-tabs', MTabs)
        Vue.component('m-tabs-head', MTabsHead)
        Vue.component('m-tabs-body', MTabsBody)
        Vue.component('m-tabs-item', MTabsItem)
        Vue.component('m-tabs-pane', MTabsPane)
        const selected = 'tech'
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `<m-tabs selected = ${selected}>
                            <m-tabs-head>
                                <m-tabs-item name="study">1</m-tabs-item>
                                <m-tabs-item name="job">2</m-tabs-item>
                                <m-tabs-item name="tech">3</m-tabs-item>
                            </m-tabs-head>
                            <m-tabs-body>
                                <m-tabs-pane name="study">pane1</m-tabs-pane>
                                <m-tabs-pane name="job">pane2</m-tabs-pane>
                                <m-tabs-pane name="tech">pane3</m-tabs-pane>
                            </m-tabs-body>
                        </m-tabs>`
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            expect(document.querySelector(`[data-name=${selected}]`).classList.contains('is-selected')).to.eq(true);
        })
    })
});

