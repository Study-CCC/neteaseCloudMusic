import * as types from './mutations_type'
import { addSto, deleteSto,addPlaylist, clearSto, playSong, getPlaylist, getPlaying } from '../utils/storage'
import axios from 'axios'
const search = (arr, id) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i].id == id) {
            return i
        }
    }
}
const djInit = (item) => {
    let value = {}
    value.name=item.name,
    value.id=item.id,
    value.currentTime=0,
    value.authName=item.dj.brand,
    value.authId=item.dj.userId,
    value.duration=item.duration,
    value.picUrl=item.coverUrl,
    value.type=2,
    value.songId=item.mainTrackId
    return value
}
const songInit = (value) => {
    if(value.dj) return djInit(value)
    if(value.authName) return value;
    let song = {};
    song.id = value.id,
        song.name = value.name;
        // console.log(value)
    if (value.duration) {
        song.authId = value.artists[0].id,
            song.picUrl = value.artists[0].img1v1Url,
            song.duration = value.duration,
            song.authName = value.artists[0].name;
    } else {
        song.authName = value.ar[0].name,
            song.authId = value.ar[0].id,
            song.picUrl = value.al.picUrl,
            song.duration = value.dt;
    }
    return song;
}
const getLyric = async (song)=>{
    if(song.type==2) return ''
    const { data } = await axios.get(`/lyric?id=${song.id}`);
    if(data.nolyric) return ''
    // console.log(data)
    return data.lrc.lyric
}
// 调节声音
export const setVolumeNum = ({ commit }, num) => {
    commit(types.SET_VOLUME, num)
}
// 设置用户信息
export const setUser = ({ commit }, user) => {
    commit(types.SET_USER, user)
}
// 关闭
export const setPause = ({ commit }) => {
    commit(types.SET_ISPLAYING, false)
}
// 前一首
export const setPre = ({ commit, state }) => {
    let index = search(state.playlist, state.playing.id)
    let len = state.playlist.length
    if (index == 0) {
        commit(types.SET_PLAYING, state.playlist[len - 1])
    } else commit(types.SET_PLAYING, state.playlist[index - 1])
}
// 后一首
export const setNext = ({ commit, state }) => {
    let index = search(state.playlist, state.playing.id)
    let len = state.playlist.length
    if (index == len - 1) {
        commit(types.SET_PLAYING, state.playlist[0])
    } else commit(types.SET_PLAYING, state.playlist[index + 1])
}
// 播放
export const setPlay = ({ commit }) => {
    commit(types.SET_ISPLAYING, true)
}
// 调节是否播放
export const setIsPlaying = ({ commit, state }) => {
    commit(types.SET_ISPLAYING, !state.isPlaying)
}
// 添加播放列表
export const addList = async ({commit},playlist) =>{
    // console.log(playlist)
    playlist = playlist.map(item=>{
       return songInit(item)
    })
    addPlaylist(playlist)
    playlist[0].lyric =await getLyric(playlist[0])
    commit(types.SET_PLAYING, playlist[0])
    commit(types.SET_PLAYLIST,playlist)
}
// 获取音乐列表
export const getList = ({ commit }) => {
    commit(types.SET_PLAYLIST, getPlaylist())
}
/*
addSong({
    id:,
    name:,
    authName:,
    authId:,
    picUrl:,
    duration:
  })*/
// 获取正在播放音乐
export const getPlay = ({ commit }) => {
    commit(types.SET_ISPLAYING, false)
    commit(types.SET_PLAYING, getPlaying())
}
// 是否mv播放页面 
export const isMvPage = ({ commit }, flag) => {
    commit(types.SET_MVPLAY, flag)
}
// 添加音乐  name,id,authName,authId,picUrl,duration
export const addSong = ({ commit }, song) => {
    song = songInit(song)
    commit(types.SET_PLAYLIST, addSto(song))
}
// 删除音乐
export const deleteSong = ({ commit }, id) => {
    commit(types.SET_PLAYLIST, deleteSto(id))
}
// 清空列表
export const clearList = ({ commit }) => {
    commit(types.SET_PLAYLIST, clearSto())
}
// 播放音乐
export const playInfo = async ({ commit }, song) => {
    song = songInit(song)
    if (song.type == 2) {
        song.lyric = false
    } else {
        song.lyric =await getLyric(song)
    }
    commit(types.SET_ISPLAYING, true)
    commit(types.SET_PLAYING, song)
    commit(types.SET_PLAYLIST, playSong(song))
}