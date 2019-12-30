<template>
  <div id="app">
    <div class="grid-container">
    <div class="nav" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/SearchPage">Contact</router-link>
    </div>
    <div class="body">
    <transition name="slide-fade">
    <router-view/>
    </transition>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #FF8300;
    }
  }
}

.grid-container {
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
}

.nav-container {
  display: grid;
  grid-template-columns: 215px 1fr 100px;
  grid-template-areas: "logo" "links" "contacts";
}

.nav {
grid-row: 1;
grid-column: span 3 / -1;
z-index: 100;
background-color: #00212E;
}

.body {
grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: span 3;
  z-index: 1;
}
</style>
