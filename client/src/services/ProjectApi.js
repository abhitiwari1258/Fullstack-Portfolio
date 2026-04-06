import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const getProjects = ()=> API.get("/projects")
export const createProject  = (data)=> {
    console.log(data);
    return API.post("/projects",data)
}
export const updateProject  = (id,data)=> API.put(`/projects/${id}`, data)
export const deleteProject  = (id)=> API.delete(`/projects/${id}`)