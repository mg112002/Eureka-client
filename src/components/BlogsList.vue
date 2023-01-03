<template>
    <div>
        
    <div v-if="blogs.length!==0" class="blog-list">
        <BlogCard v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
    <div v-else class="no-blogs">
        <h2 style="marign:500px">No blogs found!!{{ blogs }}</h2>
    </div>
    </div>
</template>

<script>
import BlogCard from './BlogCard.vue';

export default {
    name: 'BlogsList',
    data() {
        return {
            // blogs: [],
            // blogs: this.$store.state.blogs,
            // blogs: this.$store.state.blogs,
        }
    },
    computed: {
        blogs() {
            return this.$store.getters.blogs
        }
    //     getBlogs() {
    //         const blogs = this.blogs
    //         this.$forceUpdate()
    //     return blogs
    //   }  
    },
    components: {
        BlogCard
    },
}
</script>

<style scoped>
.no-blogs{
    margin: 17.95rem 29rem;
}
</style>