# Collapse

示例:

<ClientOnly>
  <Collapse-collapse-demos />
</ClientOnly>


---


```js
import { MCollapse, MCollapseItem } from "minimalui";
export default {
  data() {
    return {
      selectedArr: ["1", "2"],
    };
  },
  components: {
    "m-collapse": MCollapse,
    "m-collapse-item": MCollapseItem,
  },
  mounted() {},
};
```


```html
<div>
    <m-collapse :selected.sync="selectedArr">
      <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
      <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
      <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
    </m-collapse>
    {{ selectedArr }}
  </div>
```

---




<ClientOnly>
  <h3 style='margin-bottom: 3em;'>支持single</h3>
  <Collapse-collapse-with-single-demos />
</ClientOnly>


---


```js
import { MCollapse, MCollapseItem } from "minimalui";
export default {
  data() {
    return {
      selectedArr: ["1"],
    };
  },
  components: {
    "m-collapse": MCollapse,
    "m-collapse-item": MCollapseItem,
  },
  mounted() {},
};
```


```html
<div>
    <m-collapse :selected.sync="selectedArr" single>
      <m-collapse-item title="标题1" name="1">内容1</m-collapse-item>
      <m-collapse-item title="标题2" name="2">内容2</m-collapse-item>
      <m-collapse-item title="标题3" name="3">内容3</m-collapse-item>
    </m-collapse>
    {{ selectedArr }}
  </div>
```