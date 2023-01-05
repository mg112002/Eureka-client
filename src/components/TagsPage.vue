<template>
    <el-row class="row" :gutter="50" style="margin-right:0">
        <el-col v-for="tag in tags" :key="tag" :sm="24" :md="12" :lg="8" class="column">
            <div class="grid-content" @click="navigate(tag)">
                <div class="bg-color"></div>
                <h3>{{ tag }}</h3>
            </div>   
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'TagsPage',
    data() {
        return {
            tags: [
                'Array',
                'Hashmap',
                'Tree',
                'LinkedList',
                'Queue',
                'Stack',
                'Graph',
                'DynamicProgramming'
            ]
        }
    },
    methods: {
        navigate(tag) {
            this.$router.push({name:'blogs-tag',params:{tag}})
        }
    }
}
</script>

<style scoped>
.row{
    z-index: -1;
    padding-bottom: 2%;
    padding-left: 5%;
}
.grid-content{
    height: 15rem;
    width: 15rem;
    text-align: center;
    cursor: pointer;
}
.bg-color{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin: auto;
    background-color: lightblue;
}
.column{
    margin: 3% 0;
}

@media only screen and (max-width: 710px ) {
    .column{
        margin: 0 25% 25%;

    }
}

@media only screen and (max-width:  990px) {
    .column {
        margin: 0 25% 25%;

    }
}
</style>