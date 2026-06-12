import API from './api'

// const API = axios.create({
//     baseURL: "http://localhost:5000/api"
// })

export const getProjects = ()=> API.get("/projects")
export const createProject  = async (data)=> {
    console.log(data);
    return API.post(
    "/projects",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
}

export const updateProject  = (id,data)=> API.put(`/projects/${id}`, data)
export const deleteProject  = (id)=> API.delete(`/projects/${id}`)