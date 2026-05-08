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
  tech,
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
      className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
  group-hover:scale-110
  transition duration-500 absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">{description}</p>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-100 dark:bg-blue-500/20
  text-blue-700 dark:text-blue-300
  text-xs font-medium
  px-3 py-1 rounded-full
  border border-blue-200 dark:border-blue-500/30"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center
  bg-gradient-to-r from-blue-500 to-cyan-500
  text-white px-4 py-2.5
  text-sm font-medium
  rounded-xl
  hover:scale-105
  transition duration-300
  shadow-md"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-700 dark:text-gray-200
  px-4 py-2.5
  text-sm font-medium
  rounded-xl
  hover:bg-gray-100 dark:hover:bg-gray-700
  transition duration-300"
          >
            Code
          </a>

          {/* Delete button */}

          {showDelete && (
            <button
              onClick={handleDelete}
              className="ml-auto
  text-red-500
  text-sm font-medium
  opacity-0 group-hover:opacity-100
  hover:text-red-600
  transition duration-300"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
