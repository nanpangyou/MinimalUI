# Input

示例:
<ClientOnly>
  <Input-input-demos />
</ClientOnly>

---

```js
import { MInput } from "minimalui";
export default {
  data() {
    return {
      message1: "model",
      message2: "readonly",
      message3: "disabled",
      message4: "error",
    };
  },
  components: {
    "m-input": MInput,
  },
```


```html
<m-input v-model="message1"></m-input>{{message1}}
<m-input :value="message2" readonly></m-input>
<m-input :value="message3" disabled></m-input>
<m-input :value="message4" error="你错了"></m-input>
```