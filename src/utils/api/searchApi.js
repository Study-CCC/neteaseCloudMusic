import { HOST } from './apiConfig'
import axios from 'axios'

export const getSearch = (txt, type, offset,limit) => {
    if(limit){
        const url = HOST + `/search?keywords=${txt}&type=${type}&limit=${limit}`
        return axios.get(url)
    }
    let str = (type == 1009||type == 1006) ? `/search?keywords=${txt}&type=${type}` : `/search?keywords=${txt}&type=${type}&limit=90`
    if (offset) {
        const url = HOST + str + `&offset=${offset}`
        return axios.get(url)
    } else {
        const url = HOST + str
        return axios.get(url)
    }
}
export const getSearchList = (txt) => {

    const url = HOST + `/search/suggest?keywords=${txt}`
    return axios.get(url)
} 