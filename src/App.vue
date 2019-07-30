<template>
  <div id="app" class="p-20">
    <div class="h-64 overflow-y-scroll">
      <ss-table :headers="headers" :items="items" fixed-header />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table/index";
import items from "@/components/Table/data.json";

export default {
  name: "app",
  components: {
    [Table.name]: Table
  },
  data() {
    return {
      headers: [
        {
          text: "#",
          value: "id",
          align: "right"
        },
        {
          text: "代码",
          value: "code",
          align: "right"
        },
        {
          text: "公司",
          value: "company",
          align: "left"
        },
        {
          text: "行业",
          value: "industry",
          align: "left"
        },
        {
          text: "PE-TTM",
          value: "PE-TTM",
          align: "right"
        },
        {
          text: "股价",
          value: "current",
          align: "right"
        },
        {
          text: "市值 (亿)",
          value: "total",
          align: "right"
        },
        {
          text: "上市时间",
          value: "date",
          align: "left"
        },
        {
          text: "基本每股收益 (%)",
          value: "sy",
          align: "right"
        },
        {
          text: "关注度",
          value: "focus",
          align: "right"
        }
      ],
      items
    };
  }
};
</script>