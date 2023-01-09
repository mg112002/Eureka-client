<template>
    <div>
    <el-drawer title="Hola Blogger!" :modal-append-to-body=true direction="rtl" :size="size" :visible.sync="drawer">
        <SideBar @setDrawer="drawer=false"/>
    </el-drawer>
<div class="nav">
<el-menu class="el-menu-demo" mode="horizontal" :router=true
    background-color="#4d67ff" text-color="white" active-text-color="#001799" style="position:fixed;width:100%">
    <el-menu-item index="/" style="border-bottom-color: transparent"><img src="../../public/logo.png"/></el-menu-item>
        <el-menu-item style="border-bottom-color: transparent;width:40%">
            <div @keydown.stop>
                <el-input
                placeholder="Search by keyword, phrase, category, tag or author" 
                v-model="search"
                style="width:92%"
                clearable />
                <el-button style="background-color:#4d67ff; border:none;padding:1%;margin-left: 2%;" @click="setBlogs">
                    <i class="el-icon-search"></i>
                </el-button>
            </div>
        </el-menu-item>
        <el-menu-item v-if="isAuthenticated" index="/add">
            <i class="el-icon-plus" ></i>
            New Blog
        </el-menu-item>
        <el-menu-item index="/#about" @click="goTo">AboutUs</el-menu-item>
        <el-menu-item v-if="isAuthenticated" index="/">Hello <span class="email">{{ email }}</span></el-menu-item>
        <el-menu-item v-if="isAuthenticated" index="/login" @click="logout">Logout</el-menu-item>
        <el-menu-item v-else index="/login">Login</el-menu-item>
        <el-menu-item @click="drawer=!drawer" style="float:right"><el-button style="background-color:transparent;border:none;"><i style="color:white;font-size:xx-large" class="el-icon-s-grid"></i></el-button></el-menu-item>
</el-menu>
</div></div>
</template>

<script>
import SideBar from './SideBar.vue';
export default {
  components: { SideBar },
    name:'NavBar',
    data() {
        return {
            search: '',
            drawer: false
        };
    },
    methods: {
        setDrawer() {
         this.drawer = !this.drawer   
        },
        setBlogs() {
            if (this.search !== '') {
                this.$message({
                    type: 'info',
                    message: 'Searching',
                    duration: 1000
                })
                this.$router.push({ name: 'blogs', query: { keyWord: this.search } })
            } else {
                this.$message({
                    type: 'warning',
                    message: 'Input keyword for search',
                    duration: 1000
                })
            }
        },
        logout() {
            this.$store.dispatch('logout')
            try {
                this.$message({
                    type: 'success',
                    message: 'Logged out!',
                    duration:2000
                })
            } catch {
                this.$message({
                    type: 'error',
                    message: 'Something went wrong',
                    duration: 2000

                })
            }
        },
        goTo() {
            this.$router.push({name:'home',hash:'#about'})
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        },
        email() {
            return this.$store.state.auth.email
        },
        size() {
            if (window.innerWidth < 500) {
                return '100%'
            } else if (window.innerWidth < 1080) {
                return '50%'
            } else {
                return '20%'
            }
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.nav{
    z-index: 1;
    position: absolute;
}
el-menu{
    top: 0;
}
img{
    height: 88%;
    width:100%
}
i {
    color: #001253;
}
.el-icon-search{
    color: white
}
.el-icon-search:hover{
    color: #0027b3;
}
.email{
    color:white;
    font-weight: bold;
}
</style>