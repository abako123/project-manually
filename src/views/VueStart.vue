<template>
  <div>
    <PageTitle :title="title" />
    <ChildComponent1 :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author" />
    <hr>
    <button @click="callChildFunc">Click at Parent</button>
    <br>
    <h2>{{parentMsg}}</h2>
    <button @click="showData">Button of Parent</button>
    <br>
    <ChildComponent2 ref="child_component" @send-message="sendMessage" />
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2'

export default {
  components: { PageTitle, ChildComponent1, ChildComponent2 },
  data () {
    return {
      title: '부모 컴포넌트에서 자식 컴포넌트로 페이지 타이틀 전달',
      likes: 23,
      isOk: true,
      commentIds: [1, 5, 2, 3],
      author: { name: 'Abako', company: 'AmsanDoctor' },
      parentMsg: ''
    }
  },
  computed: {
    msg () {
      return this.$refs.child_component.msg
    }
  },
  methods: {
    // callChildFunc () {
    //   // this.$refs.child_component.$refs.child_btn.click()
    //   // this.$refs.child_component.childFunc()
    //   this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 메시지'
    // },
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

<style scoped></style>
