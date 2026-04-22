import axios from "axios"

export const getContact = ()=>{
    return axios.get("http://localhost:5000/api/contact")
}

export const deleteContact = (id)=>{
    return axios.delete(`http://localhost:5000/api/contact/${id}`)
}