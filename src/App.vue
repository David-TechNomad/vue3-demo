<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  padding:0;
  margin:0;
}
i{
  font-style: normal;
}
.lt{
  float:left
}
.gt{
  float:right;
}
.box::after{
  content:"";
  width:0;
  height: 0;
  display: block;
  clear: both;
}
</style>
