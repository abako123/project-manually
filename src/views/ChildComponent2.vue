<template>
  <div>
    <button @click="childFunc" ref="child_btn">Button at Child</button>
    <br>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      msg: '자식에 있던 메시지'
    }
  },
  computed: {},
  setup (props) {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    childFunc () {
      alert('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>

<style scoped></style>
