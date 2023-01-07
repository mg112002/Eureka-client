<template>
    <el-card class="box-card">
        <p class="label">Title<span class="reqd">*</span></p>
        <el-input class="input" placeholder="Title" v-model="name" @focus="titleValidated=true" clearable></el-input>
        <p v-if="titleValidated&&titleShort" class="err">Title too short(Minimum 4 letters)</p>
        <p v-if="titleValidated&&titleLong" class="err">Title too large(Maximum 30 letters)</p>
        <p class="label">Description<span class="reqd">*</span></p>
        <el-input class="input" type="textarea" @focus="descValidated=true" :autosize="{ minRows: 15, maxRows: 25 }" placeholder="Describe the blog"
            v-model="description"></el-input>
        <p v-if="descValidated&&descShort" class="err">Description too short(Minimum 500 letters)</p>
        <p v-if="descValidated&&descLong" class="err">Description too large(Maximum 10K letters)</p>
        <p class="label">Category<span class="reqd">*</span></p>
        <el-select v-model="category" clearable placeholder="Select Category" @focus="catValidated=true">
            <el-option v-for="cat in allCategories" :key="cat" :label="cat" :value="cat">
            </el-option>
        </el-select>
        <p v-if="catValidated&&!catValid" class="err">Category cannot be empty</p>
        <p class="label">Tags<span class="reqd">*</span></p>
        <el-select class="input" v-model="tags" multiple placeholder="Select Tags" @focus="tagsValidated=true">
            <el-option v-for="item in allTags" :key="item" :label="item" :value="item">
            </el-option>
        </el-select>
        <p v-if="tagsValidated&&!tagsValid" class="err">Tags cannot be empty</p>
        <p class="label">Image URL</p>
        <el-input class="input" placeholder="Enter Image URL" v-model.trim="imageUrl" clearable></el-input>
        <br><br>
        <el-button type="primary" @click="postBlog" class="edit">Post</el-button>
    </el-card>
</template>

<script>

import { AddBlog } from '@/services/userServices'

export default {
    name: 'AddBlog',
    data() {
        return {
            allTags: [
                'Array',
                'Hashmap',
                'Tree',
                'LinkedList',
                'Queue',
                'Stack',
                'Graph',
                'DynamicProgramming'
            ],
            allCategories: [
                'C',
                'C++',
                'Python',
                'Java',
                'JavaScript',
                'C#',
                'Ruby'
            ],
            name: '',
            description: '',
            category: '',
            tags: '',
            imageUrl: '',
            titleValidated: false,
            descValidated: false,
            catValidated: false,
            tagsValidated: false
        }
    },
    computed: {
        nameValid() {
            return this.name.length > 4 && this.name.length < 30
        },
        titleLong() {
            return this.name.length > 30
        },
        titleShort() {
            return this.name.length < 4
        },
        descValid() {
            return this.description.length > 500 && this.description.length < 10000
        },
        descShort() {
            return this.description.length < 500
        },
        descLong() {
            return this.description.length > 10000
        },
        catValid() {
            return this.category!==''
        },
        tagsValid() {
            return this.tags.length>0
        }

    },
    methods: {
        async postBlog() {
            if (this.$store.getters.isAuthenticated) {
                const blogDetails = {
                    name: this.name,
                    description: this.description,
                    category: this.category,
                    tags: this.tags,
                    imageUrl: this.imageUrl
                }
                try {
                    const { data } = await AddBlog(blogDetails)
                    this.$message({
                        type: 'success',
                        message: 'Blog posted successfully'
                    })
                    this.$router.push({ name: 'blog-details', params: { id:data._id } })
                }
                catch (err) {
                    this.$message({
                        type: 'error',
                        message: err.response.data.message
                    })
                }
            }
        }
    },
}
</script>

<style scoped>
.box-card {
    width: 70%;
    height: 100%;
    margin: 5% auto;
}

.label {
    margin: 2% 0
}

.login {
    margin: 2% 0;
}

.input {
    z-index: 0;
    position: relative;
}
.reqd {
    color: crimson;
}
.err {
    color: crimson;
    margin: 0;
    font-size: small;
    line-height: 1.5;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}
</style>