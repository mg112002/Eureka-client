<template>
    <el-card class="box-card">
        <p class="label">Email</p>
        <el-input placeholder=" Enter Email" v-model="email" clearable></el-input>
        <p class="label">Interest</p>
        <el-select v-model="interests" multiple placeholder="Select tags">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <p>Note: You will receive mail on the above email whenever a blog with tag of your interest is posted!! </p>
        <el-button type="primary" class="signup">SignUp</el-button>
    </el-card>
</template>

<script>
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
                value: 'Dynamic Programming',
                label: 'Dynamic Programming'
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
            email:'',
            interests: []
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
    height: 100%;
    margin: auto;
}

.label {
    margin: 2% 0
}

.signup {
    margin: 2% 0;
}

@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}
</style>