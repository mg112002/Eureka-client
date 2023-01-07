<template>
  <div v-if="blog!==undefined">
    <button :disabled="isUpvoted" @click="vote('upvote')"><i class="el-icon-caret-top up-icon" :style="isUpvoted?'color:green':''"></i></button>
    <p>{{ votes }}</p>
    <button :disabled="isDownvoted" @click="vote('downvote')"><i class="el-icon-caret-bottom down-icon" :style="isDownvoted?'color:red':''"></i></button>
  </div>
</template>

<script>

import { VoteBlog } from '@/services/userServices'

export default {
    name: 'VotingWidget',
    props: {
        blog: {
            required: true
        }
    },
    data() {
        return {
            updatedBlog:this.blog
        }
    },
    methods: {
        async vote(action) {
            if (!this.isAuthenticated) {
                this.$message({
                    type: 'info',
                    message: 'Please login to vote a blog'
                })
                return
            }
            try {
                const res = await VoteBlog(this.blog._id, action, this.userId)
                this.updatedBlog = res.data
                this.$message({
                    type: 'success',
                    message: `${action}ed successfully`
                })
            } catch (err) {
                this.$message({
                    type: 'error',
                    message: err.response.data.message
                })
            }
        }
    },
    computed: {
        userId() {
            return this.$store.state.auth.id
        },
        votes() {
            if (this.blog !== undefined) {
                if (this.updatedBlog.upvotedBy !== undefined) {
                    if (this.updatedBlog.upvotedBy.length) {
                        return this.updatedBlog.upvotedBy.length
                    } else {
                        return -this.updatedBlog.downvotedBy.length
                    }
                } else {
                    return 0
                }
            } else {
                return 0
            }
        },
        isUpvoted() {
            if (this.blog !== undefined) {
                if (this.updatedBlog.upvotedBy !== undefined) {
                    return this.updatedBlog.upvotedBy.includes(this.userId)
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
                    return this.updatedBlog.downvotedBy.includes(this.userId)
                } else {
                    return false
                }
            } else {
                return false
            }
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    }
}
</script>

<style scoped>
div{
    display: inline;
    margin: auto 2%;
}
button{
    background-color:transparent ;
    border: none;
    cursor: pointer;
}
i{
    display: block;
    font-size: 3rem;
}
p{
    text-align: center;
    margin: auto;
    font-size: 1.5rem;
}
.up-icon:hover{
    color:green
}
.down-icon:hover{
    color:red
}

@media only screen and (max-width: 710px) {
    div{
        margin: auto 0;
    }
}
</style>