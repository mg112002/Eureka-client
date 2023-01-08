<template>
<el-card class="box-card">
    <p class="label">Title<span class="reqd">*</span></p>
    <el-input class="input" placeholder="Title" v-model="blog.name" :value="name" @focus="titleValidated=true" clearable></el-input>
    <p v-if="titleValidated&&titleShort" class="err">Title too short(Minimum 4 letters)</p>
    <p v-if="titleValidated&&titleLong" class="err">Title too large(Maximum 30 letters)</p>
    <p class="label">Description<span class="reqd">*</span></p>
    <el-input class="input" type="textarea" :value="description" @focus="descValidated=true" :autosize="{ minRows: 15, maxRows: 25 }"
        placeholder="Describe the blog" v-model="blog.description"></el-input>
    <p v-if="descValidated&&descShort" class="err">Description too short(Minimum 350 letters)</p>
    <p v-if="descValidated&&descLong" class="err">Description too large(Maximum 5000 letters)</p>
    <p class="label">Category<span class="reqd">*</span></p>
    <el-select v-model="blog.category" :value="category" clearable placeholder="Select Category" @focus="catValidated=true">
        <el-option v-for="cat in allCategories" :key="cat" :label="cat" :value="cat">
        </el-option>
    </el-select>
    <p v-if="catValidated&&!catValid" class="err">Category cannot be empty</p>
    <p class="label">Tags<span class="reqd">*</span></p>
    <el-select class="input" v-model="tags" multiple placeholder="Select Tags" @focus="tagValidated=true">
        <el-option v-for="item in allTags" :key="item" :label="item" :value="item">
        </el-option>
    </el-select>
    <p v-if="tagValidated&&!tagValid" class="err">Tags cannot be empty</p>
    <p class="label">Image URL</p>
    <el-input class="input" :value="imageUrl" placeholder="Enter Image URL" v-model.trim="blog.imageUrl" clearable ></el-input>
    <br><br>
    <el-button type="primary" @click="updateBlog(blog._id)" class="edit">Edit</el-button>
</el-card>
</template>

<script>

import {UpdateBlog} from '@/services/userServices'

export default {
    name: 'EditBlog',
    computed: {
        blog() {
          return this.$store.getters.blog  
        },
        nameValid() {
            return this.blog.name.length > 4 && this.blog.name.length < 30
        },
        titleLong() {
            return this.blog.name.length > 30
        },
        titleShort() {
            return this.blog.name.length < 4
        },
        descValid() {
            return this.blog.description.length > 310 && this.blog.description.length < 5000
        },
        descShort() {
            return this.blog.description.length < 310
        },
        descLong() {
            return this.blog.description.length > 5000
        },
        catValid() {
            return this.blog.category!==''
        },
        tagValid() {
            return this.tags.length>0
        },
    },
    methods: {
        async updateBlog(id) {
            if (this.$store.state.auth.email === this.$store.state.blog.postedBy) {
                if (!this.tagValid) {
                    this.$message({
                        type: 'warning',
                        message: 'Tags cannot be empty',
                        duration: 2000
                    })
                    return
                }
                if (this.descValid && this.nameValid && this.catValid && this.tagValid) {
                    const updatedDetails = {
                        name: this.blog.name,
                        description: this.blog.description,
                        category: this.blog.category,
                        tags: this.tags,
                        imageUrl: this.blog.imageUrl
                    }
                    try {
                        await UpdateBlog(id, updatedDetails)
                        this.$message({
                            type: 'success',
                            message: 'Blog updated successfully',
                            duration: 2000
                        })
                        this.$router.push({ name: 'blog-details', params: { id } })
                    }
                    catch (err) {
                        this.$message({
                            type: 'error',
                            message: err.response.data.message,
                            duration: 2000
                        })
                    }
                } else {
                    this.$message({
                        type: 'warning',
                        message: 'Please resolve the errors and try again!',
                        duration: 2000
                    })
                }
            }
        },
    },
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
            imageUrl: '',
            id: '',
            tags:[],
            titleValidated: false,
            descValidated: false,
            catValidated: false,
            tagValidated: false,
      }  
    },    
}
</script>

<style scoped>
.box-card {
    width: 70%;
    height: 100%;
    margin: 2% auto;
}
.label {
    margin: 2% 0
}

.login {
    margin: 2% 0;
}
.input{
    z-index: 0;
    position: relative;
}
.err {
    color: crimson;
    margin: 0;
    font-size: small;
    line-height: 1.5;
}
.reqd {
    color: crimson;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}
</style>