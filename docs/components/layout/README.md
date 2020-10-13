# layout

示例: 

<Layout-layout-demos />

```js
import {MLayout,MHeader,MContent,MSider,MFooter} from "minimalui";
export default {
  components: {
    "m-layout": MLayout,
    "m-header": MHeader,
    "m-content": MContent,
    "m-sider": MSider,
    "m-footer": MFooter,
  },
};
```

```html
<m-layout>
    <m-header>header</m-header>
    <m-content>content</m-content>
    <m-footer>footer</m-footer>
</m-layout>


<m-layout>
    <m-header>header</m-header>
    <m-layout>
        <m-sider>sider</m-sider>
        <m-content>content</m-content>
    </m-layout>
    <m-footer>footer</m-footer>
</m-layout>


<m-layout>
    <m-header>header</m-header>
    <m-layout>
        <m-content>content</m-content>
        <m-sider>sider</m-sider>
    </m-layout>
    <m-footer>footer</m-footer>
</m-layout>
```