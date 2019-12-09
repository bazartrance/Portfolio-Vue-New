<template>
  <div id="app">
    <div class="grid-container">
     <div class="nav-container"> 
    <div class="nav" id="nav">
      <div class="logo"> <img alt="Brandon Bazar logo" src="./assets/bb-logo.png"></div>
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

@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #00212E;
}

#nav {
  padding: 30px;

  a {
    font-weight: 600;
    color: #ffffff;

    &.router-link-exact-active {
      color: #FF8300;
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
font-family: 'Bebas Neue', sans-serif;
color:#ffffff;
font-size: 1.33em;
padding: 30px;
margin-left: 0;
margin-right: 0;
z-index: 100;
background-color: #02242D;
display: grid;
grid-template-columns: 215px 1fr 100px;
grid-template-areas: "logo links contacts";
}

.links {
 grid-area: links;
 padding-top: 9px;
}

.logo {
  grid-area: logo;
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
