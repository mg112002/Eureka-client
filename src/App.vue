<template>
  <div>
  <NavBar />
  <div class="container">
    <el-container>
      <SideBar />
      <el-container class="content">
        <router-view/>
      </el-container>
    </el-container>
  </div>
  <AppFooter />
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import AppFooter from './components/Footer.vue'
import SideBar from './components/SideBar.vue';

export default {
  name: 'EurekaApp',
  components: {
    NavBar,
    SideBar,
    AppFooter
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.container{
  margin-bottom: 5%;
}
.content{
margin: 5% 3% 1% 23%;
}
@media only screen and (max-width:1200px){
  .content{
    margin-top: 8%;
  }
}
@media only screen and (max-width: 710px) {
  .content{
    margin: 30% 2% 1% 20% 
  }
}
</style>