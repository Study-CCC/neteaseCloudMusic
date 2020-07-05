const PLAYLIST = 'playlist'
const PLAYING = 'playing'
const LIST_Max_LENGTH = 200
const addCor = (song, type) => {
    let playlist = JSON.parse(localStorage.getItem(PLAYLIST)) || []
    // console.log(playlist)
    const index = playlist.findIndex(item => item.id == song.id)
    if (type == 1) {
        if (index === 0) return playlist
        if (index > 0) playlist.splice(index, 1)
    } else if (type == 2) {
        if (index >= 0) return playlist;
    }
    playlist.unshift(song)
    if (playlist.length > LIST_Max_LENGTH) playlist.pop()
    localStorage.setItem(PLAYLIST, JSON.stringify(playlist))
    // console.log(playlist)
    return playlist
}
// 获取播放列表
export const getPlaylist = ()=>{
    return JSON.parse(localStorage.getItem(PLAYLIST)) || []
}
// 获取正在播放音乐
export const getPlaying = ()=>{
    return JSON.parse(localStorage.getItem(PLAYING)) || [] 
}
// 添加歌曲
export const addSto = (song) => {
    return addCor(song, 1)
}
//删除歌曲
export const deleteSto = (id) => {
    let playlist = JSON.parse(localStorage.getItem(PLAYLIST))
    const index = playlist.findIndex(item => item.id == id)
    playlist.splice(index, 1)
    localStorage.setItem(PLAYLIST, JSON.stringify(playlist))
    return playlist
}
// 清空
export const clearSto = () => {
    localStorage.removeItem(PLAYLIST)
    return []
}
// 播放歌曲
export const playSong = (song) => {
    localStorage.setItem(PLAYING,JSON.stringify(song))
    return addCor(song, 2)
}