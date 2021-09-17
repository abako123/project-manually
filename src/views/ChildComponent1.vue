<template>
  <div>
    <div>likes: {{likes}}</div>
    <div>isOk: {{isOk}}</div>
    <div>author name: {{author.name}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    likes: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    commentIds: {
      type: Array
    },
    author: {
      type: Object
    }
  },
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  computed: {},
  setup (props) {},
  created () {},
  mounted () {
    console.log(this.commentIds)
  },
  unmounted () {},
  methods: {}
}
</script>

<style scoped></style>
