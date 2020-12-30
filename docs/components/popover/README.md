# Popover

示例: 
<ClientOnly>
    <Popover-popover-demos />
</ClientOnly>


```js
import { MPopover, MButton } from 'minimalui';
export default {
  components: {
    "m-popover": MPopover,
    "m-button": MButton,
  },
  mounted() {},
};
```

```html
<div class="box">
    <h3>带close回调</h3>
    <div>
      <m-popover position="top">
        <m-button slot="reference">点击 top</m-button>
        <template slot-scope="{ close }">
          this is popover
          <m-button @click="close">关闭</m-button>
        </template>
      </m-popover>
    </div>
    <div>
      <h3>click触发</h3>
      <m-popover position="top">
        <m-button slot="reference">点击 top</m-button>
        this is popover
      </m-popover>

      <m-popover position="left">
        <m-button slot="reference">点击 left</m-button>
        <div>this is popover</div>
      </m-popover>

      <m-popover position="right">
        this is popover
        <m-button slot="reference">点击 right</m-button>
      </m-popover>

      <m-popover position="bottom">
        <m-button slot="reference">点击 bottom</m-button>
        <div>this is popover</div>
      </m-popover>
    </div>
    <div>
      <h3>hover触发</h3>
      <m-popover position="top" trigger="hover">
        <m-button slot="reference">hover top</m-button>
        this is popover
      </m-popover>

      <m-popover position="left" trigger="hover">
        <m-button slot="reference">hover left</m-button>
        <div>this is popover</div>
        this is popover
      </m-popover>

      <m-popover position="right" trigger="hover">
        <m-button slot="reference">hover right</m-button>
        this is popover
      </m-popover>

      <m-popover position="bottom" trigger="hover">
        <m-button slot="reference">hover bottom</m-button>
        <div>this is popover</div>
      </m-popover>
    </div>
  </div>
```
