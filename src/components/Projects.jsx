import blogpic from "../assets/blog.png";
import taskpic from "../assets/task.png";
import email from "../assets/email.png";
import blogjunction from "../assets/blogai.png";
import codesage from "../assets/codesage.png";

const projects = [
  {
    title: "BlogJunction.ai",
    description:
      "BlogJunction.ai is an AI-powered blogging platform where users can effortlessly generate, summarize, and publish high-quality blog content. Built using the MERN stack and integrated with generative AI, it offers features like rich-text editing, smart content suggestions, and SEO-friendly previews for a seamless writing experience.",
    image: `${blogjunction}`,
    link: "https://blogjunction-ai.netlify.app/",
  },
  {
    title: "CodeSage AI",
    description:
      "CodeSage AI is a next-gen code reviewer that leverages artificial intelligence to analyze, review, and enhance your code in real-time. It provides instant feedback, suggestions for improvement, and optimized alternatives. Designed for developers, it's built with React.js and Tailwind CSS, offering a clean and interactive interface.",
    image: `${codesage}`,
    link: "https://codesageai.netlify.app/",
  },
  {
    title: "Email Verification Authentication System",
    description:
      "Email Verification Authentication System is a secure and scalable user authentication platform built with Node.js and Express.js on the backend, and React.js for the frontend. It leverages MongoDB for efficient data storage and Mailtrap to handle seamless email delivery for account verification.",
    image: `${email}`,
    link: "https://email-verification-cunning.netlify.app/",
  },
  {
    title: "Blog Junction",
    description:
      "A React and Tailwind-powered blogging platform that seamlessly blends modern design with intuitive navigation. Explore a curated collection of articles, effortlessly paginated for a smooth user experience. Powered by React Router DOM for efficient routing, Blog Junction offers a delightful journey through the world of digital content.",
    image: `${blogpic}`,
    link: "https://lnkd.in/gj4_aj2s",
  },
  {
    title: "Task Management App",
    description:
      "A comprehensive task management system designed to streamline your workflow, with features such as task creation,assignment,updation",
    image: `${taskpic}`,
    link: "https://iwtodo.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className=" w-full min-h-screen py-16 bg-transparent">
      <h1 className="text-center text-6xl font-bold mb-10 text-stone-400">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-16 lg:mx-32">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="project-card p-6 bg-transparent rounded-lg shadow-md shadow-stone-600 hover:shadow-lg hover:shadow-stone-500  transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-stone-400 hover:underline p-2 bg-zinc-800  rounded-md hover:bg-zinc-700"
                target="_blank"
                rel="noonpener noreferrer"
              >
                View Project
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
