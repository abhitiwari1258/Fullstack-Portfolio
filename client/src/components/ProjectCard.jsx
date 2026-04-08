import { motion } from "framer-motion";
import { deleteProject } from "../services/projectApi";

const ProjectCard = ({
  _id,
  title,
  description,
  githubLink,
  liveLink,
  refresh,
}) => {
  const handleDelete = async () => {
    try {
      await deleteProject(_id);
      refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 text-sm mb-5 line-clamp-3">
        {description}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
        >
          Live
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="border border-gray-300 px-4 py-2 text-sm rounded-lg hover:bg-gray-100 transition"
        >
          Code
        </a>

        <button
          onClick={handleDelete}
          className="ml-auto text-red-500 text-sm opacity-0 group-hover:opacity-100 transition"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;