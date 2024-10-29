import React, { useEffect } from "react";
import about from "../assets/about.jpeg";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4 ">
      <h1 className="text-6xl font-bold text-stone-400 my-16 text-center">
        About <span className="text-zinc-500"> Me</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8  ">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full md:w-1/2 lg:p-8 "
        >
          <div className="px-8 sm:px-4 w-full">
            <img
              src={about}
              alt="about"
              className="rounded-2xl h-[400px] w-full lg:w-[500px]"
            />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: easeInOut, delay: 0.5 }}
          className=" w-full lg:w-1/2 max-w-[500px] flex  justify-center items-center text-justify
           md:text-start px-8 "
        >
          <p className=" max-w-xl py-6 mx-auto  text-lg text-stone-300">
            I'm a dedicated MERN Stack Developer with expertise in building
            responsive, user-centric web applications using MongoDB, Express.js,
            React, and Node.js. I specialize in creating seamless, efficient
            front-to-back solutions, ensuring robust server-side logic and
            engaging, intuitive interfaces. With a strong foundation in
            JavaScript, modern React practices, and RESTful API integration, I’m
            passionate about delivering high-quality, scalable applications that
            prioritize both functionality and user experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
