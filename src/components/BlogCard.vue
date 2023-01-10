<template>
    <div v-loading="loading" element-loading-text="Fetching the blogs that you need..." v-if="Object.keys(blog).length" class="container">
    <VotingWidget :blog="blog" />
    <div class="blog-card">
        <div class="icons">
            <el-button :disabled="!isAuthor" @click="navigate(blog._id)" class="icon" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button class="icon" type="info" icon="el-icon-share" @click="open" circle></el-button>
            <el-button :disabled="!isAuthor" @click="deleteBlog(blog._id)" class="icon" type="danger" icon="el-icon-delete" circle></el-button>
        </div>
        <div class="blog-info">
            <h1>{{ blog.name }}</h1>
            <p v-if="blog.description">{{ blog.description.slice(0,310) }}
            <router-link :to="{name:'blog-details',params:{id:blog._id}}">
                ...Read more</router-link></p>
            <el-button size="small" class="tags category" round>{{ blog.category }}</el-button>
            <el-button v-for="tag in blog.tags" :key="tag" size="small" class="tags" round>{{ tag }}</el-button>
        </div>
        <div class="blog-img">
            <img v-if="blog.imageUrl" :src="blog.imageUrl" :alt="blog.name" />
            <img v-else src="@/../public/blog-img.jpg" :alt="blog.name" />
        </div>
    </div>
    </div>
</template>

<script>

import VotingWidget from './VotingWidget.vue'
import config from '@/config'
import {DeleteBlog} from '@/services/userServices'

export default {
    name: 'BlogCard',
    data() {
        return {
            url: `${config.productionUrl}/blogs/${this.blog._id }`
        }  
    },
    props: {
        blog: {
            required:true
        },
        idx: {
            required:true
        }
    },
    components: {
        VotingWidget
    },
    computed: {
        isAuthor() {
            return this.blog.postedBy === this.$store.state.auth.email
        }   
    },
    methods: {
        open() {
            this.$alert(this.url, 'Share', {
                confirmButtonText: 'Copy',
                callback: action => {
                    navigator.clipboard.writeText(this.url)
                    if (action === 'confirm') {
                        this.$message({
                            type: 'success',
                            message: `Copied to clipboard`,
                            duration:2000
                        })
                    }
                }
            })
        },
        navigate(id) {
            if (this.$store.state.auth.email===this.blog.postedBy) {
                this.$router.push({name:'edit-blog',params:{id}})
            } else {
                this.$message({
                    type: 'error',
                    message: 'Unauthorized access',
                    duration:2000
                })
            }
        },
        deleteBlog(id) {
            if (this.$store.state.auth.email === this.blog.postedBy) {
                this.$alert('Are you sure you want to delete this blog?', 'Delete', {
                    confirmButtonText: 'Yes',
                    callback: async(action) => {
                        if (action === 'confirm') {
                            try {
                                this.$message({
                                    type: 'success',
                                    message: 'Blog deleted successfully',
                                    duration:2000
                                })
                                await DeleteBlog(id)
                                let blogs = this.$store.getters.blogs
                                blogs.splice(this.idx,1)
                                this.$store.commit('updateBlogs',blogs)                             
                            } catch (err) {
                                this.$message({
                                    type: 'error',
                                    message: err.response.data.message,
                                    duration:2000
                                })
                            }
                        }

                    }
                })
            }
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
a:visited {
    color: blue
}
p{
    font-size: medium;
}
.container{
    display: flex;
}
.blog-card{
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 25px;
    width: 70%;
    margin: 3%;
    margin-right: 0;
    padding: 2%;
}
.blog-card:hover{
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
.blog-info{
    width: 50%;
    display: inline;
    text-align: justify;
}
.blog-img{
    width: 40%;
    display: inline;
    margin-left: 7%;
}
img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.tags{
    margin: 1%;
    pointer-events: none;
    color: #001253;
}

.blog-img:hover{
    transform: scale(1.3);
    transition-duration: 1.7s;
}
.icons{
    margin: 5% 0;
    width: 8%;
}
.icon{
    display: block;
    margin: 25% 0 20%;
}
.category{
    color:#8D9EFF;
}

@media only screen and (max-width: 710px) {
    .blog-card{
        flex-direction: column;
        border-radius: 10px;
    }
    .icons{
        display: flex;
    }
    .icon{
        display: inline;
        margin: auto 25%;
    }
    .blog-img{
        width: 95%;
        margin: auto;
        margin-top: 5%;
    }
    .blog-info{
        width: 100%;
    }
    .blog-img:hover {
            transform: none;
        }
}
</style>