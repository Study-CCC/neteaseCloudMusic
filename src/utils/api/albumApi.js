import { HOST } from './apiConfig'
import axios from 'axios'

export const getAlbum = id => {
    const url = HOST + `/album?id=${id}`
    return axios.get(url)
}
export const getArtistAlbum = (id, offset) => {
    if (offset) {
        const url = HOST + `/artist/album?id=${id}&limit=12&offset=${offset}`
        return axios.get(url)
    }
    else {
        const url = HOST + `/artist/album?id=${id}`
        return axios.get(url)
    }
}
export const hotAlbum = () => {
    const url = "/album/newest"
    return axios.get(url)
}
export const topAlbum = ()=>{
    const url = "/top/album"
    return axios.get(url)
}