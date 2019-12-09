<template>
    <div class="nav">
      <div><img src="assets/images/BB-logo.png"></div>
      <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/contact">Contact</router-link> 
      </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    msg: String
  }
}
</script>