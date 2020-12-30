# Tabs

示例: 
<ClientOnly>
    <h3>不带action的tabs</h3>
    <Tabs-tabs-demos />
</ClientOnly>


```js
import { MIcon,MTabs,MTabsHead,MTabsBody,MTabsItem,MTabsPane } from 'minimalui'
export default {
  components: {
    "m-icon": MIcon,
    "m-tabs": MTabs,
    "m-tabs-head": MTabsHead,
    "m-tabs-item": MTabsItem,
    "m-tabs-body": MTabsBody,
    "m-tabs-pane": MTabsPane,
  },
  data() {
    return {
      selectedTab: "3",
    };
  },
  mounted() {},
};
```

```html
<m-tabs :selected="selectedTab">
    <m-tabs-head>
        <m-tabs-item name="1"> <m-icon name="setting"></m-icon>1</m-tabs-item>
        <m-tabs-item name="2">2</m-tabs-item>
        <m-tabs-item name="3">3</m-tabs-item>
    </m-tabs-head>
    <m-tabs-body>
        <m-tabs-pane name="1">pane1</m-tabs-pane>
        <m-tabs-pane name="2">pane2</m-tabs-pane>
        <m-tabs-pane name="3">pane3</m-tabs-pane>
    </m-tabs-body>
</m-tabs>
    
```

---
<h3>带action的tabs</h3>
<Tabs-tabs-with-action-demos />

```js
import { MIcon,MTabs,MTabsHead,MTabsBody,MTabsItem,MTabsPane } from 'minimalui'
export default {
  components: {
    "m-icon": MIcon,
    "m-tabs": MTabs,
    "m-tabs-head": MTabsHead,
    "m-tabs-item": MTabsItem,
    "m-tabs-body": MTabsBody,
    "m-tabs-pane": MTabsPane,
  },
  data() {
    return {
      selectedTab: "3",
    };
  },
  mounted() {},
};
```

```html
<m-tabs :selected="selectedTab">
    <m-tabs-head>
        <template slot="actions">
            <m-button>action</m-button>
        </template>
        <m-tabs-item name="1"> <m-icon name="setting"></m-icon>1</m-tabs-item>
        <m-tabs-item name="2" disabled>2</m-tabs-item>
        <m-tabs-item name="3">3</m-tabs-item>
    </m-tabs-head>
    <m-tabs-body>
        <m-tabs-pane name="1">pane1</m-tabs-pane>
        <m-tabs-pane name="2">pane2</m-tabs-pane>
        <m-tabs-pane name="3">pane3</m-tabs-pane>
    </m-tabs-body>
</m-tabs>
    
```
