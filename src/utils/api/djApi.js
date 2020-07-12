import {HOST} from './apiConfig'
import axios from 'axios'

export const getDj = id=>{
    const url = HOST + `/dj/detail?rid=${id}`
    return axios.get(url)
}

export const getDjRecommend = id=>{
    const url = HOST +`/dj/recommend/type?type=${id}`
    return axios.get(url)
}

export const getProRec=()=>{
    const url = HOST +`"/program/recommend"`
    return axios.get(url)
}

export const getDjRadio = (id,offset)=>{
    const url = HOST +`/dj/radio/hot?cateId=${id}&limit=28&offset=${offset}`
    return axios.get(url)
}

export const getProgram = (id,offset)=>{
    if(offset){
        const url = HOST + `/dj/program?rid=${id}&offset=${offset}`
        return axios.get(url)
    }else{
        const url = HOST + `/dj/program?rid=${id}`
        return axios.get(url)
    }
}

export const getProgramInfo = id=>{
    const url = HOST + `/dj/program/detail?id=${id}`
    return axios.get(url)
}

export const getProToplist = ()=>{
    const url = HOST + "/dj/program/toplist"
    return axios.get(url)
}

export const getCatelist = ()=>{
    const url = HOST +"/dj/catelist"
    return axios.get(url)
}