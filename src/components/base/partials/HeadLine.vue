<script>
export default {
  components: {},
  props: {
    content: {
      type: String,
      default: ""
    },
    type: {
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
      this.type,
      {
        class: this.elemclass
      },
      this.content
    );
  },
  name: "HeadLine"
};
</script>

<style lang="scss">
</style>
