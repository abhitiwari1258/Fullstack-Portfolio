import { motion } from "framer-motion";
import { deleteProject } from "../services/projectApi";

const ProjectCard = ({
  _id,
  title,
  description,
  githubLink,
  liveLink,
  refresh,
  showDelete = true,
  image,
  tech = [],
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
      whileHover={{ y: -6 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col h-full"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-blue-500 text-white px-3 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center border border-gray-300 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition"
          >
            Code
          </a>

          {/* Delete button */}

          {showDelete && (
          <button
            onClick={handleDelete}
            className="ml-auto text-red-500 text-sm opacity-0 group-hover:opacity-100 transition"
          >
            Delete
          </button>)}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;