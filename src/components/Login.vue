<template>
<el-card class="box-card">
    <h1 style="text-align:center;text-decoration: underline;">Login Form</h1>
    <p class="label">Username<span class="reqd">*</span></p>
    <el-input placeholder="Username or Email" v-model.trim="email"
        @focus="set('email')" clearable></el-input>
    <i v-if="emailValidated" :class="emailValid ?'el-icon-circle-check':'el-icon-circle-close'"></i>
    <p v-if="emailValidated&&!emailValid" class="errmsg">Invalid Email</p>
    <p class="label">Password<span class="reqd">*</span></p>
    <el-input placeholder="Enter password"
        v-model.trim="password" @focus="set('pass')" show-password></el-input>
    <i v-if="passValidated" :class="passValid ? 'el-icon-circle-check' : 'el-icon-circle-close'"></i>
    <p v-if="passValidated&&!passValid" class="errmsg">Password length should be atleast 6 characters and must have
        uppercase, lowercase, special character and number. </p>
    <p>Don't have an account?<router-link to="/register"> Create New!</router-link></p>
    <p>Email: jane.doe@example.com</p>
    <p>Password: Jane@123</p>
    <el-button type="primary" class="login" @click="login">Login</el-button>
</el-card>
</template>

<script>
export default {
    name:'LoginPage',
    data() {
        return {
            email: 'jane.doe@example.com',
            password: 'Jane@123',
            emailValidated: false,
            passValidated:false
        }
    },
    computed: {
        emailValid() {
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email)
        },
        passValid() {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(this.password)
        }
    },
    methods: {
        set(elmt) {
            if (elmt === 'email') {
                this.emailValidated = true
            }
            if (elmt === 'pass') {
                this.passValidated = true
            }
        },
        async login() {
            if (this.email === '' || this.password === '') {
                this.$message({
                    type: 'warning',
                    message: 'Fields cannot be empty',
                    duration: 2000
                })
            } else if (this.emailValid && this.passValid) {
                const credentials = {
                    email: this.email,
                    password:this.password
                }
                try {
                    this.$store.dispatch('login', credentials)
                    this.$message({
                        type: 'success',
                        message: 'Logged in successfully',
                        duration:2000
                    })
                    this.$router.push({name:'home'})
                } catch (err) {
                    this.$message({
                        type: 'error',
                        message: err.respone.data.message
                    })
                }
            }
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
    margin: 2% auto;
    padding-left: 3%;
}
.el-input {
    width: 90%;
}
.reqd{
    color: crimson;
}
.label{
    margin:5% 0 2%
}
.login{
    margin: 2% 0;
}
.errmsg {
    color: crimson;
    margin: 0;
    font-size: small;
    line-height: 1.5;
}

.el-icon-circle-close {
    font-size: x-large;
    color: crimson;
}

.el-icon-circle-check {
    font-size: x-large;
    color: green;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%;
        margin-top: 25%;
    }
    .el-input {
        width: 85%;
    }        
}
</style>