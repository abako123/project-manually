<template>
<div>
  <input type="text" v-model="lastName" />
  <input type="text" v-model="firstName" />
  <h2>Hello, {{ fullName }}</h2>
  <h2>Hello, {{ fullName }}</h2>
  <h2>Hello, {{ fullName }}</h2>
  <hr>

  <input type="text" v-model.number="x1">
  <input type="text" v-model.number="x2">
  <!-- <button @click="plusNumber">연산</button> -->
  =
  <input type="text" v-model="y">
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      firstName: '찬희',
      lastName: '이',
      // fullName
      x1: 0,
      x2: 0
      // y: 0
    }
  },
  computed: {
    fullName () {
      return this.lastName + ' ' + this.firstName
    },
    y () {
      return this.x1 + this.x2
    }
  },
  // watch: {
  //   x1 () {
  //     this.y = this.x1 + this.x2
  //   },
  //   x2 () {
  //     this.y = this.x1 + this.x2
  //   }
  // },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
