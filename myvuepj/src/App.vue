<template>
  <Top/>
  <Index/>
  <Info/>
</template>

<script>
import Top from './components/top.vue';
import Info from './components/info.vue';
import Index from './components/index.vue';
// import $ from 'jquery';

export default {
  name: 'App',
  components: {
    Top : Top,
    Info : Info,
    Index : Index,
  }
}
</script>

<style>
/* 폰트 */
@font-face {
    font-family: asd;
    src: url(../src/assets/font/CircularStd-Book.1f2c8f7.woff2);
}
@font-face{
    font-family: sdf;
    src: url(../src/assets/font/Hatton-Light.a83de3f.woff2);
}
@font-face{
    font-family: dfg;
    src: url(../src/assets/font/Hatton-Regular.9256132.woff2);
}
html{
    font-size: 1vw
}
html, body,ul{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6,ul,ol,li,p,dl,dt,dd{
  list-style: none;
  padding: 0;
  margin: 0;
}
body a{
    text-decoration: none;
    color: #000;
}

/* 파랑글씨 클래스 */
.blue{
    color : #5e8cff;
    font-weight: bold;
}

</style>
