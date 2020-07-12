import {HOST} from './apiConfig'
import axios from 'axios'

export const login = (id,psw)=>{
    const url = HOST + `/login/cellphone?phone=${id}&password=${psw}`
    return axios.post(url)
}

export const userPlaylist = id=>{
    const url = HOST + `/user/playlist?uid=${id}`
    return axios.get(url)
}

export const userRecord = (id,type)=>{
    const url = HOST + `/user/record?uid=${id}&type=${type}`
    return axios.get(url)
}

export const userInfo = id =>{
    const url = HOST + `/user/detail?uid=${id}`
    return axios.get(url)
}

export const userEvent = id=>{
    const url = HOST +`/user/event?uid=${id}`
    return axios.get(url)
}

export const userFans = (id,offset,type)=>{
    if(type==1){
        const url = HOST + `/user/followeds?limit=20&uid=${id}&offset=${offset}`
        return axios.get(url)
    }
    else{
        const url = HOST + `/user/follows?limit=20&uid=${id}&offset=${offset}`
        return axios.get(url)
    }
   
}

export const updata = (userInfo,cookie)=>{
    const url = HOST +  `/user/update?gender=${userInfo.gender}&signature=${this.userInfo.signature}&nickname=${userInfo.name}&cookie=${cookie}`
    return axios.post(url)
}