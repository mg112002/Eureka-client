<template>
<div>
<el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router=true
    background-color="#8D9EFF" text-color="#001253" active-text-color="#0027b3" style="position:fixed;width:100%">
    <el-menu-item index="/"  style="border-bottom-color: transparent"><img src="../../public/logo.png"/></el-menu-item>
        <el-menu-item index="/blogs"  style="border-bottom-color: transparent;width:40%">
            <el-input 
            placeholder="Search by keyword or phrase" 
            v-model="input"
            style="width:92%"
            clearable />
            <el-button style="background-color:#8D9EFF; border-color: #8D9EFF;padding:1%;margin-left: 2%;">
            <i class="el-icon-search"></i>
            </el-button>
        </el-menu-item>
        <el-menu-item v-if="$store.getters.isAuthenticated" index="/add">
            <i class="el-icon-plus" ></i>
            New Blog
        </el-menu-item>
        <el-menu-item index="/#about">AboutUs</el-menu-item>
        <div v-if="$store.getters.isAuthenticated" style="float:right">
        <el-menu-item  index="5">Hello{{ $store.state.email }}</el-menu-item>
        <el-menu-item  index="/login">Logout</el-menu-item>
        </div>
    <el-menu-item v-else index="/login">Login</el-menu-item>
</el-menu>

</div>
</template>

<script>
export default {
    name:'NavBar',
    data() {
        return {
            activeIndex: '1',
            input:''
        };
    },
    methods: {
        async getResults() {
            //request blogs with the keyword
        }
    }
}
</script>

<style scoped>
el-menu{
    position: sticky;
    top: 0;
}
img{
    height: 88%;
    width:100%
}
el-button{
background-color:#8D9EFF;
}
i {
    color: #001253;
}
.el-icon-search{
    color:#001253
}
.el-icon-search:hover{
    color: #0027b3;
}
</style>