<template>
  <div v-if="blog!==undefined">
    <button :disabled="upvoted" @click="vote('Upvoted')"><i class="el-icon-caret-top up-icon" :style="upvoted?'color:green':''"></i></button>
    <p>{{ votes }}</p>
    <button :disabled="downvoted" @click="vote('Downvoted')"><i class="el-icon-caret-bottom down-icon" :style="downvoted?'color:red':''"></i></button>
  </div>
</template>

<script>
export default {
    name: 'VotingWidget',
    props: {
        blog: {
            required: true
        }
    },
    data() {
        return {
            // votes: this.blog.upvotedBy.length - this.blog.downvotedBy.length,
            upvoted: false,
            // isUpvoted: this.blog.upvotedBy.includes(this.$store.state.auth.id),
            // isDownvoted: this.blog.downvotedBy.includes(this.$store.state.email),
            // isDownvoted: this.blog.downvotedBy.includes(this.$store.state.auth.id)
            downvoted: false
        }
    },
    methods: {
        vote(type) {
            if (type === "Upvoted") {
                this.upvoted = true
                this.downvoted =false
            } else {
                this.downvoted = true
                this.upvoted = false
            }
            this.$message({
                type: 'success',
                message: `${type} successfully`,
                duration: 2000
            })
        }
    },
    computed: {
        votes() {
            let count=0,up=0,down=0
            if (this.blog !== undefined) {
                if (this.blog.upvotedBy !== undefined) {
                    up= this.blog.upvotedBy.length
                }
                if (this.blog.downvotedBy !== undefined) {
                    down = this.blog.downvotedBy.length
                }
                count = up-down
            }
            return count
        },
        
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