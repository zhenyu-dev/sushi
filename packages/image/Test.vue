<script>
import { observe } from "./intersectionObserver";

export default {
  name: "Test",
  data() {
    return {
      childVisible: false,
    };
  },
  mounted() {
    observe(
      this.$refs.child,
      () => {
        console.log("I am visible now...");
      },
      {
        root: this.$refs.parent,
      }
    );
  },
  render(h) {
    return h(
      "div",
      {
        ref: "parent",
        style: {
          width: "500px",
          height: "500px",
          background: "pink",
          position: "relative",
        },
      },
      [
        h("div", {
          ref: "child",
          style: {
            width: "200px",
            height: "200px",
            background: "black",
            position: "absolute",
            top: "0",
            left: this.childVisible ? "0" : "550px",
          },
        }),
        h(
          "button",
          {
            on: {
              click: () => {
                this.childVisible = !this.childVisible;
              },
            },
            style: {
              position: "absolute",
              top: "250px",
            },
          },
          "click me"
        ),
      ]
    );
  },
};
</script>