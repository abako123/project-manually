<template>
<div>
  <page-title :title="title"/>
  <child-component-1 :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" />
  <hr>

  <button @click="callChildFunc">Button at Parent</button>
  <child-component-2 ref="child_component" />
  <hr>

  <button @click="callChildFunc2">Button at Parent2</button>
  <hr>

  <button @click="callChildFunc3">Button at Parent3</button>
  <hr>

  <h2>{{ parentMsg }}</h2>
  <button @click="showData">부모 버튼</button>
  <child-component-3 @send-message="sendMessage" ref="child_component3" />

</div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent1 from './ChildComponent1.vue'
import ChildComponent2 from './ChildComponent2.vue'
import ChildComponent3 from './ChildComponent3.vue'

export default {
  name: '',
  components: {
    PageTitle,
    ChildComponent1,
    ChildComponent2,
    ChildComponent3
  },
  data () {
    return {
      title: '부모 컴포넌트에서 전송할 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1, 5, 2, 3],
      author: { name: '이찬희', company: 'abako' },
      parentMsg: ''
    }
  },
  computed: {
    msg () {
      return this.$refs.child_component3.msg
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    callChildFunc () {
      this.$refs.child_component.$refs.child_btn.click()
    },
    callChildFunc2 () {
      this.$refs.child_component.childFunc()
    },
    callChildFunc3 () {
      this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 메시지'
    },
    sendMessage (data) {
      // alert(data)
      this.parentMsg = data
    },
    showData () {
      alert(this.msg)
    }
  }
}
</script>

<style scoped>
</style>
