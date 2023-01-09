<template>
    <el-aside>
        <el-row class="tac">
            <el-col>
                <el-menu class="el-menu-vertical-demo" :router=true
                    background-color="white" text-color="black" active-text-color="#001799">
                    <el-submenu index="1">
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
                    <el-menu-item index="/tags" @click="closeDrawer">
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
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        closeDrawer(){
            this.$emit('setDrawer')
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
    /* color: white; */
    /* color: #001253; */
    padding-left:1%
}

.tac{
    position: fixed;
    width: 100%;
}
</style>