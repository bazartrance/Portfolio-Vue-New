<template>
  <div id="app">
    <div class="grid-container">
     <div class="nav-container"> 
    <div class="nav" id="nav">
      <div class="logo"> <img style="height: 46px;" alt="Brandon Bazar logo" src="./assets/bb-logo.svg"></div>
      <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/contact">Contact</router-link> 
      </div>
      <div class="contacts"> sddssdfdsfd</div>
    </div>
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

@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Oswald&display=swap');

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #636363;
  background-color: #f8f8f8;
}

#nav {
  padding: 30px;

  a {
    font-weight: 100;
    color: #ffffff;
    font-family: 'Oswald', sans-serif;

    &.router-link-exact-active {
      color: #8D81FF;
    }
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: "navi"
                       "body";
}

.nav-container {
  grid-area: navi;
  width: 100vw;
  overflow: hidden; 
  max-width:100%;
  z-index: 100;

}

.nav { 
font-family: 'Montser', sans-serif;
color:#ffffff;
font-size: 1.33em;
padding: 30px;
margin-left: 0;
margin-right: 0;
z-index: 100;
background-color: #2C2F3D;
display: grid;
grid-template-columns: 260px 1fr 100px;
grid-template-areas: "logo links contacts";
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
}

.links {
 grid-area: links;
 padding-top: 4px;
}

.logo {
  grid-area: logo;
  margin-top: -3px;
}

.contacts {
 grid-area: contacts;
}

.nav a {
  color: #ffffff;
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;

  
}

body {
font-family: 'Montserrat', sans-serif;
-webkit-font-smoothing: antialiased;
font-weight: 400;
line-height: 1.45;
margin: 0;
background-color: #f8f8f8;
}

.body {
grid-area: body;
}

p {margin-bottom: 1.25em;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 4.209em;
}

h2 {font-size: 3.157em;}

h3 {font-size: 2.369em;}

h4 {font-size: 1.777em;}

h5 {font-size: 1.333em;}



</style>
