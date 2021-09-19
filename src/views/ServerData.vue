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
import axios from 'axios'

export default {
  data () {
    return {
      productList: []
    }
  },
  methods: {
    async getProductList () {
      this.productList = await this.api('https://f397393b-a0b6-4a06-977e-f625f4db658c.mock.pstmn.io/productList', 'get', {})
      console.log(this.productList)
    },
    async api (url, method, data) {
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
