import { deleteProject } from "../services/projectApi";

const ProjectCard = ({ _id, title, description, githubLink, liveLink, refresh }) => {
  const handleDelete = async () => {
    try {
      await deleteProject(_id);
      refresh(); // reload data
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex gap-3">
        <a
          href={liveLink}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Live
        </a>

        <a
          href={githubLink}
          target="_blank"
          className="border px-4 py-1 rounded"
        >
          Code
        </a>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
