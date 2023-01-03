<template>
<div>
<el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router=true
    background-color="#8D9EFF" text-color="#001253" active-text-color="#0027b3" style="position:fixed;width:100%">
    <el-menu-item index="/"  style="border-bottom-color: transparent"><img src="../../public/logo.png"/></el-menu-item>
        <el-menu-item style="border-bottom-color: transparent;width:40%">
            <el-input 
            placeholder="Search by keyword or phrase" 
            v-model="search"
            style="width:92%"
            clearable />
            <el-button style="background-color:#8D9EFF; border-color: #8D9EFF;padding:1%;margin-left: 2%;" @click="setBlogs">
            <i class="el-icon-search"></i>
            </el-button>
        </el-menu-item>
        <el-menu-item v-if="$store.getters.isAuthenticated" index="/add">
            <i class="el-icon-plus" ></i>
            New Blog
        </el-menu-item>
        <el-menu-item index="/#about">AboutUs</el-menu-item>
        <div v-if="$store.getters.isAuthenticated" style="float:right">
        <el-menu-item  index="5">Hello{{ $store.state.email }}</el-menu-item>
        <el-menu-item  index="/login">Logout</el-menu-item>
        </div>
    <el-menu-item v-else index="/login">Login</el-menu-item>
</el-menu>

</div>
</template>

<script>
export default {
    name:'NavBar',
    data() {
        return {
            activeIndex: '1',
            search: '',
            blogs: [{
                title: 'Blog1', _id: '12345',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit itaque consequuntur ipsam, hic libero cum quas dolor obcaecati quod autem quae rem! Expedita odio explicabo facere, alias cumque delectus non? Suscipit atque facilis nesciunt maxime beatae, fuga aperiam libero autem facere? Esse nobis in cupiditate dolorum! Recusandae et, iusto nobis architecto tenetur labore libero deleniti sunt iure soluta, temporibus excepturi. Possimus, error architecto facere beatae sequi odio quisquam voluptatum quo minima in est, corrupti nobis delectus? Ullam, tempore eaque distinctio beatae iusto voluptas, natus inventore sed libero nemo consequatur velit? Mollitia, quibusdam natus, explicabo tempora delectus perferendis quo excepturi placeat neque esse et, reiciendis sed doloremque maiores ab fuga dolores! Libero, debitis laboriosam! Explicabo libero fugiat est voluptatem vel veniam. Soluta, architecto ipsa porro nesciunt accusantium cumque dicta, repellat ullam labore eligendi omnis. Sapiente nemo, nulla repellat veritatis, odio, hic eos minima error repudiandae voluptates non ipsam vero. Ad, animi. Voluptatibus facilis magni doloribus quibusdam esse facere blanditiis iste debitis cum quos distinctio nihil nulla, quisquam soluta ducimus quam sed eius consequatur quaerat similique eaque commodi quas odio! Error, dolores. Itaque, excepturi iste! Pariatur, laborum. Aliquid excepturi velit facere aspernatur quo fuga voluptates, sed necessitatibus repudiandae, deleniti totam repellendus exercitationem? Quos laboriosam veritatis illum aut rerum eaque eos voluptas voluptates. Soluta hic aperiam vel temporibus ipsa minus ad. Maiores illo dignissimos, blanditiis molestiae nam beatae asperiores. Accusamus tempore quibusdam assumenda. Quae officia quaerat aperiam eveniet dolorum ipsam nesciunt omnis est. Ducimus consequuntur nihil quia ipsum cupiditate dolore voluptatum quos dicta voluptates corrupti, natus, doloribus modi tempore, voluptate minima beatae soluta suscipit est excepturi nisi reiciendis totam fugit! Commodi, nihil a. Sint alias vero distinctio nisi fuga, facere illo maiores, sed delectus quae, vitae quam architecto. Voluptatibus at, laboriosam ducimus explicabo totam iure neque molestias, dolor facere blanditiis sunt? Deleniti, incidunt. Cupiditate quia ratione rem qui corrupti voluptas minima dolorum nobis amet culpa vel saepe sunt ab est laborum optio repellendus, voluptatibus illum ex delectus. Fugit officia deleniti veniam corrupti aliquam! Alias consectetur maiores ex amet nulla dolorum, exercitationem dignissimos, repellat eligendi id nemo debitis excepturi, ea unde similique quam fugiat! Similique expedita tempora labore consequuntur dolore dolores et pariatur quidem. Recusandae sequi, quas, quam facilis ab similique voluptate, sunt laborum maxime debitis quis et ea ratione harum itaque fugiat tenetur sapiente cum corporis vitae atque distinctio accusamus reiciendis libero. Eos. Velit, minima doloribus voluptates, sint omnis vitae dicta dolorum, sed repellat neque repellendus ut reiciendis unde rerum dolorem fuga? Iusto in tenetur alias rerum magni voluptatum ratione sunt vel aspernatur! Esse nihil consequatur cumque expedita dolor quos, ullam ut rem. Culpa ullam at eius molestiae non quis incidunt libero repellendus perspiciatis ratione! Architecto delectus explicabo aperiam ipsum nam est. Similique. Esse dolor blanditiis asperiores unde animi harum quos aut eaque quas ratione, laudantium nostrum minus, autem praesentium quisquam',
                imageUrl: 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg',
                upvotedBy: ['a', 'b', 'c'],
                downvotedBy: ['d'],
                tags: ['Hello1', 'Hello123', 'Hello1234', 'Hello1345363455tttttt'],
                category:'C++'
            }, {
                title: 'Blog2', _id: '12346',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit itaque consequuntur ipsam, hic libero cum quas dolor obcaecati quod autem quae rem! Expedita odio explicabo facere, alias cumque delectus non? Suscipit atque facilis nesciunt maxime beatae, fuga aperiam libero autem facere? Esse nobis in cupiditate dolorum! Recusandae et, iusto nobis architecto tenetur labore libero deleniti sunt iure soluta, temporibus excepturi. Possimus, error architecto facere beatae sequi odio quisquam voluptatum quo minima in est, corrupti nobis delectus? Ullam, tempore eaque distinctio beatae iusto voluptas, natus inventore sed libero nemo consequatur velit? Mollitia, quibusdam natus, explicabo tempora delectus perferendis quo excepturi placeat neque esse et, reiciendis sed doloremque maiores ab fuga dolores! Libero, debitis laboriosam! Explicabo libero fugiat est voluptatem vel veniam. Soluta, architecto ipsa porro nesciunt accusantium cumque dicta, repellat ullam labore eligendi omnis. Sapiente nemo, nulla repellat veritatis, odio, hic eos minima error repudiandae voluptates non ipsam vero. Ad, animi. Voluptatibus facilis magni doloribus quibusdam esse facere blanditiis iste debitis cum quos distinctio nihil nulla, quisquam soluta ducimus quam sed eius consequatur quaerat similique eaque commodi quas odio! Error, dolores. Itaque, excepturi iste! Pariatur, laborum. Aliquid excepturi velit facere aspernatur quo fuga voluptates, sed necessitatibus repudiandae, deleniti totam repellendus exercitationem? Quos laboriosam veritatis illum aut rerum eaque eos voluptas voluptates. Soluta hic aperiam vel temporibus ipsa minus ad. Maiores illo dignissimos, blanditiis molestiae nam beatae asperiores. Accusamus tempore quibusdam assumenda. Quae officia quaerat aperiam eveniet dolorum ipsam nesciunt omnis est. Ducimus consequuntur nihil quia ipsum cupiditate dolore voluptatum quos dicta voluptates corrupti, natus, doloribus modi tempore, voluptate minima beatae soluta suscipit est excepturi nisi reiciendis totam fugit! Commodi, nihil a. Sint alias vero distinctio nisi fuga, facere illo maiores, sed delectus quae, vitae quam architecto. Voluptatibus at, laboriosam ducimus explicabo totam iure neque molestias, dolor facere blanditiis sunt? Deleniti, incidunt. Cupiditate quia ratione rem qui corrupti voluptas minima dolorum nobis amet culpa vel saepe sunt ab est laborum optio repellendus, voluptatibus illum ex delectus. Fugit officia deleniti veniam corrupti aliquam! Alias consectetur maiores ex amet nulla dolorum, exercitationem dignissimos, repellat eligendi id nemo debitis excepturi, ea unde similique quam fugiat! Similique expedita tempora labore consequuntur dolore dolores et pariatur quidem. Recusandae sequi, quas, quam facilis ab similique voluptate, sunt laborum maxime debitis quis et ea ratione harum itaque fugiat tenetur sapiente cum corporis vitae atque distinctio accusamus reiciendis libero. Eos. Velit, minima doloribus voluptates, sint omnis vitae dicta dolorum, sed repellat neque repellendus ut reiciendis unde rerum dolorem fuga? Iusto in tenetur alias rerum magni voluptatum ratione sunt vel aspernatur! Esse nihil consequatur cumque expedita dolor quos, ullam ut rem. Culpa ullam at eius molestiae non quis incidunt libero repellendus perspiciatis ratione! Architecto delectus explicabo aperiam ipsum nam est. Similique. Esse dolor blanditiis asperiores unde animi harum quos aut eaque quas ratione, laudantium nostrum minus, autem praesentium quisquam',
                imageUrl: 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg',
                upvotedBy: ['a', 'b', 'c'],
                downvotedBy: ['d'],
                tags: ['Hello1345363455tttttt', 'Hello123', 'Hello1234', 'Hello1'],
                category: 'Python'
            },
            {
                title: 'Blog3', _id: '12347',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit itaque consequuntur ipsam, hic libero cum quas dolor obcaecati quod autem quae rem! Expedita odio explicabo facere, alias cumque delectus non? Suscipit atque facilis nesciunt maxime beatae, fuga aperiam libero autem facere? Esse nobis in cupiditate dolorum! Recusandae et, iusto nobis architecto tenetur labore libero deleniti sunt iure soluta, temporibus excepturi. Possimus, error architecto facere beatae sequi odio quisquam voluptatum quo minima in est, corrupti nobis delectus? Ullam, tempore eaque distinctio beatae iusto voluptas, natus inventore sed libero nemo consequatur velit? Mollitia, quibusdam natus, explicabo tempora delectus perferendis quo excepturi placeat neque esse et, reiciendis sed doloremque maiores ab fuga dolores! Libero, debitis laboriosam! Explicabo libero fugiat est voluptatem vel veniam. Soluta, architecto ipsa porro nesciunt accusantium cumque dicta, repellat ullam labore eligendi omnis. Sapiente nemo, nulla repellat veritatis, odio, hic eos minima error repudiandae voluptates non ipsam vero. Ad, animi. Voluptatibus facilis magni doloribus quibusdam esse facere blanditiis iste debitis cum quos distinctio nihil nulla, quisquam soluta ducimus quam sed eius consequatur quaerat similique eaque commodi quas odio! Error, dolores. Itaque, excepturi iste! Pariatur, laborum. Aliquid excepturi velit facere aspernatur quo fuga voluptates, sed necessitatibus repudiandae, deleniti totam repellendus exercitationem? Quos laboriosam veritatis illum aut rerum eaque eos voluptas voluptates. Soluta hic aperiam vel temporibus ipsa minus ad. Maiores illo dignissimos, blanditiis molestiae nam beatae asperiores. Accusamus tempore quibusdam assumenda. Quae officia quaerat aperiam eveniet dolorum ipsam nesciunt omnis est. Ducimus consequuntur nihil quia ipsum cupiditate dolore voluptatum quos dicta voluptates corrupti, natus, doloribus modi tempore, voluptate minima beatae soluta suscipit est excepturi nisi reiciendis totam fugit! Commodi, nihil a. Sint alias vero distinctio nisi fuga, facere illo maiores, sed delectus quae, vitae quam architecto. Voluptatibus at, laboriosam ducimus explicabo totam iure neque molestias, dolor facere blanditiis sunt? Deleniti, incidunt. Cupiditate quia ratione rem qui corrupti voluptas minima dolorum nobis amet culpa vel saepe sunt ab est laborum optio repellendus, voluptatibus illum ex delectus. Fugit officia deleniti veniam corrupti aliquam! Alias consectetur maiores ex amet nulla dolorum, exercitationem dignissimos, repellat eligendi id nemo debitis excepturi, ea unde similique quam fugiat! Similique expedita tempora labore consequuntur dolore dolores et pariatur quidem. Recusandae sequi, quas, quam facilis ab similique voluptate, sunt laborum maxime debitis quis et ea ratione harum itaque fugiat tenetur sapiente cum corporis vitae atque distinctio accusamus reiciendis libero. Eos. Velit, minima doloribus voluptates, sint omnis vitae dicta dolorum, sed repellat neque repellendus ut reiciendis unde rerum dolorem fuga? Iusto in tenetur alias rerum magni voluptatum ratione sunt vel aspernatur! Esse nihil consequatur cumque expedita dolor quos, ullam ut rem. Culpa ullam at eius molestiae non quis incidunt libero repellendus perspiciatis ratione! Architecto delectus explicabo aperiam ipsum nam est. Similique. Esse dolor blanditiis asperiores unde animi harum quos aut eaque quas ratione, laudantium nostrum minus, autem praesentium quisquam',
                imageUrl: 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg',
                upvotedBy: ['c', 'b', 'd'],
                downvotedBy: ['a'],
                tags: ['Hello13453634', 'Hello12355tttttt'],
                category: 'Java'
            }]
        };
    },
    methods: {
        // async getResults() {
        //     //request blogs with the keyword
        // }
        setBlogs() {
            const blogs=this.blogs
            if (blogs) {
                this.$store.state.blogs = blogs
                this.$message({
                    type: 'success',
                    message: 'Match found',
                    duration: 2000
                })
                this.$router.push({name:'blogs',query:{search:this.search}})
            }
            
        }
    }
}
</script>

<style scoped>
el-menu{
    position: sticky;
    top: 0;
}
img{
    height: 88%;
    width:100%
}
el-button{
background-color:#8D9EFF;
}
i {
    color: #001253;
}
.el-icon-search{
    color:#001253
}
.el-icon-search:hover{
    color: #0027b3;
}
</style>