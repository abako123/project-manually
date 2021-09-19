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
  // props에는 부모 컴포넌트로부터 전달받은 데이터가 저장됨
  props: {
    likes: {
      // 저장될 데이터의 타입
      type: Number,
      // 부모 컴포넌트로부터 데이터가 전달되지 않았을 때!
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
