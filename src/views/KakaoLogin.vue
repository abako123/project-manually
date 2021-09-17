<template>
  <div>
    <a id='custom-login-btn' @click='kakaoLogin()'>
      <img
        src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
        width='222'
      />
    </a>
    <br>
    <button type='button' @click='kakaoLogout'>카카오 로그아웃</button>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  components: {},
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    // Kakao.init('c2875030d590c5acc4f04aa15597bab4');
    // Kakao.isInitialized();
    this.kakaoLogout()
  },
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const KakaoAccount = res.KakaoAccount
          // const nickname = KakaoAccount.profile.nickname
          // const email = KakaoAccount.email

          // console.log('nickname', nickname)
          // console.log('email', email)
          // 로그인 처리 구현

          console.log(KakaoAccount)
          this.$store.commit('user', KakaoAccount)

          alert('로그인 성공!')
        },
        fail: (error) => {
          // this.$router.push('/errorPage');
          console.log(error)
        }
      })
    },
    kakaoLogout () {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.')
        return
      }

      window.Kakao.Auth.logout((response) => {
        // 로그아웃
        console.log('access token:', window.Kakao.Auth.getAccessToken())
        console.log('log out:', response)
      })
    }
  }
}
</script>
