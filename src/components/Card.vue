<template>
<div> 
  <!--
    <div v-for="(data,index) in portfoliolist" :key="index">
        <img :src="data.image">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div> -->

<div v-for="(data,index) in portfoliolist" :key="index" class="card" >
<div class="thumb" v-bind:style="{ backgroundImage: 'url(' + data.image + ')' }"></div>
<div class="infos">
<h2 class="title">{{data.productTitle}}<span class="flag">{{data.category}}</span></h2>
<h3 class="date">{{data.date}}</h3>
<p class="txt">
{{data.description}}
</p>
<h3 class="details">see more details</h3>
</div>
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

<style lang="scss">
$big-stone:#152536;
$white:#fff;
$smalt-blue:#4e958b;
$maroon-flush:#C32361;
$black:#000;
$lite-grey:rgba($black, .2);
$lite-big-stone:rgba($big-stone, .7);

$card-width:350px;
$card-height:350px;

$thumb-height:270px;

$border-radius:8px;
$box-shadow:0 1px 10px rgba($black, .3);
$transition: cubic-bezier(.17,.67,.5,1.03);
$timing-1:.4s .15s;
$timing-2:.5s .25s;

@mixin pos($pos, $left:null, $top:null, $right:null, $bottom:null) {
	position:$pos;
	left:$left;
	@if $top { top: $top; }
	@if $left { left: $left; }
	@if $right { right: $right; }
	@if $bottom { bottom: $bottom; }
}

@mixin size($width, $height) {
	width:$width;
	height:$height;
}

* {
	box-sizing:border-box;
}

html, body {
	font-size: 100%;
}
body {
	padding:0;
	margin:0;
	background:$big-stone;
}

a[href] {
	position:relative;
	&, &:link, &:visited, &:active {
		text-decoration: none;
		color:lighten($maroon-flush, 5);
		text-shadow: 2px 2px 2px darken($big-stone, 10);
		padding-bottom:3px;
		font-weight: bold;
	}
	&::after {
		content:"";
		@include pos(absolute, $left:0, $bottom:0);
		background:$white;
		@include size(0, 1px);
		transition:.35s $transition;
	}
	&:hover::after {
		width:100%;
		box-shadow:$box-shadow;
	}
}

h3 {
  margin: 0px;
}

.card {
  //@include pos(absolute, 10%, 10%);
  max-width: 375px;
  min-width: 200px;
  height: 350px;
	//@include size($card-width, $card-height);
	//transform:translate(-50%, -50%) translateZ(0);
	border-radius:$border-radius;
	box-shadow:$box-shadow;
	overflow:hidden;
	.thumb {
		@include size(auto, $thumb-height);
	//	background: url($new-york-city) no-repeat center;  :src="data.image"
		background-size:cover;
    background-position: center center;
		
	}
	.infos {
		@include size(auto, $card-height);
		position:relative;
		padding:14px 24px;
		background:$white;
		transition:$timing-1 $transition;
		.title {
			position:relative;
			margin: 10px 0;
			letter-spacing: 1px;
			color:$big-stone;
			font-size: 1rem;
			text-transform: uppercase;
			text-shadow: 0 0 0px lighten($big-stone, 20);
		}
		.flag {
			@include pos(absolute, $top:50%, $right: 0);
			transform:translateY(-50%);
			@include size(35px, 23px);
			background-size:100% auto;
			display:inline-block;
		}
		.date, .seats {
			margin-bottom: 10px;
			text-transform: uppercase;
			font-size: .85rem;
			color:$lite-big-stone;
		}
		.seats {
			display:inline-block;
			margin-bottom: 24px;
			padding-bottom:24px;
			border-bottom:1px solid $lite-grey;
			opacity:0;
			transition:$timing-2 $transition;
		}
		.txt {
			line-height: 2;
			font-size: .95rem;
			color:$lite-big-stone;
			opacity:0;
			transition:$timing-2 $transition;
		}
		.details {
			@include pos(absolute, $left:0, $bottom:0);
			margin: 10px 0;
			padding:20px 24px;
			letter-spacing: 1px;
			color:$smalt-blue;
			font-size: .9rem;
			text-transform: uppercase;
			cursor:pointer;
			opacity:0;
			transition:$timing-2 $transition;
		}
	}
	&:hover .infos {
		transform:translateY(-$thumb-height);
		.seats, .txt, .details {
			opacity:1;
		}
	}
}
</style>