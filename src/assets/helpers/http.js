import axios from "axios";

const http = (token)=>{
    const headers = {}
    if (token){
        headers.authorization = `Bearer ${token}`
    }
    return axios.create({
        headers,
        baseURL: 'http://localhost:3333'
    })
}
export default http