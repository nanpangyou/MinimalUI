<template>
  <div>
    <h1>Cascader</h1>
    <div class="box">
      <p>动态加载数据</p>
      <m-cascader
        :source.sync="city2"
        :selected.sync="selectedCity2"
        :loadData="loadData"
      />
    </div>
    <div class="box">
      <p>静态数据</p>
      <m-cascader :source.sync="city1" :selected.sync="selectedCity1" />
    </div>
  </div>
</template>
<script>
import city from "../../../../lib/city";
import MCascader from "../../../../src/components/cascader/cascader";
import MCascaderItem from "../../../../src/components/cascader/cascader-item";
function ajax(parentId = 0, success, fail) {
  const result = city.filter((i) => i.parent_id === parentId);
  const timeId = setTimeout(() => {
    result.map((node) => {
      city.filter((i) => i.parent_id === node.id).length
        ? (node.isLeaf = false)
        : (node.isLeaf = true);
    });
    success(result);
  }, 300);
  return timeId;
}
export default {
  data() {
    return {
      city,
      city1: [
        {
          name: "aaa",
          id: 1,
          isLeaf: false,
          children: [
            {
              name: "ddd",
              id: 4,
              isLeaf: false,
              children: [
                { name: "jjj", id: 10, isLeaf: true },
                { name: "kkk", id: 11, isLeaf: true },
                { name: "lll", id: 12, isLeaf: true },
              ],
            },
            {
              name: "eee",
              id: 5,
              isLeaf: false,
              children: [
                { name: "mmm", id: 13, isLeaf: true },
                { name: "nnn", id: 14, isLeaf: true },
                { name: "ooo", id: 15, isLeaf: true },
              ],
            },
            { name: "fff", id: 6, isLeaf: true },
          ],
        },
        {
          name: "bbb",
          id: 2,
          isLeaf: false,
          children: [
            { name: "ggg", id: 7, isLeaf: true },
            { name: "hhh", id: 8, isLeaf: true },
            { name: "iii", id: 9, isLeaf: true },
          ],
        },
        { name: "ccc", id: 3, isLeaf: true },
      ],
      selectedCity1: [],
      city2: [],
      selectedCity2: [],
    };
  },
  components: {
    "m-cascader": MCascader,
    "m-cascader-item": MCascaderItem,
  },
  mounted() {
    this.addData();
  },
  methods: {
    addData() {
      ajax(0, (data) => {
        this.city2 = data;
      });
    },
    loadData(selectedData, callback) {
      const { id } = selectedData;
      ajax(id, (data) => {
        callback(data);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>