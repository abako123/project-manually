<template>
  <div>
    <button @click="addCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
    <hr>

    <button @click="one(), two()">Alert 2</button>
    <hr>

    <select v-model="city" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <hr>

    <input type="text" v-model="textValue" @keyup.enter="showValue" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      counter: 0,
      city: '',
      textValue: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    addCounter () {
      this.counter = this.counter + 1
    },
    one () {
      alert('One')
    },
    two () {
      alert('Two')
    },
    changeSelect () {
      alert(this.city)
    },
    showValue () {
      // keyup.enter, .tab, .delete, .esc, .space, .up, .down, .left, .right
      alert(this.textValue)
    }
  }
}
</script>

<style scoped>
</style>
