<template>
  <div id="app" class="p-20">
    <div class>
      <ss-table :headers="headers" :items="items" fixed-header :scroll-y="'500px'" />
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
          align: "right",
          width: "60px"
        },
        {
          text: "代码",
          value: "code",
          align: "right",
          width: "60px",
          width: "120px"
        },
        {
          text: "公司",
          value: "company",
          align: "left",
          width: "120px"
        },
        {
          text: "行业",
          value: "industry",
          align: "left",
          width: "160px"
        },
        {
          text: "PE-TTM",
          value: "PE-TTM",
          align: "right",
          width: "120px"
        },
        {
          text: "股价",
          value: "current",
          align: "right",
          width: "120px"
        },
        {
          text: "市值 (亿)",
          value: "total",
          align: "right",
          width: "120px"
        },
        {
          text: "上市时间",
          value: "date",
          align: "left",
          width: "150px"
        },
        {
          text: "基本每股收益 (%)",
          value: "sy",
          align: "right",
          width: "180px"
        },
        {
          text: "关注度",
          value: "focus",
          align: "right",
          width: "100px"
        }
      ],
      items
    };
  }
};
</script>