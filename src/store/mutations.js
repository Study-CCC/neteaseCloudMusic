import * as types from './mutations_type'
const mutations = {
    [types. SET_PLAYLIST](state,playlist){
        state.playlist = playlist
    },
    [types.SET_PLAYTIME](state,ct){
        state.playing.currentTime = ct
    },
    [types.SET_PLAYING](state,song){
        state.playing = song
    },
    [types.SET_VOLUME](state,num){
        state.volumeNum=num
    },
    [types.SET_SETISLOGIN](state,flag){
        state.isLogin = flag
    },
    [types.SET_ISPLAYING](state,flag){
        state.isPlaying = flag
    },
    [types.SET_USER](state,user){
        state.user = user
    },
    [types.SET_MVPLAY](state,flag){
        state.mvPlay = flag
    },
    [types.SET_SETSEARCH](state,txt){
        state.search =  txt
    },
    [types.SET_LOGINBOX](state,flag){
        state.showLogin = flag
    },
    [types.SET_COOKIE](state,cookie){
        state.cookie = cookie
    },
    [types.SET_EXTEND](state,flag){
        state.showExtend = flag
    }
}
export default mutations