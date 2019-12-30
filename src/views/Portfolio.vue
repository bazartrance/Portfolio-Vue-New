<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <div class="filters">
			<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Test1' }" v-on:click="setFilter('Test1')">Test1</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Test2' }" v-on:click="setFilter('Test2')">Test2</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Test3' }" v-on:click="setFilter('Test3')">Test3</span>
		</div>

    <div class="portfolio-container" >
      <cardcomp v-if="currentFilter === portfoliolist.category || currentFilter === 'ALL'" v-bind:portfoliolist="portfoliolist"/>
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
      currentFilter: 'ALL',
      title: 'Portfolio',
       portfoliolist:[
      {
        productTitle:"ABCN",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test1',
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test2',
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test3',
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test3',
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test1',
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'Test2',
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

.filter {
	padding: 6px 6px;
	cursor:pointer;
	border-radius: 6px;
	transition: all 0.35s;
}

.filter.active {
	box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
	background:lightgray;
} 


.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}
</style>