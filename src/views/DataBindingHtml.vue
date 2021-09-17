<template>
  <div>
    <div><h2>{{htmlString}}</h2></div>
    <h2 v-html="htmlString"></h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      htmlString: '<p style="color: red">This is a red string</p>'
    }
  }
}
</script>

<style scoped></style>
