<template>
  <div>
    <h1>Cart: {{ cartCount }}</h1>
    <h1>Cart - product A: {{ productACount }}</h1>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    },
    cartCount () {
      return this.$store.getters.cartCount
    },
    productACount () {
      return this.$store.getters.productACount
    }
  },
  methods: {
    increment () {
      // $store -> store>index.js, commit -> index.js의 mutations에 접근을 허락
      // ('increment') -> mutations의 increment() 함수를 호출
      this.$store.commit('increment')
    }
  }
}
</script>
