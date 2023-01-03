import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/Login.vue'
import RegisterPage from '@/components/Register.vue'
import BlogsList from '@/components/BlogsList'
import NewsLetter from '@/components/NewsLetter.vue'
import TagsPage from '@/components/TagsPage.vue'
import store from '@/store'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'login',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'blogs',
            path: '/blogs',
            component: BlogsList,
            props: true
        },
        {
            name: 'register',
            path: '/register',
            component: RegisterPage
        },
        {
            name: 'blog-details',
            path: '/blogs/:id',
            props: true,
            // component: BlogDetail,
        },
        {
            name: 'blogs-tags',
            path: '/tags',
            props: true,
            component: TagsPage
        },
        {
            name: 'blogs-tag',
            path: '/tags/:tag',
            props: true,
            component: BlogsList
        },
        {
            name: 'blogs-category',
            path: '/categories/:category',
            props: true,
            component: BlogsList
        },
        {
            name: 'newsletter',
            path: '/newsletter',
            component: NewsLetter
        },
        {
            name: 'add-blog',
            path: '/add',
            // component: AddBlog
        },
        {
            name: 'not-found',
            path: '*',
            // component: PageNotFound
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'add-blog' && !store.getters.isAuthenticated) {
        return next({
            name: 'login'
        })
    }
    if (to.name === 'blogs-category') {
        const blogs = [
            {
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
            }
        ]
        store.commit('updateBlogs', blogs)
    }
    next()
})

export default router