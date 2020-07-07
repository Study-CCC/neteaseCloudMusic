import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Discover from '../components/discover/discover'
import myLogin from '../components/my/myLogin'
import myMusic from '../components/my/myMusic'
import FriendLogin from '../components/friend/friendLogin'
import Mv from '../components/detailPage/mvCon/mv'
import PlaylistCon from '../components/detailPage/playlistCon/playlistCon'
import SongCon from '../components/detailPage/songCon/songCon'
import AlbumCon from '../components/detailPage/albumCon/albumCon'
import ArtistCon from '../components/detailPage/artistCon/artist'
import AllAlbum from '../components/detailPage/artistCon/allAlbum'
import HotWork from '../components/detailPage/artistCon/hotWork'
import MvCon from '../components/detailPage/artistCon/mvBar'
import DescCon from '../components/detailPage/artistCon/descCon'
import UserHome from '../components/detailPage/user/Home/home'
import Fans from '../components/detailPage/user/Home/fans'
import EventCon from '../components/detailPage/user/Home/event'
import Default from '../components/detailPage/user/Home/default'
import Category from '../components/detailPage/category/category'
import DjradioCon from '../components/detailPage/djradio/djradio'
import ProgramCon from '../components/detailPage/program/program'
import Toplist from '../components/discover/toplist/toplist'
import Recommend from '../components/discover/recommend/recommend'
import Taste from '../components/discover/taste/taste'
import Playlist from '../components/discover/playlist/playlist'
import Djradio from '../components/discover/djradio/djradio'
import Artist from '../components/discover/artist/artist'
import Album from '../components/discover/album/album'
import Search from '../components/detailPage/search/search'
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
                        path: '/',
                        redirect: 'recommend'
                    },
                    {
                        path: 'recommend',
                        component: Recommend
                        // component:Taste
                    }, {
                        path: 'toplist',
                        component: Toplist
                    },
                    {
                        path: 'playlist',
                        component: Playlist
                    },{
                        path:'djradio/category',
                        component:Category
                    },
                     {
                        path: 'djradio',
                        component: Djradio,
                        children:[
                            {
                                path:'category',
                                component:Category
                            }
                        ]
                    }, {
                        path: 'artist/cat',
                        component: Artist
                    }, {
                        path: 'album',
                        component: Album
                    }
                    ,
                    {
                        path: '/playlist',
                        component: PlaylistCon
                    }, {
                        path: '/song',
                        component: SongCon
                    }, {
                        path: '/album',
                        component: AlbumCon
                    }, {
                        path: '/artist',
                        component: ArtistCon,
                        redirect: '/artist/song',
                        children: [
                            {
                                path: '/artist/album',
                                component: AllAlbum
                            },
                            {
                                path: '/artist/song',
                                component: HotWork
                            },
                            {
                                path: '/artist/mv',
                                component: MvCon
                            },{
                                path:'/artist/desc',
                                component:DescCon
                            }
                        ]
                    }
                ]
            },
            {
                path: '/my',
                // component: myLogin
                component:myMusic
            },
            {
                path:'/search',
                component:Search
            },
            {
                path: '/friend',
                component: FriendLogin
            },
            {
                path:'/mv',
                component:Mv
            },
            {
                path: '/user',
                component: UserHome,
                redirect:'/home',
                children: [
                    {
                        path: 'home',
                        component: Default
                    },
                    {
                        path: 'fans',
                        component: Fans
                    },{
                        path:'follows',
                        component:Fans
                    },{
                        path:'event',
                        component:EventCon
                    }
                ]
            },
            {
                path:'/djradio',
                component:DjradioCon
            },{
                path:'/program',
                component:ProgramCon
            }
        ]
    }

]
const router = new VueRouter({
    routes
})

export default router