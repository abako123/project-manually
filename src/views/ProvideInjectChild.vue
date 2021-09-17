<template>
<div>
  <div>Item Length: {{ this.itemLength }}</div>
  <div>Items: {{ this.items }}</div>
</div>
</template>
<script>
export default {
  inject: ['itemLength', 'items']
}
</script>
