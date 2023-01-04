<template>
  <div v-if="blog">
    <button :disabled="isUpvoted"><i class="el-icon-caret-top up-icon" :style="isUpvoted?'color:green':''"></i></button>
    <p>{{ votes }}</p>
    <button :disabled="isDownvoted"><i class="el-icon-caret-bottom down-icon" :style="isDownvoted?'color:red':''"></i></button>
  </div>
</template>

<script>
export default {
    name: 'VotingWidget',
    data() {
        return {
            votes: this.blog.upvotedBy.length - this.blog.downvotedBy.length,
            isUpvoted: this.blog.upvotedBy.includes(this.$store.state.auth.id),
            // isDownvoted: this.blog.downvotedBy.includes(this.$store.state.email),
            isDownvoted: this.blog.downvotedBy.includes(this.$store.state.auth.id)
        }
    },
    props: {
        blog: {
            required:true
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