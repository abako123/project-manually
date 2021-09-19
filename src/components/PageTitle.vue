<template>
<div>
  <h2 class="page-title">{{title}}</h2>
</div>
</template>

<script>
export default {
  // props에는 부모 컴포넌트로부터 전달받은 데이터가 저장됨
  props: {
    title: {
      // 저장될 데이터의 타입
      type: String,
      // 부모 컴포넌트로부터 데이터가 전달되지 않았을 때!
      default: '페이지 타이틀'
    }
  }
}
</script>

<style scoped>
.page-title {
  padding-left: 7px;
  border-left: 5px solid green;
  text-align: left;
}
</style>
