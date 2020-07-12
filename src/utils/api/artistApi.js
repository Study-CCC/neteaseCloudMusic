import {HOST} from './apiConfig'
import axios from 'axios'

export const getArtist = id=>{
    const url = HOST + `/artists?id=${id}`
    return axios.get(url)
}
export const getArtistList = (type,initial,area)=>{
    if(area){
        const url = HOST + `/artist/list?limit=100&type=${type}&area=${area}&initial=${initial}`
        return axios.get(url)
    }
    else{
        const url = HOST +`/artist/list?limit=100&type=${type}&initial=${initial}`
        return axios.get(url)
    }
}

export const getArtistMv = (id,offset) =>{
    if(offset){
        const url = HOST + `/artist/mv?id=${id}&limit=12&offset=${offset}`
        return axios.get(url)
    }else{
        const url = HOST +  `/artist/mv?id=${id}`
        return axios.get(url)
    }
}

export const getDesc = id=>{
    const url = HOST + `/artist/desc?id=${id}`
    return axios.get(url)
}