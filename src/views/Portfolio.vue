<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <div class="filters">

		</div>
    <select v-model="select">
      <option value="" disabled selected>Filter by Category</option>
      <option :value="undefined">Show All</option>
      <option v-for="(category, index) in categories" :key="index" :value="category">{{category}}</option>
    </select>
    <div class="portfolio-container" >
      <cardcomp v-bind:portfoliolist="filterportfoliolist"/>
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
      //currentFilter: 'ALL',
      title: 'Portfolio',
      select: "",
      categories: ["UI/UX", "Test2", "Test3"],
       portfoliolist:[
      {
        productTitle:"Columbia Fishing Landing Page",
        image       : require('../assets/images/academy-mock-landing-1-540x440.jpg'),
        category: 'UI/UX',
        date: "2013",
        description: "This was a design for a Columbia landing page. It was meant to be a starting point to explore the product line. ",
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/images/iPad-in-Hand-Mockup-540x440.jpg'),
        category: 'UI/UX',
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/images/academy-mock-landing-3-540x440.jpg'),
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
    };
  },
   computed: {
    filterportfoliolist: function() {
      let filtered = this.portfoliolist;
      if (this.select) {
        filtered = this.portfoliolist.filter(
          c => c.category.toLowerCase() === this.select.toLowerCase()
        );
      }
      return filtered;
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  },
  setFilter: function(filter) {
			this.currentFilter = filter;
    }
  }
}
</script>

<style>
.portfolio-container > div {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
  grid-column-gap: 26px;
  grid-row-gap: 40px;
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