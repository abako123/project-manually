<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <hr>

    <label for="">
      <input type="checkbox" value="서울" v-model="checked">
      서울
    </label>
    <label for="">
      <input type="checkbox" value="부산" v-model="checked">
      부산
    </label>
    <label for="">
      <input type="checkbox" value="제주" v-model="checked">
      제주
    </label>
    <br>
    <span>체크한 지역: {{ checked }}</span>
    <hr>

    <label for="">
      <input type="radio" v-bind:value="radio[0]" v-model="picked">
      서울
    </label>
    <label for="">
      <input type="radio" v-bind:value="radio[1]" v-model="picked">
      부산
    </label>
    <label for="">
      <input type="radio" v-bind:value="radio[2]" v-model="picked">
      제주
    </label>
    <br>
    <span>선택한 지역: {{ picked }}</span>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      city: '21',
      checked: [],
      radio: ['서울3', '부산3', '제주3'],
      radio1: '서울2',
      radio2: '부산2',
      radio3: '제주2',
      picked: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
