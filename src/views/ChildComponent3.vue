<template>
<div>
  <button @click="sendFromChild">Button at Child2</button>
  <button @click="changeData">changeData at Child</button>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      msg: '자식 컴포넌트로 부터 보내는 메시지'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    sendFromChild () {
      this.$emit('send-message', this.msg)
    },
    changeData () {
      this.msg = '자식이 바꾼 메시지'
    }
  }
}
</script>

<style scoped>
</style>
