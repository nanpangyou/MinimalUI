---
title: Button Group
---

# Button Group

示例:

<Button-Group-button-group-demos />

---

```js
import { MButton, MbuttonGroup } from "minimalui";
export default {
  components: {
    "m-button": MButton,
    "m-button-group": MButtonGroup,
  },
};
```

```html
<m-button-group>
    <m-button name="left">上一页</m-button>
    <m-button>更多</m-button>
    <m-button name="right" icon-position="right">下一页</m-button>
</m-button-group>
```

