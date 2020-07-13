import {HOST} from './apiConfig'
import axios from 'axios'
const typeArr=['playlist','music','dj','album','mv']
export const getComment = (id,type,offset)=>{
    if(offset){
        const url = `${HOST}/comment/${typeArr[type]}?id=${id}&offset=${offset}`
        return axios.get(url)
    }else{
        const url = `${HOST}/comment/${typeArr[type]}?id=${id}`
        console.log(url)
        return axios.get(url)
    }
}