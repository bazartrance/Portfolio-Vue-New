<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <div class="portfolio-container" >
      <cardcomp v-bind:portfoliolist="portfoliolist"/>
    </div>
  </div>
</template>

<script>

import cardcomp from '../components/Card'

export default {
  components: {
    cardcomp
  },
  name: 'portfolio',
  data () {
    return {
      title: 'Portfolio',
       portfoliolist:[
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

<style>
.portfolio-container > div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 26px;
  margin: 30px;
}

.portfolio-container img {
  width: 100%;
  height: auto;
}
</style>