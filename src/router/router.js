import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
// import Friend from '../views/friend'
// import My from '../views/my'
import Toplist from '../components/discover/toplist/toplist'
import Recommend from '../components/discover/recommend/recommend'
import Playlist from '../components/discover/playlist/playlist'
import Djradio from '../components/discover/djradio/djradio'
import Artist from '../components/discover/artist/artist'
import Album from '../components/discover/album/album'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path:'/discover',
                component:Recommend,
                // redirect:'/recommend',
                children:[
                   
                ]
            },
            {
                path: '/toplist',
                component: Toplist
            },
            {
                path: '/playlist',
                component: Playlist
            }, {
                path: '/recommend',
                component: Recommend
            }, {
                path: '/djradio',
                component: Djradio
            }, {
                path: '/artist',
                component: Artist
            }, {
                path: '/album',
                component: Album
            }
            // {
            //     path:'/my',
            //     component:''
            // },{
            //     path:'/friend',
            //     component:''
            // }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router