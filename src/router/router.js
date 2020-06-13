import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Discover from '../components/discover/discover'
import My from '../components/my/my'
import Friend from '../components/friend/friend'
import PlaylistCon from '../components/detailPage/playlistCon/playlistCon'
import SongCon from '../components/detailPage/songCon/songCon'
import AlbumCon from '../components/detailPage/albumCon/albumCon'
import ArtistCon from '../components/detailPage/artistCon/artist'
import AllAlbum from '../components/detailPage/artistCon/allAlbum'
import HotWork from '../components/detailPage/artistCon/hotWork'
import UserHome from '../components/detailPage/user/Home/home'
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
                    }, {
                        path:'user/home',
                        component: UserHome
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
            },{
                path:'/song',
                component:SongCon
            },{
                path:'/album',
                component:AlbumCon
            },{
                path: '/artist',
                component:ArtistCon,
                redirect:'/artist/album',
                children:[
                    {
                        path:'/artist/album',
                        component:AllAlbum
                    },
                    {
                        path:'/artist/song',
                        components:HotWork
                    }
                ]
            }
        ]
    },

]
const router = new VueRouter({
    routes
})

export default router