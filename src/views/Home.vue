<template>

    <div class="video">
     <!--<video autoplay controls><source src="../assets/videos/portfolio-brandon-bazar.mp4" type="video/mp4"></video>-->
      <iframe src="https://www.youtube.com/embed/sdgBQhwuo9c?autoplay=1&mute=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  

  </div>
</template>

<script>



export default {
  name: 'home',
  components: {

  }
}


</script>
<style scoped>
.video {

  /*
  min-width: 100%; 
  min-height: 100%; 
  width: auto;
  height: auto;

  /* Center the video 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
    position: relative;
    padding-bottom: 56.25%; /* 16:9 
    padding-top: 25px;
    height: 0;*/
    position: absolute;
  top: 0;
  left: 0;
  padding-top: 50%;
  width: 100%;
}

.video video {
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none; 
}

.video iframe {
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none; 
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}
 
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


</style>
