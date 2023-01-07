<template>
    <el-card class="box-card">
        <h1 style="text-align:center;text-decoration: underline;">NewsLetter SignUp Form</h1>
        <p class="label">Email<span class="reqd">*</span></p>
        <el-input placeholder="Enter Email" v-model.trim="email"
            @focus="set('email')" clearable></el-input>
        <i v-if="emailValidated" :class="emailValid ?'el-icon-circle-check':'el-icon-circle-close'"></i>
        <p v-if="emailValidated&&!emailValid" class="errmsg">Invalid Email</p>
        <p class="label">Interest<span class="reqd">*</span></p>
        <el-select v-model="interests" multiple placeholder="Select your interests" @focus="set('interests')">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <i v-if="iValidated" :class="iValid ? 'el-icon-circle-check' : 'el-icon-circle-close'"></i>
        <p v-if="iValidated&&!iValid" class="errmsg">Interests cannot be empty</p>
        <p>Note: You will receive mail on the above email whenever a blog with tag of your interest is posted!! </p>
        <p>If you want to update the interests just enter the email already signedUp and select all the interests you want.</p>
        <el-button type="primary" class="signup" @click="signUp">Sign Up</el-button>
    </el-card>
</template>

<script>

import { NewsLetterSignUp } from '@/services/userServices'

export default {
    name: 'NewsLetter',
    data() {
        return {
            options: [{
                value: 'Array',
                label: 'Array'
            }, {
                value: 'LinkedList',
                label: 'LinkedList'
            }, {
                value: 'Queue',
                label: 'Queue'
            }, {
                value: 'Stack',
                label: 'Stack'
            }, {
                value: 'Hashmap',
                label: 'Hashmap'
            }, {
                value: 'Tree',
                label: 'Tree'
            }, {
                value: 'Graph',
                label: 'Graph'
            }, {
                value: 'DynamicProgramming',
                label: 'DynamicProgramming'
            }, {
                value: 'C',
                label: 'C'
                }, {
                    value: 'C++',
                    label: 'C++'
                }, {
                    value: 'Python',
                label: 'Python'
                }, {
                    value: 'Java',
                    label: 'Java'
                }, {
                    value: 'JavaScript',
                label: 'JavaScript'
                }, {
                    value: 'C#',
                label: 'C#'
                }, {
                    value: 'Ruby',
                label: 'Ruby'
                }
            ],
            email:this.$store.state.auth.email,
            interests: [],
            emailValidated: false,
            iValidated:false
        }
    },
    methods: {
        set(elmt) {
            if (elmt === 'email') {
                this.emailValidated = true
            }
            if (elmt === 'interests') {
                this.iValidated = true
            }
        },
        async signUp() {
            if (this.email === "" || this.interests.length === 0) {
                this.$message({
                    type: 'warning',
                    message: 'All fields are required',
                    duration:2000
                })
            } else if (this.emailValid && this.iValid) {
                const info = {
                    email: this.email,
                    interests:this.interests
                }
                try {
                    await NewsLetterSignUp(info)
                    this.$message({
                        type: 'success',
                        message: 'Signed up successfully'
                    })
                    setTimeout(() => {
                        this.$message({
                            type: 'info',
                            message: `You will now receive emails of new blog on ${info.email}`,
                            duration: 3000,
                        })
                    }, 3000)
                    this.email = "",
                    this.interests=""
                    
                } catch (err) {
                    this.$message({
                        type: 'error',
                        message:'Something went wrong :( Please try again!!'
                    })
                }
            }
        }
    },
    computed: {
        emailValid() {
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email)
        },
        iValid() {
            return this.interests.length>0
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: blue;
}

.box-card {
    width: 40%;
    margin: auto;
}
.el-input{
    width: 90%;
}
.signup {
    margin: 2% 0;
}
.reqd {
    color: crimson;
}
.label {
    margin: 5% 0 2%
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
    .el-input{
        width: 85%;
    }
    .el-select{
        width: 85%;
    }
}
</style>