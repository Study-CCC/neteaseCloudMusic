import * as types from './mutations_type'
import { addSto, deleteSto, clearSto,playSong,getPlaylist,getPlaying } from '../utils/storage'
import axios from 'axios'
const search = (arr,id)=>{
    let len = arr.length
    for(let i=0;i<len;i++){
        if(arr[i].id==id){
            return i
        }
    }
}
// 调节声音
export const setVolumeNum = ({commit},num) =>{
    commit(types.SET_VOLUME,num)
}
// 关闭
export const setPause = ({commit})=>{
    commit(types.SET_ISPLAYING,false)
}
// 前一首
export const setPre = ({commit,state})=>{
    let index = search(state.playlist,state.playing.id)
    let len = state.playlist.length
    if(index==0){
        commit(types.SET_PLAYING,state.playlist[len-1])
    }else commit(types.SET_PLAYING,state.playlist[index-1])
}
// 后一首
export const setNext = ({commit,state})=>{
    let index = search(state.playlist,state.playing.id)
    let len = state.playlist.length
    if(index==len-1){
        commit(types.SET_PLAYING,state.playlist[0])
    }else commit(types.SET_PLAYING,state.playlist[index+1])
}
// 播放
export const setPlay = ({commit})=>{
    commit(types.SET_ISPLAYING,true)

}
// 调节是否播放
export const setIsPlaying = ({commit,state})=>{
    commit(types.SET_ISPLAYING,!state.isPlaying)
}
// 获取音乐列表
export const getList = ({commit})=>{
    commit(types.SET_PLAYLIST,getPlaylist())
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
export const getPlay = ({commit})=>{
    commit(types.SET_ISPLAYING,false)
    commit(types.SET_PLAYING,getPlaying())
}
// 是否mv播放页面 
export const isMvPage = ({commit},flag)=>{
    commit(types.SET_MVPLAY,flag)
}
// 添加音乐  name,id,authName,authId,picUrl,duration
export const addSong = ({ commit }, song) => {
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
export const playInfo =async ({commit},song) =>{
    if(song.type==2){
        song.lyric = false
    }else{
        const {data} = await axios.get(`/lyric?id=${song.id}`);
        // console.log(data)
        song.lyric = data.lrc.lyric
    }
    commit(types.SET_ISPLAYING,true)
    commit(types.SET_PLAYING,song)
    commit(types.SET_PLAYLIST, playSong(song))
}