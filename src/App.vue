<template>
  <div class="homeBackgroundImage">
    <div class="wrapper">
      <Header name="Nicklas Spendler Christensen"/>
      <h1>Hello World</h1>
    </div>
  </div>
  <div class="wrapper">
    <CV/>
  </div>
</template>

<script>
import Header from './components/Header';
import CV from './components/CV.vue';

export default {
  name: 'App',
  components: {
    Header,
    CV
  }
}
</script>

<style>
  body{
    margin: 0;
  }

  .wrapper{
    margin: 0 14%;
  }
  li{
    list-style: none;
  }
  .homeBackgroundImage{
    background-image: url("G:\programering\portfolio\portfolio\src\assets\homeImage.jpg");
    height: 100vh;
    background-size: cover;
    color: white;
  }
</style>
