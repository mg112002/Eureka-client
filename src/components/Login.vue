<template>
<el-card class="box-card">
    <p class="label">Username</p>
    <el-input placeholder="Username" v-model.trim="username" clearable></el-input>
    <p class="label">Password</p>
    <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    <p>Don't have an account?<router-link to="/register"> Create New!</router-link></p>
    <el-button type="primary" class="login">Login</el-button>
</el-card>
</template>

<script>
export default {
    name:'LoginPage',
    data() {
        return {
            username: '',
            password:''
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: blue;
}
.box-card{
    width:40%;
    height: 100%;
    margin: auto;
}
.label{
    margin:2% 0
}
.login{
    margin: 2% 0;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}

</style>