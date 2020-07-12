import {HOST} from './apiConfig'
import axios from 'axios'

const typeArr = ['related','simi']
export const getRelated =  (id,type)=>{
    const url =HOST+`/${typeArr[type]}/playlist?id=${id}`
   return axios.get(url)
} 
export const getSimiArtist = (id)=>{
    const url = HOST+`/simi/artist?id=${id}`
    return axios.get(url)
}
export const getSimiSongs = id =>{
    const url = HOST+`/simi/song?id=${id}`
    return axios.get(url)
}
export const getSimiMv = id => {
    const url = HOST+`/simi/mv?mvid=${id}`
    return axios.get(url)
}