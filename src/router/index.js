import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Posts from '../views/Posts'
import Post from '../views/Post'
import PostList from '../views/PostList'
import UpdatePost from '../views/UpdatePost'

const routes = [
    {
        path: '/', 
        component: Login,
        name: 'Login'
    },
    {
        path: '/home',
        component: Home,
        name: 'Home'
    },
    {
        path: '/posts',
        component: Posts,
        name: 'Posts',
        children: [
            {
                path: ':id',
                component: Post
            },
            {
                path: '',
                component: PostList
            }
        ]
    },
    {
        path: '/add',
        component: UpdatePost,
        name: 'add'
    },
    {
        path: '/edit/:id',
        component: UpdatePost,
        name: 'edit'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.isAuthenticated) next({ 
        name: 'Login' 
    })
    else next()
})

export default router