<template>
    <el-card class="box-card">
        <p class="label">Name</p>
        <el-input placeholder="Enter name" v-model="name" clearable></el-input>
        <p class="label">Email</p>
        <el-input placeholder="Enter email" v-model="email" clearable></el-input>
        <p class="label">Password</p>
        <el-input placeholder="Enter password" v-model="password" show-password></el-input>
        <p class="label">Repeat Password</p>
        <el-input placeholder="Re-enter password" v-model="password2" show-password></el-input>
        <p>Already have an account?<router-link to="/login"> Login here!</router-link></p>
        <el-button type="primary" class="register">Register</el-button>
    </el-card>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            name:'',
            email: '',
            password: '',
            password2:''
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: blue;
}
.box-card {
    width: 40%;
    height: 100%;
    margin: auto;
}

.label {
    margin: 2% 0
}

.register {
    margin: 2% 0;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}
</style>