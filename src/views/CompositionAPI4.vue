<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1">
      <span> + </span>
      <input type="text" v-model.number="num2">
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
import { plusCalculator } from '../common.js'

export default {
  name: 'calculator',
  setup () {
    // 외부 function인 plusCalculator을 호출하여 num1, num2, result를 받아와서 const로 선언
    const { num1, num2, result } = plusCalculator()

    return {
      num1, num2, result
    }
  }
}
</script>
