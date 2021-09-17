<template>
  <div>
    <button @click="childFunc" ref="child_btn">Click at Child</button>
    <br>
    <button @click="sendFromChild">Click at Child2</button>
    <br>
    <button @click="changeData">changeData at Child</button>
    <hr>
    <!-- <h2>{{msg}}</h2> -->
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      msg: '자식이 보낸 메시지'
    }
  },
  computed: {},
  setup (props) {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    // childFunc () {
    //   alert('부모 컴포넌트에서 직접 발생시킨 이벤트')
    // }
    sendFromChild () {
      this.$emit('send-message', this.msg)
    },
    changeData () {
      this.msg = '자식이 바꾼 메시지'
    }
  }
}
</script>

<style scoped></style>
