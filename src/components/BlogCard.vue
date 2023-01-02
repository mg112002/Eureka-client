<template>
    <div class="container">
    <VotingWidget :blog="blog" />
    <div class="blog-card">
        <div class="icons">
            <el-button class="icon" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button class="icon" type="info" icon="el-icon-share" circle></el-button>
            <el-button class="icon" type="danger" icon="el-icon-delete" circle></el-button>
        </div>
        <div class="blog-info">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.description.slice(0,300) }}
        <router-link :to="{name:'blog-details',params:{id:blog._id}}">
                ...Read more</router-link></p>
        </div>
        <div class="blog-img">
            <img :src="blog.imageUrl" :alt="blog.title" />
        </div>

    </div>
    </div>
</template>

<script>

import VotingWidget from './VotingWidget.vue';

export default {
    name: 'BlogCard',
    props: {
        blog: {
            type: Object,
            required:true
        },
        // user: {
        //     type: Object,
        //     required:true
        // }
    },
    components: {
        VotingWidget
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
    margin-left: 8%;
}
img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.blog-img:hover{
    transform: scale(1.4);
    transition-duration: 1.7s;
}
.icons{
    margin-right: 5%;
    width: 8%;
}
.icon{
    display: block;
    margin: 25% 0 20%;
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
    }
    .blog-info{
        width: 100%;
    }
    .blog-img:hover {
            transform: none;
        }
}
</style>