import { motion } from "framer-motion";
import abhishek from "../assets/abhishek.png"
const About = () => {
  return (
    <div className="space-y-20">
      <div className="grid md:grid-cols-2 gap-10      items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="text-gray-600 mb-4">
            I'm a passionate full-stack developer skilled in building modern web
            applications using React, Node.js, and MongoDB.
          </p>

          <p className="text-gray-600">
            I enjoy solving real-world problems and continuously improving my
            development skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={abhishek} alt="profile" className="rounded-2xl shadow-lg" />
        </motion.div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["React", "Node.js", "MongoDB", "JavaScript", "Tailwind", "Git"].map(
            (skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-white border rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <p className="font-medium">{skill}</p>
              </motion.div>
            ),
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-blue-500">10+</h3>
          <p className="text-gray-600">Projects</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-blue-500">1+</h3>
          <p className="text-gray-600">Years Learning</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-blue-500">5+</h3>
          <p className="text-gray-600">Technologies</p>
        </div>
      </div>

    </div>
  );
};

export default About;







// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

// const skills = [
//   { name: "React",      icon: "⚛",  level: "Advanced",     pct: 85, desc: "Hooks, Context, Router" },
//   { name: "Node.js",    icon: "🟩", level: "Advanced",     pct: 80, desc: "REST APIs, Express" },
//   { name: "MongoDB",    icon: "🍃", level: "Intermediate", pct: 65, desc: "Aggregations, Schemas" },
//   { name: "JavaScript", icon: "🟨", level: "Advanced",     pct: 90, desc: "ES6+, Async/Await" },
//   { name: "Tailwind",   icon: "💨", level: "Advanced",     pct: 88, desc: "Utility-first CSS" },
//   { name: "Git",        icon: "🔀", level: "Intermediate", pct: 70, desc: "Branching, PRs" },
// ];

// const stats = [
//   { num: 10, suffix: "+", label: "Projects" },
//   { num: 1,  suffix: "+", label: "Years Learning" },
//   { num: 5,  suffix: "+", label: "Technologies" },
// ];

// const avatarThemes = [
//   { bg: "bg-blue-100",   text: "text-blue-700" },
//   { bg: "bg-amber-100",  text: "text-amber-700" },
//   { bg: "bg-green-100",  text: "text-green-700" },
//   { bg: "bg-purple-100", text: "text-purple-700" },
// ];

// // Animated counter hook
// function useCounter(target, isVisible) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!isVisible) return;
//     let cur = 0;
//     const step = Math.ceil(target / 30);
//     const timer = setInterval(() => {
//       cur = Math.min(cur + step, target);
//       setCount(cur);
//       if (cur >= target) clearInterval(timer);
//     }, 40);
//     return () => clearInterval(timer);
//   }, [isVisible, target]);
//   return count;
// }

// function StatCard({ num, suffix, label, isVisible }) {
//   const count = useCounter(num, isVisible);
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       className="bg-white p-6 rounded-xl shadow-sm text-center cursor-default"
//     >
//       <h3 className="text-2xl font-bold text-blue-500">
//         {count}{suffix}
//       </h3>
//       <p className="text-gray-600">{label}</p>
//     </motion.div>
//   );
// }

// function SkillCard({ skill, isActive, onClick }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.08 }}
//       whileTap={{ scale: 0.97 }}
//       onClick={onClick}
//       className={`relative border rounded-xl p-5 text-center cursor-pointer transition-all duration-200 select-none group
//         ${isActive
//           ? "bg-blue-50 border-blue-400 shadow-md"
//           : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
//         }`}
//     >
//       {/* Tooltip */}
//       <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
//         {skill.desc}
//       </div>

//       <div className="text-2xl mb-1">{skill.icon}</div>
//       <p className={`font-medium text-sm ${isActive ? "text-blue-700" : "text-gray-700"}`}>
//         {skill.name}
//       </p>
//       <p className="text-xs text-gray-400 mt-0.5">{skill.level}</p>

//       {/* Progress bar */}
//       <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-blue-400 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: isActive ? `${skill.pct}%` : "0%" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// const About = () => {
//   const [activeSkill, setActiveSkill] = useState(null);
//   const [themeIdx, setThemeIdx] = useState(0);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const statsRef = useRef(null);

//   // Intersection observer for counter animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.4 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleSkillClick = (i) => {
//     setActiveSkill(prev => (prev === i ? null : i));
//   };

//   const cycleTheme = () => setThemeIdx(i => (i + 1) % avatarThemes.length);

//   const theme = avatarThemes[themeIdx];

//   return (
//     <div className="space-y-20">

//       <div className="grid md:grid-cols-2 gap-10 items-center">

//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold mb-4">About Me</h1>

//           <p className="text-gray-600 mb-4">
//             I'm a passionate full-stack developer skilled in building modern web
//             applications using React, Node.js, and MongoDB.
//           </p>

//           <p className="text-gray-600 mb-6">
//             I enjoy solving real-world problems and continuously improving my
//             development skills.
//           </p>

//           <div className="flex flex-wrap gap-2">
//             {["Open to work", "Full-stack", "React"].map(tag => (
//               <span
//                 key={tag}
//                 className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Status */}
//           <div className="flex items-center gap-2 mt-4">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//             </span>
//             <span className="text-sm text-gray-400">Available for Job/freelance</span>
//           </div>
//         </motion.div>

//         {/* Avatar / Profile */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={cycleTheme}
//             className="rounded-2xl shadow-lg border border-gray-100 bg-white cursor-pointer
//                        flex flex-col items-center justify-center gap-3 py-14 select-none"
//             title="Click to change theme"
//           >
//             <motion.div
//               key={themeIdx}
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className={`w-20 h-20 rounded-full flex items-center justify-center
//                           text-2xl font-medium ${theme.bg} ${theme.text}`}
//             >
//               YN
//             </motion.div>
//             <p className="font-medium text-gray-800">Your Name</p>
//             <p className="text-sm text-gray-400">Full-Stack Developer</p>
//             <p className="text-xs text-gray-300 mt-1">Click to cycle theme</p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Skills */}
//       {/* <div>
//         <h2 className="text-2xl font-bold mb-2 text-center">Skills</h2>
//         <p className="text-center text-sm text-gray-400 mb-8">Click a skill to see proficiency</p>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           {skills.map((skill, i) => (
//             <SkillCard
//               key={skill.name}
//               skill={skill}
//               isActive={activeSkill === i}
//               onClick={() => handleSkillClick(i)}
//             />
//           ))}
//         </div>
//       </div> */}

//       {/* Stats */}
//       {/* <div
//         ref={statsRef}
//         className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
//       >
//         {stats.map(s => (
//           <StatCard key={s.label} {...s} isVisible={statsVisible} />
//         ))}
//       </div> */}

//     </div>
//   );
// };

// export default About;