<template>
  <div>
    <div class="row">
      <m-input v-model="message1"></m-input>
      {{ message1 }}
    </div>
    <div class="row">
      <m-input :value="message2" readonly></m-input>
    </div>
    <div class="row">
      <m-input :value="message3" disabled></m-input>
    </div>
    <div class="row">
      <m-input :value="message4" error="你错了"></m-input>
    </div>
  </div>
</template>
<script>
import MInput from "../../../../src/component/input/input";
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
};
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 8px;
}
</style>