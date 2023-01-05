<template>
<el-card class="box-card">
    <p class="label">Title</p>
    <el-input class="input" placeholder="Title" v-model="name" clearable></el-input>
    <p class="label">Description</p>
    <el-input class="input" type="textarea" :autosize="{ minRows: 15, maxRows: 25}" placeholder="Describe the blog" v-model="description"></el-input>
    <p class="label">Category</p>
    <el-input class="input" placeholder="Category" v-model.trim="category" clearable></el-input>
    <p class="label">Tags</p>
    <el-select class="input" v-model="tags" multiple placeholder="Tags">
        <el-option v-for="item in allTags" :key="item" :label="item" :value="item">
        </el-option>
    </el-select>
    <el-button type="primary" class="login">Edit</el-button>
</el-card>
</template>

<script>

export default {
    name: 'EditBlog',
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    components: {
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
            name: this.blog.name,
            tags: this.blog.tags,
            description: this.blog.description,
            category: this.blog.category,
            imageUrl: this.blog.imageUrl
      }  
    },
    methods: {
        
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
.input{
    z-index: 0;
    position: relative;
}
@media only screen and (max-width: 710px) {
    .box-card {
        width: 90%
    }
}
</style>