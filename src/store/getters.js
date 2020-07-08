import state from "./state"

export const playlist = state => state.playlist

export const mvPlay = state => state.mvPlay

export const playing = state => state.playing

export const volumeNum = state => state.volumeNum

export const isPlaying = state => state.isPlaying

export const user = state => state.user

export const search = state => state.search
// playing结构
// {name,authName,authId,id,isPlaying,lyric,picUrl,duration}