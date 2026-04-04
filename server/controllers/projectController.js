import Project from '../models/Project.js'

export const getProjects = async (req,res)=>{
    try{
        const projects = await Project.find();
        res.json(projects)
    }catch (error){
        res.status(500).json({error : error.msg})
    }
}

export const createProject = async (req,res)=>{
    const newProject = new Project(req.body);
    const saveProject = await newProject.save()
    res.status(201).json(saveProject);
}

export const updateProject = async (req,res)=>{
    const updated = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(updated);
}

export const deleteProject = async (req,res)=>{
    await Project.findByIdAndDelete(req.params.id)
    res.json({msg: "Project deleted"})
};