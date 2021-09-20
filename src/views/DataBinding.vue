<template>
<div>
  <h2>{{sampleData}}</h2>
  <div>{{sampleData2}}</div>
  <input type="text" v-focus />
</div>
</template>

<script>
export default {
  data () {
    return {
      sampleData: 'Hello',
      sampleData2: 'World!'
    }
  }
}
</script>

<style scoped></style>
