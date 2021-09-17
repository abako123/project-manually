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
import { reactive, computed, toRefs } from 'vue'

// plusCalculator = 외부 function
function plusCalculator () {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2)
  })
  // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서는, state를 toRefs를 이용해서 return해 주어야 함
  return toRefs(state)
}

export default {
  name: 'calculator',
  setup () {
    // 외부 function인 plusCalculator을 호출하여 num1, num2, result를 받아와서 const로 선언
    const { num1, num2, result } = plusCalculator()
    return {
      num1,
      num2,
      result
    }
  }
}
</script>
