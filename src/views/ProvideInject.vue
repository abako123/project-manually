<template>
  <div>
    <!-- <ProvideInjectChild :itemLength="this.items.length" /> -->
    <ProvideInjectChild />
  </div>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild'

export default {
  components: { ProvideInjectChild },
  data () {
    return {
      items: ['A', 'B']
    }
  },
  provide () {
    return {
      itemLength: this.items.length,
      items: this.items
    }
  }
}
</script>
