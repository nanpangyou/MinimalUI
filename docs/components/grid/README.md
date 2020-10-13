# Grid

示例: 

<Grid-grid-demos />
```js
import { MRow, MCol } from "minimalui";
export default {
  components: {
    "m-row": MRow,
    "m-col": MCol,
  },
};
```


```html
<m-row>
    <m-col :span="12" :xs="{ span: 24 }" class="col-demo"
        >1</m-col
    >
    <m-col :span="12" :xs="{ span: 24 }" class="col-demo"
        >2</m-col
    >
</m-row>
<m-row>
    <m-col
        :span="8"
        :xs="{ span: 24 }"
        :sm="{ span: 5 }"
        :md="{ span: 8 }"
        :lg="{ span: 10 }"
        class="col-demo"
    >
        1
    </m-col>
    <m-col
        :span="8"
        :xs="{ span: 24 }"
        :sm="{ span: 9 }"
        :md="{ span: 8 }"
        :lg="{ span: 7 }"
        class="col-demo"
        >2</m-col
    >
    <m-col
        :span="8"
        :xs="{ span: 24 }"
        :sm="{ span: 10 }"
        :md="{ span: 8 }"
        :lg="{ span: 7 }"
        class="col-demo"
        >3</m-col
    >
</m-row>
<m-row>
    <m-col :span="1" class="col-demo">1</m-col>
    <m-col :span="3" :offset="20" class="col-demo">2</m-col>
</m-row>
<m-row>
    <m-col :span="8">1</m-col>
    <m-col :span="8">2</m-col>
    <m-col :span="8">3</m-col>
</m-row>
```

<Grid-grid-with-gutter-demos />
```js
import { MRow, MCol } from "minimalui";
export default {
  components: {
    "m-row": MRow,
    "m-col": MCol,
  },
};
```

```html
<div class="box">
      <m-row :gutter="20">
        <m-col :span="8">1</m-col>
        <m-col :span="8">2</m-col>
        <m-col :span="8">3</m-col>
      </m-row>
      <m-row :gutter="20" align="center">
        <m-col :span="4">1</m-col>
        <m-col :span="4">2</m-col>
        <m-col :span="4">3</m-col>
      </m-row>
      <m-row :gutter="20" align="right">
        <m-col :span="3">1</m-col>
        <m-col :span="4">2</m-col>
        <m-col :span="2" :offset="3">3</m-col>
        <m-col :span="3">4</m-col>
      </m-row>
    </div>
```