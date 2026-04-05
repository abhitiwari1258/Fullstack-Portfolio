import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const getProjects = ()=> API.get("/projects")
export const createProject  = ()=> API.post("/projects",data)
export const updateProject  = ()=> API.put(`/projects/${id}`, data)
export const deleteProject  = ()=> API.delete(`/projects/${id}`)