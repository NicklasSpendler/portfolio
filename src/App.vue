<template>
  <div class="homeBackgroundImage">
    <HeaderComp name="Nicklas Spendler Christensen"/>
  </div>
  <div class="wrapper">
    <CV/>
    <br>
    <br>
    <br>
    <br>
    <Kompetencer/>
    <br>
    <Projekter/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import CV from './components/CV.vue';
import Kompetencer from './components/Kompetencer.vue';
import Projekter from './components/projekter.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    CV,
    Kompetencer,
    Projekter
  }
}
</script>

<style>
  html {
    color: #222;
    line-height: 1.4;
  }

  body{
    margin: 0;
    background-color: #38383D;
  }

  a, h1, h2, h3, h4, h5, p, span, button, label, div, li {
    font-family: 'poppins', sans-serif;
    letter-spacing: 2px;
    color: white;
  }

  ul{
    padding: 0;
  }
  li{
    list-style: none;
  }

  .wrapper{
    margin: 0 14%;
  }

  .homeBackgroundImage{
    background-image: url("./assets/homepageImage.jpg");
    height: 100vh;
    background-size: cover;
    color: white;
  }
  .componentHeader{
      text-align: center;
      font-size: 3rem;
  }
</style>
