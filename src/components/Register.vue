<template>
    <el-card class="box-card">
        <h1 style="text-align:center;text-decoration: underline;">New User Registration Form</h1>
        <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
            <p class="label">Name<span class="reqd">*</span></p>
            <el-form-item>
                <el-input placeholder="Enter name" v-model="ruleForm.name" class="name" clearable></el-input>
            </el-form-item>
            <p class="label">Email<span class="reqd">*</span></p>
            <el-form-item>
                <el-input placeholder="Enter email" :class="emailValidated&&!emailValid?'invalid':'valid'" v-model.trim="ruleForm.email" @focus="set('email')" clearable></el-input>
                <i v-if="emailValidated" :class="emailValid ?'el-icon-circle-check':'el-icon-circle-close'"></i>
                <p v-if="emailValidated&&!emailValid" class="errmsg">Invalid Email</p>
            </el-form-item>
            <p class="label">Password<span class="reqd">*</span></p>
            <el-form-item >
                <el-input placeholder="Enter password" :class="passValidated&&!passValid?'invalid':'valid'" v-model.trim="ruleForm.password" @focus="set('pass')" show-password></el-input>
                <i v-if="passValidated" :class="passValid ? 'el-icon-circle-check' : 'el-icon-circle-close'"></i>
                <p v-if="passValidated&&!passValid" class="errmsg">Password length should be atleast 6 characters and must have uppercase, lowercase,
            special character and number. </p>
            </el-form-item>
            <p class="label">Repeat Password<span class="reqd">*</span></p>
            <el-form-item>
                <el-input placeholder="Re-enter password" :class="rpassValidated&&!rpassValid?'invalid':'valid'" v-model.trim="ruleForm.rpass"  @focus="set('rpass')" show-password></el-input>
                <i v-if="rpassValidated" :class="rpassValid ? 'el-icon-circle-check' : 'el-icon-circle-close'"></i>
                <p v-if="rpassValidated&&!rpassValid" class="errmsg">Passwords do not match</p>
            </el-form-item>
            <p>Already have an account?<router-link to="/login"> Login here!</router-link></p>
            <el-form-item>
                <el-button type="primary" @click="submitForm">Register</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>

import {UserRegistration} from '@/services/userServices'

export default {
    name: 'RegisterPage',
    data() {
        
        return {
            ruleForm: {
                name: '',
                email: '',
                password: '',
                rpass: ''
            },
            emailValidated: false,
            passValidated: false,
            rpassValidated:false
        };
    },
    methods: {
        set(elmt) {
            if (elmt === 'email') {
                this.emailValidated = true
            }
            if (elmt === 'pass') {
                this.passValidated=true
            }
            if(elmt==='rpass') {
                this.rpassValidated=true
            }
        },
        async submitForm() {
            if (this.emailValid && this.passValid && this.rpassValid) {
                const userInfo = {
                    name: this.ruleForm.name,
                    email: this.ruleForm.email,
                    password: this.ruleForm.password
                }
                const res = await UserRegistration(userInfo)
                const user = res.data
                if (user.name === this.ruleForm.name) {
                    this.$message({
                        type: 'success',
                        message: 'Registration successful :)',
                        duration: 4000
                    })
                    this.$router.push({name:'login'})
                } else {
                    this.$message({
                        type: 'error',
                        message: 'Something went wrong :(',
                        duration: 4000
                    })
                }
            } else if(this.ruleForm.name===''||this.ruleForm.email===''||this.ruleForm.password===''||this.ruleForm.rpass==='') {
                this.$message({
                    type: 'warning',
                    message: 'All fields are required!!',
                    duration: 4000
                })
            }else {
                this.$message({
                    type: 'warning',
                    message: 'Please resolve the errors and try re-submitting!',
                    duration:4000
                })
            }
        }        
    },
    computed: {
        emailValid() {
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.ruleForm.email)
        },
        passValid() {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(this.ruleForm.password)
        },
        rpassValid() {
            return this.ruleForm.password === this.ruleForm.rpass
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: blue;
}
/* .name{
    margin-bottom: 2%;
} */
.reqd{
    color: crimson;
}
.box-card {
    width: 40%;
    height: 100%;
    margin: auto;
    padding-left: 3%;
}
.el-input{
    width: 90%;
}
.el-form-item{
    margin-bottom: 0;
}
.label {
    margin: 5% 0 2%;
}
.errmsg{
    color:crimson;
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