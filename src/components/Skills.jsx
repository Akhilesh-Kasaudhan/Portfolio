import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaCloudSun,
} from "react-icons/fa";
import { SiExpress, SiAxios, SiRedux, SiReacthookform } from "react-icons/si";
import { FaSquareJs } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, level: "Advanced", progress: 90 },
      { name: "JavaScript", icon: FaSquareJs, level: "Advanced", progress: 90 },
      { name: "HTML5", icon: FaHtml5, level: "Advanced", progress: 90 },
      { name: "CSS3", icon: FaCss3, level: "Advanced", progress: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate", progress: 80 },
      {
        name: "Express.js",
        icon: SiExpress,
        level: "Intermediate",
        progress: 80,
      },
      {
        name: "MongoDB",
        icon: FaDatabase,
        level: "Intermediate",
        progress: 80,
      },
      {
        name: "RestAPI",
        icon: FaCloudSun,
        level: "Intermediate",
        progress: 80,
      },
    ],
  },
  {
    category: "Additional Libraries",
    skills: [
      { name: "Axios", icon: SiAxios, level: "Intermediate", progress: 80 },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        level: "Intermediate",
        progress: 80,
      },
      {
        name: "Framer Motion",
        icon: TbBrandFramerMotion,
        level: "Intermediate",
        progress: 80,
      },
      {
        name: "React Hook Form",
        icon: SiReacthookform,
        level: "Intermediate",
        progress: 80,
      },
    ],
  },
];

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggers each child for smooth entry
        duration: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative w-full h-[1500px] lg:h-[700px]  z-[10] "
    >
      <section className="absolute top-0 left-0 p-4 sm:left-20   lg:top-10 lg:left-40 min-w-[80%] min-h-full sm:h-screen  bg-transparent   z-[100]  ">
        <h1 className="mb-8 text-stone-400 text-5xl font-bold">
          Skills & <span className="text-neutral-300 ">Technologies</span>
        </h1>
        <div className="grid lg:grid-flow-col grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 ">
          {skillsData.map((category) => (
            <div key={category.category} className="skills-grid-item">
              <h3 className="text-xl border-b-4 border-b-slate-400 mb-4">
                {category.category}
              </h3>
              <motion.div
                className="skill-list flex flex-col gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="skill-item flex items-center gap-4 bg-black shadow-[#f2f2f2] opacity-70 p-4 rounded-lg shadow-lg"
                  >
                    <div className="text-2xl text-[#ccff00] rounded-full">
                      <skill.icon />
                    </div>
                    <div>
                      <p className="m-0 text-[#ccff00] font-semibold">
                        {skill.name}
                      </p>
                      <p className="text-sm text-[#ccff00] font-medium">
                        {skill.level}
                      </p>
                    </div>
                    <div className="w-[80%] h-4 bg-[#002642] rounded-full">
                      <div
                        className="h-full bg-[#ccff00] rounded-full transition-all duration-300"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
