<template>
  <div>
    <h2 v-if="type=='A'">100</h2>
    <h2 v-else-if="type=='B'">90</h2>
    <h2 v-else-if="type=='C'">80</h2>
    <h2 v-else>Other</h2>
    <hr>

    <h2 v-show="bRender">100</h2>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      type: 'D',
      bRender: false
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
