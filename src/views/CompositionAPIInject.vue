<template>
  <h3>{{title}}</h3>
</template>

<script>
// inject 추가
import { inject } from 'vue'

export default {
  setup () {
    // inject를 사용해서 provide에서 정의한 키(key)로 데이터를 전달 받음
    const title = inject('title')

    return { title }
  }
}
</script>
