<template>
  <div class="blog-detail">
    <div v-if="!isEditing">
    <el-button type="primary" @click="setEditing">Edit</el-button>
    </div>
    <EditBlog v-else :blog="blog" />
  </div>
</template>

<script>

import EditBlog from '@/components/EditBlog.vue'

export default {
    name: 'BlogDetail',
    data() {
        return {
            editing:false
        }
    },
    computed: {
        blog() {
        return this.$store.getters.blog
        },
        isEditing() {
        return this.editing
      } 
    },
    methods: {
        setEditing() {
        this.editing = !this.editing
      }  
    },
    components: {
    EditBlog
}
}
</script>

<style scoped>
.blog-detail{
    width: 100%;
    height: 100%;
}

</style>