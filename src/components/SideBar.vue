<template>
    <el-aside width="20%" class="sidebar">
        <el-row class="tac">
            <el-col>
                <el-menu class="el-menu-vertical-demo" 
                @open="handleOpen" 
                @close="handleClose"
                background-color="#8D9EFF" 
                text-color="#001253" 
                active-text-color="#0027b3" 
                :collapse="isCollapse" 
                style="border-right: none;">
                    <el-submenu index="1" style="color:#001253">
                        <template slot="title">
                            <i class="el-icon-s-unfold"></i>
                            <span>Categories</span>
                        </template>
                            <router-link to="/categories/C" :key="$route.fullPath"><el-menu-item index="/categories/C">C</el-menu-item></router-link>
                            <router-link to="/categories/C++" :key="$route.fullPath"><el-menu-item index="/categories/C++">C++</el-menu-item></router-link>
                            <el-menu-item index="/categories/Python">Python</el-menu-item>
                            <el-menu-item index="/categories/Java">Java</el-menu-item>
                            <el-menu-item index="/categories/JavaScript">JavaScript</el-menu-item>
                            <el-menu-item index="/categories/C#">C#</el-menu-item>
                            <el-menu-item index="/categories/Ruby">Ruby</el-menu-item>
                    </el-submenu>
                    <router-link to="/tags"><el-menu-item index="2" route>
                        <i class="el-icon-menu"></i>
                        <span>Tags</span>
                    </el-menu-item>
                    </router-link>
                    <router-link to="/newsletter"><el-menu-item index="/newsletter">
                        <i class="el-icon-document"></i>
                        <span>NewsLetter</span>
                    </el-menu-item></router-link>
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            windowWidth: window.innerWidth,
            isCollapse:false
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            this.isCollapse = this.windowWidth < 710
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {
        this.isCollapse = window.innerWidth < 710
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
i{
    color: #001253;
    padding-left:1%
}
.sidebar{
    position: fixed;
    top: 3.8rem;
    left: 0;
    background-color: #8D9EFF;
    height: 97%;
}
@media only screen and (max-width: 710px) {
    .sidebar {
        margin: 0;
        background-color: #8D9EFF;
            height: 100%;
    }
}
@media only screen and (max-width: 528px){
    .sidebar{
        margin-top: 12.3%;
    }
}
@media only screen and (max-width: 450px) {
    .sidebar {
            margin-top: 15%;
        }
}
</style>