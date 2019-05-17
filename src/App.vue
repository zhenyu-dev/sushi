<template>
  <div id="app">
    <Row>
      <Column :span="3">
        <div class="square square1"></div>
      </Column>
      <Column>
        <div class="square square2"></div>
      </Column>
      <Column>
        <div class="square square3"></div>
      </Column>
    </Row>
  </div>
</template>

<script>
import Row from "@/components/Row.vue";
import Column from "@/components/Column.vue";
export default {
  name: "app",
  components: {
    Row,
    Column
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/grid.scss";

.square {
  height: 50px;
}
.square1 {
  background-color: #ffd98e;
}
.square2 {
  background-color: #ffb677;
}
.square3 {
  background-color: #ff8364;
}
</style>
