<template>
    <el-aside width="20%" :class="isAuthenticated?'auth-sidebar':'sidebar'">
        <el-row class="tac">
            <el-col>
                <el-menu class="el-menu-vertical-demo" :router=true
                    background-color="#8D9EFF" text-color="#001253" active-text-color="#0027b3" :collapse="isCollapse" style="border-right: none;">
                    <el-submenu index="1" style="color:#001253">
                        <template slot="title">
                            <i class="el-icon-s-unfold"></i>
                            <span>Categories</span>
                        </template>
                            <el-menu-item index="/categories/C">C</el-menu-item>
                            <el-menu-item index="/categories/C++">C++</el-menu-item>
                            <el-menu-item index="/categories/Python">Python</el-menu-item>
                            <el-menu-item index="/categories/Java">Java</el-menu-item>
                            <el-menu-item index="/categories/JavaScript">JavaScript</el-menu-item>
                            <el-menu-item index="/categories/C#">C#</el-menu-item>
                            <el-menu-item index="/categories/Ruby">Ruby</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/tags">
                        <i class="el-icon-menu"></i>
                        <span>Tags</span>
                    </el-menu-item>
                    <el-menu-item index="/newsletter">
                        <i class="el-icon-document"></i>
                        <span>NewsLetter</span>
                    </el-menu-item>
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
            isCollapse: false
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
            this.isCollapse = this.windowWidth < 710
        }
    },
    created() {
        this.isCollapse = window.innerWidth < 710
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
i{
    color: #001253;
    padding-left:1%
}
.sidebar{
    height: inherit;
    background-color: #8D9EFF;
    min-height: 92vh;
    position: relative;
}
.auth-sidebar{
    height: inherit;
    background-color: #8D9EFF;
    min-height: 92vh;
}
.tac{
    position: fixed;
    width: 20%;
}
@media only screen and (max-width: 1225px) {
    .auth-sidebar {
        margin-top: 5%;
    }
}
@media only screen and (max-width: 1000px) {
    .auth-sidebar {
        margin-top: 6.29%;
    }
}
@media only screen and (max-width: 710px) {
    .sidebar {
        margin-top: 0;
    }
    .auth-sidebar{
        margin-top:8.9%;
    }
}
@media only screen and (max-width:557px) {
    .sidebar{
        margin-top: 11%;
    }
    .auth-sidebar{
        margin-top: 11%;
    }
}

@media only screen and (max-width:480px){
    .sidebar{
        margin-top: 15%;
    }
    .auth-sidebar {
            background-color: #8D9EFF;
            margin-top: 29%;
        }
}
</style>