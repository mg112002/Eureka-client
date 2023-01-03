<template>
    <div>
    <div v-if="blogs.length!==0" class="blog-list">
        <BlogCard v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
    <div v-else class="no-blogs">
        <h2 style="marign:500px">No blogs found!!</h2>
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
            blogs: this.$store.state.blogs,
            route:this.$route
        }
    },
    components: {
        BlogCard
    },
    computed() {
        console.log(this.$route.fullPath)
        if (this.$route.fullPath.includes('categories')) {
            console.log('cats')
        } else if (this.$route.fullPath.includes('tags')) {
            console.log('tags')
        } else {
            console.log('query')
        }
    },
    mounted() {
        console.log(this.route)
        if (this.route.fullPath.includes('categories')) {
            console.log('cats')
        } else if (this.route.fullPath.includes('tags')) {
            console.log('tags')
        } else {
            console.log('query')
        }
    }
}
</script>

<style scoped>
.no-blogs{
    margin: 17.95rem 29rem;
}
</style>