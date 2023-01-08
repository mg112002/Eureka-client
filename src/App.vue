<template>
  <el-container>
    <el-header><NavBar/></el-header>
    <el-container class="content">
      <SideBar />
      <el-main :class="isAuthenticated?'container-auth':'container'"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue';

export default {
  name: 'EurekaApp',
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.el-header{
  padding:0;
  display: block;
}
.container{
  padding: 0;
  height: 100%;
}
.container-auth{
  padding: 0;
  height: 100%;
}
.content{
  position: relative;
  overflow: auto;
}
@media only screen and (max-width: 1225px) {
  .container-auth{
    margin-top: 5%;
  }
}
@media only screen and (max-width: 710px) {
  .container {
    margin-top: 0;
  }
  .container-auth{
    margin-top: 8.9%;
  }
}
@media only screen and (max-width:557px) {
  .container {
    margin-top: 11%;
  }

  .container-auth{
    margin-top: 11%;
  }
}
@media only screen and (max-width:480px) {
  .container{
    margin-top: 15%;
  }
  .container-auth {
    margin-top: 28%;
  }
}
</style>