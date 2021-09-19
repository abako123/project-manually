<template>
  <div>
    <hr>
    <input type="text" v-model="userInfo.name">
    <br>
    <input type="text" v-model.number="userInfo.age">
    <br>
    <input type="text" v-model="userInfo.job">
    <br>
    <button @click="saveUserInfo2">저장</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 그룹별로 묶으면 처음에는 번거롭지만, 데이터가 많아질수록 관리하기가 편하다.
      userInfo: {
        name: '',
        age: 0,
        job: ''
      }
    }
  },
  methods: {
    saveUserInfo2 () {
      if (this.userInfo.name === '') {
        // return alert('사용자 이름을 입력하세요.')
        // return this.$swal('사용자 이름을 입력하세요.')
        return this.$swal({
          title: '사용자 이름을 입력하세요.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      if (this.userInfo.age === 0 || this.userInfo.age === '') {
        // return alert('나이를 입력하세요.')
        return this.$swal({
          title: '나이를 입력하세요.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      const r = this.saveData(this.userInfo)
      if (r === 'S') {
        // alert('사용자 정보가 생성되었습니다.')
        return this.$swal({
          title: '사용자 정보가 생성되었습니다.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    },
    saveData (params) {
      console.log(params)
      const r = 'S'
      return r
    }
  }
}
</script>

<style scoped>
div {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
