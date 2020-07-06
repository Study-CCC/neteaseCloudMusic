import state from "./state"

export const playlist = state => state.playlist

export const mvPage = state => state.mvPage

export const playing = state => state.playing

export const volumeNum = state => state.volumeNum

export const isPlaying = state => state.isPlaying

export const user = state => state.user
// playing结构
// {name,authName,authId,id,isPlaying,lyric,picUrl,duration}