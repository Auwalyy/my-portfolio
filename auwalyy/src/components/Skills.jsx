import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
    { name: "React Native", icon: <FaReact className="text-indigo-400" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" size={40} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" size={40} /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" size={40} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-400 mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
