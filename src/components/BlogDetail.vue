<template>
  <div v-if="blog!==undefined">
    <div v-if="!blogValid">
      <h1>Blog Not Found</h1>
    </div>
    <div v-else class="container">
      <div class="blog-detail">
        <div class="icons">
          <el-button :disabled="!isAuthor" @click="navigate(blog._id)" class="icon" type="primary" icon="el-icon-edit"
            circle></el-button>
          <el-button class="icon" type="info" icon="el-icon-share" @click="open" circle></el-button>
          <el-button :disabled="!isAuthor" @click="deleteBlog(blog._id)" class="icon" type="danger" icon="el-icon-delete"
            circle></el-button>
        </div>
        <div>
          <h1>{{ blog.name }}</h1>
          <h3>Programming Language: </h3><span>{{ blog.category }}</span><br><br>
          <h3>Author: </h3><span>{{ blog.postedBy }}</span><br><br>
          <h3>Posted on- </h3><span v-if="blog.time!==undefined">{{ blog.time.slice(0,10) }}</span><br><br>
          <el-button v-for="tag in blog.tags" :key="tag" size="small" class="tags" round>{{ tag }}</el-button>
          <p>{{ blog.description }}</p>
          <el-button :disabled="isUpvoted" type="success" @click="vote('upvote')" icon="el-icon-caret-top" circle></el-button>
          <h3> Total Upvotes: </h3><span v-if="blog.upvotedBy!==undefined">{{ blog.upvotedBy.length }}</span> <br><br>
          <el-button :disabled="isDownvoted" type="danger" @click="vote('downvote')" icon="el-icon-caret-bottom" circle></el-button>
          <h3> Total Downvotes: </h3><span v-if="blog.downvotedBy!== undefined">{{ blog.downvotedBy.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import config from '@/config'
import { DeleteBlog, VoteBlog } from '@/services/userServices'


export default {
    name: 'BlogDetail',
    data() {
      return {
        url: `${config.productionUrl}${this.$route.fullPath}`
      }
    },
    computed: {
        blog() {
        return this.$store.getters.blog
      },
      blogValid() {
        if (this.blog !== undefined) {
          if (Object.keys(this.blog).length > 0) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      },
      isAuthor() {
          return this.blog.postedBy===this.$store.state.auth.email
      },
      userId() {
        return this.$store.state.auth.id
      },
      isUpvoted() {
        if (this.blog !== undefined) {
          if (this.blog.upvotedBy !== undefined) {
            return this.blog.upvotedBy.includes(this.userId)
          } else {
            return false
          }
        } else {
          return false
        }
      },
      isDownvoted() {
        if (this.blog !== undefined) {
          if (this.blog.downvotedBy !== undefined) {
            return this.blog.downvotedBy.includes(this.userId)
          } else {
            return false
          }
        } else {
          return false
        }
      },
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      },
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
                duration: 2000
              })
            }
          }
        })
      },
      navigate(id) {
        if (this.$store.state.auth.email === this.blog.postedBy) {
          this.$router.push({ name: 'edit-blog', params: { id } })
        } else {
          this.$message({
            type: 'error',
            message: 'Unauthorized access',
            duration: 2000
          })
        }
      },
      deleteBlog(id) {
        if (this.$store.state.auth.email === this.blog.postedBy) {
          this.$alert('Are you sure you want to delete this blog?', 'Delete', {
            confirmButtonText: 'Yes',
            callback: async (action) => {
              if (action === 'confirm') {
                try {
                  this.$message({
                    type: 'success',
                    message: 'Blog deleted successfully',
                    duration: 2000
                  })
                  await DeleteBlog(id)
                  this.$router.back()
                } catch (err) {
                  this.$message({
                    type: 'error',
                    message: err.response.data.message,
                    duration: 2000
                  })
                }
              }

            }
          })
        }
      },
      async vote(action) {
        if (this.isAuthor) {
          this.$message({
            type: 'info',
            message: 'You cannot vote your own blog :)',
            duration: 2000
          })
          return
        }
        if (!this.isAuthenticated) {
          this.$message({
            type: 'info',
            message: 'Please login to vote a blog',
            duration: 1500
          })
          return
        }
        try {
          const res = await VoteBlog(this.blog._id, action, this.userId)
          const updatedBlog = res.data
          this.$store.commit('updateBlog',updatedBlog)
          this.$message({
            type: 'success',
            message: `${action}d successfully`,
            duration: 2000
          })
          
        } catch (err) {
          this.$message({
            type: 'error',
            message: err.response.data.message,
            duration:2000
          })
        }
      }
    }
}
</script>

<style scoped>
.container{
  display: flex;
  margin: 3%;
}
.blog-detail{
  width: 100%;
}
span{
  font-size: large;
}
h2,h3{
  display: inline;
}
h1{
  font-size: xx-large;
}
p{
  text-align: justify;
  line-height: 1.5;
  font-size: large;
}
.tags {
  margin: 2%;
  pointer-events: none;
  color: orange;
}
</style>