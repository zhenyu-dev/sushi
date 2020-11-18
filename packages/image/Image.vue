<script>
import { observe } from "./intersectionObserver";
import { toBase64 } from "./toBase64";

export default {
  name: "VImage",
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: "",
      required: true,
    },
    isLazy: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: "intrinsic",
    },
    objectFit: {
      type: String,
      default: "fill",
    },
    objectPosition: {
      type: String,
      default: "50% 50%",
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    imgStyle() {
      return {
        visibility: this.isVisible ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

        boxSizing: "border-box",
        padding: 0,
        border: "none",
        margin: "auto",

        display: "block",
        width: 0,
        height: 0,
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",

        objectFit: this.objectFit,
        objectPosition: this.objectPosition,
      };
    },
    wrapperStype() {
      switch (this.layout) {
        case "intrinsic": {
          return {
            display: "inline-block",
            maxWidth: "100%",
            overflow: "hidden",
            position: "relative",
            boxSizing: "border-box",
            margin: 0,
          };
        }
        case "responsive": {
          return {
            display: "block",
            overflow: "hidden",
            position: "relative",

            boxSizing: "border-box",
            margin: 0,
          };
        }
        case "fixed": {
          return {
            overflow: "hidden",
            boxSizing: "border-box",
            display: "inline-block",
            position: "relative",
            width: this.width + "px",
            height: this.height + "px",
          };
        }
        case "fill": {
          return {
            display: "block",
            overflow: "hidden",
            position: "relative",
            // position: "absolute",
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right: 0,
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            margin: 0,
          };
        }
        default: {
          return undefined;
        }
      }
    },
    sizerStyle() {
      switch (this.layout) {
        case "intrinsic": {
          return {
            boxSizing: "border-box",
            display: "block",
            maxWidth: "100%",
          };
        }
        case "responsive": {
          const quotient = this.height / this.width;
          const paddingTop = isNaN(quotient) ? "100%" : `${quotient * 100}%`;
          return {
            display: "block",
            boxSizing: "border-box",
            paddingTop,
          };
        }
        default: {
          return undefined;
        }
      }
    },
    sizerSvg() {
      return this.layout === "intrinsic"
        ? `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`
        : undefined;
    },
  },
  mounted() {
    if (this.isLazy) {
      this.lazyLoadImage();
    } else [(this.isVisible = true)];
  },
  methods: {
    lazyLoadImage() {
      const options = {};
      const unobserve = observe(
        this.$refs.image,
        () => {
          this.isVisible = true;
          unobserve();
        },
        options
      );
    },
  },
  render(h) {
    return h(
      "div",
      {
        style: this.wrapperStype,
      },
      [
        this.sizerStyle &&
          h(
            "div",
            {
              style: this.sizerStyle,
            },
            [
              this.sizerSvg &&
                h("img", {
                  style: {
                    maxWidth: "100%",
                    display: "block",
                  },
                  attrs: {
                    src: `data:image/svg+xml;base64,${toBase64(this.sizerSvg)}`,
                  },
                }),
            ]
          ),
        h("img", {
          ref: "image",
          style: this.imgStyle,
          attrs: {
            src: this.isVisible || !this.isLazy ? this.src : "",
          },
          domProps: this.$attrs
        }),
      ]
    );
  },
};
</script>
