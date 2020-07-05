import state from "./state"

export const playlist = state => state.playlist

export const mvPage = state => state.mvPage

export const playing = state => state.playing

export const volumeNum = state => state.volumeNum

export const isPlaying = state => state.isPlaying
// playing结构
// {name,ar,id,isPlaying,lyric,picUrl,duration}