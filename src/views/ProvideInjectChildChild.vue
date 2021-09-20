<template>
<div>
  <div>Item Length: {{ this.itemLength }}</div>
  <div>Items: {{ this.items }}</div>
</div>
</template>
<script>
export default {
  // props: {
  //   itemLength: {
  //     type: Number,
  //     default: 0
  //   }
  // }
  inject: ['itemLength', 'items']
}
</script>
