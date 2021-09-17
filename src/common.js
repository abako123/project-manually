import { reactive, computed, toRefs } from 'vue'

const plusCalculator = () => {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2)
  })
  // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서는, state를 toRefs를 이용해서 return해 주어야 함
  return toRefs(state)
}

export { plusCalculator }
