import axios from "axios"

export const getContact = ()=>{
    return axios.get("http://localhost:5000/api/contact")
}