<template>
<div>
  <page-title :title="title"/>
  <child-component-1 :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" />
</div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent1 from './ChildComponent1.vue'

export default {
  name: '',
  components: { PageTitle, ChildComponent1 },
  data () {
    return {
      title: '부모 컴포넌트에서 전송할 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1, 5, 2, 3],
      author: { name: '이찬희', company: 'abako' }
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
