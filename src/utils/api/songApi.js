import {HOST} from './apiConfig'
import axios from 'axios'

export const getSong = id => {
    const url = HOST + `/song/detail?ids=${id}`
    return axios.get(url)
}

export const getSongLyric = id =>{
    const url = HOST + `/lyric?id=${id}`
    return axios.get(url)
}

export const getSongMv = id => {
    const url = HOST + `/mv/url?id=${id}`
    return axios.get(url)
}

export const getMvInfo = id =>{
    const url = HOST + `/mv/detail?mvid=${id}`
    return axios.get(url)
}

export const getMv = id =>{
    const url = HOST + `/mv/detail/info?mvid=${id}`
    return axios.get(url)
}
