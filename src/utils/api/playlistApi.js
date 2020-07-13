import { HOST } from './apiConfig'
import axios from 'axios'

export const getAlbumList = (id) => {
    const url = HOST + `/album/detail?id=${id}`
    return axios.get(url)
}

export const getPlaylist = (id,cookie) => {
    if(cookie) {
        const url = HOST + `/playlist/detail?id=${id}&cookie=${cookie}`
        return axios.get(url)
    }else{
        const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
    }
    
}

export const getCatlist = () => {
    const url = HOST + "/playlist/catlist"
    return axios.get(url)
}

export const getTopList = (id, type) => {
    if (type) {
        const url = HOST + `/top/list?id=${id}`
        return axios.get(url)
    } else {
        const url = HOST + `/top/list?idx=${id}`
        return axios.get(url)
    }
}

export const getDisToplist = () => {
    const url = HOST + "/toplist"
    return axios.get(url)
}
export const getTopPlaylist = (tag, offset) => {
    if (offset) {
        const url = HOST + `/top/playlist?offset=${offset}&limit=35&order=hot`
        return axios.get(url)
    } else {
        const url = HOST + `/top/playlist?cat=${tag}&limit=35&order=hot`
        return axios.get(url)
    }

}