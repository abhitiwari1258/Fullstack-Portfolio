import API from "./api"

export const getContact = ()=>{
    return API.get("/contact")
}

export const deleteContact = (id)=>{
    return API.delete(`/contact/${id}`)
}