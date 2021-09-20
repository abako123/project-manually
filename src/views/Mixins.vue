<template>
  <div>
    <button @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from '../api.js'
import MonitoringMixin from '../monitoring.js'

export default {
  name: '',
  // 니('../api.js') methods의 내용을 내 methods에 Mix해서 쓸거야!
  // mixins: [ApiMixin, MonitoringMixin], // 사용할 믹스인 파일을 배열로 등록
  mixins: [ApiMixin, MonitoringMixin],
  data () {
    return {
      productList: []
    }
  },
  mounted () {
    console.log('컴포넌트 mounted()')
  },
  unmounted () {
    console.log('컴포넌트 unmounted()')
  },
  methods: {
    async getProductList () {
      this.productList = await this.$api(
        'https://f397393b-a0b6-4a06-977e-f625f4db658c.mock.pstmn.io/productList',
        'get',
        {}
      )
      console.log(this.productList)
    }
    // '../api.js'의 methods가 이곳에 달라붙는다. 사실상 아래의 methods와 위의 methods를 섞어서 쓰는 효과이다!
    // async $callAPI (url, method, data) {
    //   return (await axios({
    //     method: method,
    //     url: url,
    //     data: data
    //   }).catch(e => {
    //     console.log(e)
    //   })).data
    // }
  }
}
</script>
