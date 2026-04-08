
const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="text-gray-600 mb-4">
        I'm a passionate full-stack developer skilled in building modern web
        applications using React, Node.js, and MongoDB.
      </p>

      <p className="text-gray-600 mb-4">
        I enjoy solving real-world problems and continuously improving my
        development skills.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>

      <div className="flex flex-wrap gap-3">
        <span className="bg-gray-200 px-3 py-1 rounded">React</span>
        <span className="bg-gray-200 px-3 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 px-3 py-1 rounded">MongoDB</span>
        <span className="bg-gray-200 px-3 py-1 rounded">JavaScript</span>
      </div>
    </div>
  );
};

export default About;
