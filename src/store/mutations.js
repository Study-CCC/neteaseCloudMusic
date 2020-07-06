import * as types from './mutations_type'
const mutations = {
    [types. SET_PLAYLIST](state,playlist){
        state.playlist = playlist
    },
    [types.MV_PAGE](state,flag){
        state.mvPlay = flag
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
    [types.SET_ISPLAYING](state,flag){
        state.isPlaying = flag
    },
    [types.SET_USER](state,user){
        state.user = user
    }
}
export default mutations