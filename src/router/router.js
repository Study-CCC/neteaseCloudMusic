import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Discover from '../components/discover/discover'
import My from '../components/my/my'
import Friend from '../components/friend/friend'
import PlaylistCon from '../components/detailPage/playlistCon/playlistCon'
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
        redirect: 'discover',
        children: [
            {
                path: 'discover',
                component: Discover,
                children: [
                    {
                        path:'/',
                        redirect:'recommend'
                    },
                    {
                        path: 'recommend',
                        component: Recommend
                    }, {
                        path: 'toplist',
                        component: Toplist
                    },
                    {
                        path: 'playlist',
                        component: Playlist
                    }, {
                        path: 'djradio',
                        component: Djradio
                    }, {
                        path: 'artist',
                        component: Artist
                    }, {
                        path: 'album',
                        component: Album
                    }
                ]
            },

            {
                path: '/my',
                component: My
            },
            {
                path: '/friend',
                component: Friend
            },
            {
                path:'/playlist',
                component:PlaylistCon
            }
        ]
    },

]
const router = new VueRouter({
    routes
})

export default router