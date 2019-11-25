<template>
  <div id="app">
    <div class="grid-container">
    <div class="nav" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <transition name="slide-fade">
    <router-view/>
    </transition>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(10px);
  opacity: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas: "nav" 
                       "body";
}

.nav-container {
  display: grid;
  grid-template-columns: 215px 1fr 100px;
  grid-template-areas: "logo" "links" "contacts";
}

.nav {
 background-color: black;
 opacity: .2;
}
</style>
