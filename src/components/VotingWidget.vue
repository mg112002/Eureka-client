<template>
  <div>
    <button><i class="el-icon-caret-top icon"></i></button>
    <p>{{ votes }}</p>
    <button><i class="el-icon-caret-bottom icon"></i></button>

  </div>
</template>

<script>
export default {
    name: 'VotingWidget',
    data() {
        return {
            votes: this.blog.upvotedBy.length - this.blog.downvotedBy.length,

        }
    },
    props: {
        blog: {
            type: Object,
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
.icon:hover{
    color:lightgreen
}
</style>