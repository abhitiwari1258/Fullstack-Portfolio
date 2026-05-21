import Project from '../models/Project.js'
import imagekit from '../config/imagekit.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects)
    } catch (error) {
        res.status(500).json({ error: error.msg })
    }
}

export const createProject = async (req, res) => {
    try {
        let imageUrl = "";
        if (req.file) {
            const uploaded = await imagekit.upload({
                file: req.file.buffer,
                fileName: req.file.originalname,
            })
            imageUrl = uploaded.url;
        }

        const newProject =
            new Project({

                title:
                    req.body.title,

                description:
                    req.body.description,

                githubLink:
                    req.body.githubLink,

                liveLink:
                    req.body.liveLink,

                tech:
                    JSON.parse(req.body.tech),

                image:
                    imageUrl,      // IMPORTANT

            });

        const saveProject =
            await newProject.save();

        res.status(201)
            .json(saveProject);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg:
                "Project create failed"
        });
    }
    // const newProject = new Project(req.body);
    // const saveProject = await newProject.save()
    // res.status(201).json(saveProject);
}

export const updateProject = async (req, res) => {
    const updated = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
}

export const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id)
    res.json({ msg: "Project deleted" })
};