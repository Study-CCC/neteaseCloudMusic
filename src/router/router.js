import Vue  from 'vue'
import VueRouter from 'vue-router'
const Home =()=> import('../views/Home')
const Discover =()=> import('../components/discover/discover')
const myPage =()=> import('../components/my/myPage')
const FriendLogin =()=> import('../components/friend/friendLogin')
const Mv =()=> import('../page/mvCon/mv')
const PlaylistCon =()=> import('../page/playlistCon/playlistCon')
const SongCon =()=> import('../page/songCon/songCon')
const AlbumCon =()=> import('../page/albumCon/albumCon')
const ArtistCon =()=> import('../page/artistCon/artist')
const AllAlbum =()=> import('../page/artistCon/allAlbum')
const HotWork =()=> import('../page/artistCon/hotWork')
const MvCon =()=> import('../page/artistCon/mvBar')
const DescCon =()=> import('../page/artistCon/descCon')
const UserHome =()=> import('../page/user/Home/home')
const Fans =()=> import('../page/user/Home/fans')
const EventCon =()=> import('../page/user/Home/event')
const Default =()=> import('../page/user/Home/default')
const Category =()=> import('../page/category/category')
const DjradioCon =()=> import('../page/djradio/djradio')
const ProgramCon =()=> import('../page/program/program')
const Toplist =()=> import('../components/discover/toplist/toplist')
const Recommend =()=> import('../components/discover/recommend/recommend')
const Taste =()=> import('../components/discover/taste/taste')
const Playlist =()=> import('../components/discover/playlist/playlist')
const Djradio =()=> import('../components/discover/djradio/djradio')
const Artist =()=> import('../components/discover/artist/artist')
const Album =()=> import('../components/discover/album/album')
const Search =()=> import('../page/search/search')
const Updata =()=> import('../page/user/updata')
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
                    }, {
                        path: 'djradio/category',
                        component: Category
                    },
                    {
                        path: 'djradio',
                        component: Djradio,
                        children: [
                            {
                                path: 'category',
                                component: Category
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
                            }, {
                                path: '/artist/desc',
                                component: DescCon
                            }
                        ]
                    }
                ]
            },
            {
                path: '/my',
                component: myPage
            },
            {
                path: '/search',
                component: Search
            },
            {
                path: '/friend',
                component: FriendLogin
            },
            {
                path: '/mv',
                component: Mv
            },
            {
                path: '/user',
                component: UserHome,
                redirect: '/home',
                children: [
                    {
                        path: 'home',
                        component: Default
                    },
                    {
                        path: 'fans',
                        component: Fans
                    }, {
                        path: 'follows',
                        component: Fans
                    }, {
                        path: 'event',
                        component: EventCon
                    }
                ]
            },
            {
                path: '/djradio',
                component: DjradioCon
            }, {
                path: '/program',
                component: ProgramCon
            },{
                path: '/user/updata',
                component: Updata
            }
        ]
    }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes
})
export default router