<template>
    <div>
    <div v-loading="loading" element-loading-text="Fetching the blogs that you need..." v-if="blogs.length!==0" class="blog-list">
        <BlogCard  v-for="(blog,idx) in blogs" :key="blog._id" :idx="idx" :blog="blog"/>
    </div>
    <div v-else class="no-blogs">
        <h2 style="marign:500px">No blogs found!!</h2>
    </div>
    </div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
    name: 'BlogsList',
    data() {
        return {
            
        }
    },
    computed: {
        loading() {
            return this.$store.getters.isLoading
        },
        blogs() {
            return this.$store.getters.blogs
        }
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

.blog-list{
    margin: auto;
}

</style>