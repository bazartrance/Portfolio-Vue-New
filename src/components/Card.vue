<template>
<div> 
    <div v-for="(data,index) in portfoliolist" :key="index">
        <img :src="data.image">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
      </div>
</template>

<script>

export default {
  name: 'cardcomp',
  components: 'cardcomp',
  props: {
    portfoliolist: {
      type: Array
    }
  },
 /* data() {
    return {
      title: 'cardcomp'
    }
  }*/
    methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
    }
}
</script>