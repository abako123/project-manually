<template>
<div>
  <div>likes: {{likes}}</div>
  <div>isOk: {{isOk}}</div>
  <div>author name: {{author.name}}</div>
</div>
</template>

<script>
export default {
  name: '',
  // props에는 부모 컴포넌트로부터 전달받은 데이터가 저장됨
  props: {
    likes: {
      // 저장될 데이터의 타입 Number
      type: Number,
      // 부모 컴포넌트로부터 데이터가 전달되지 않았을 때, 기본으로 적용!
      default: 0
    },
    isOk: {
      // 저장될 데이터의 타입 Boolean
      type: Boolean,
      default: false
    },
    commentIds: {
      // 저장될 데이터의 타입 Array[배열]
      type: Array
    },
    author: {
      // 저장될 데이터의 타입 Object(객체, 물체, 목적, 목표)
      type: Object
    }
  },
  mounted () {
    console.log(this.commentIds)
  }
}
</script>

<style scoped></style>
