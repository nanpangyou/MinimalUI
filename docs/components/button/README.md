---
title: Button
---

# Button

示例

<ClientOnly>
  <Button-button-demos/>
</ClientOnly>

---

``` js
import MButton from "minimalui";
export default {
  data() {
    return {
      isLoading: true;
    };
  },
  components: {
    "m-button": MButton,
  },
};
```

``` html
<m-button>默认按钮</m-button>
<m-button name="setting">带图标按钮</m-button>
<m-button name="setting" iconPosition="right">图标在右侧按钮</m-button>
<m-button :loading="isLoading" @click="isLoading = !isLoading">点击加载</m-button>
```