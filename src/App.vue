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

    <br />

    <s-view>
      <s-left>
        <span class="title">title</span>
      </s-left>
      <s-center>
        <span class="content">content</span>
      </s-center>
      <s-right class="s_right">
        <span class="arrow">arrow</span>
      </s-right>
    </s-view>
  </div>
</template>

<script>
import Row from "@/components/Row.vue";
import Column from "@/components/Column.vue";
import View from "@/components/View.vue";
import Left from "@/components/Left.vue";
import Center from "@/components/Center.vue";
import Right from "@/components/Right.vue";
export default {
  name: "app",
  components: {
    Row,
    Column,
    "s-view": View,
    "s-left": Left,
    "s-center": Center,
    "s-right": Right
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
.title {
  display: inline-block;
  height: 50px;
  background-color: #ffd98e;
}
.content {
  display: inline-block;
  background-color: #ffb677;
}
.arrow {
  display: inline-block;
  background-color: #ff8364;
}
</style>
