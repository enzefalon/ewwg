<script>
export default {
  components: {},
  props: {
    contentHeadline: {
      type: String,
      default: ""
    },
    typeHeadline: {
      type: String,
      default: "h1"
    },
    elemclass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render: function(createElement) {
    return createElement(
      this.typeHeadline,
      {
        class: this.elemclass
      },
      this.contentHeadline
    );
  },
  name: "HeadLine"
};
</script>

<style lang="scss">
</style>
