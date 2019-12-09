<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      title: 'Portfolio',
       products:[
      {
        productTitle:"ABCN",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        productId:6
      }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}
</script>