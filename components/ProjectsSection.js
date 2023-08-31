import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Hot Head Sauces",
    description: "First Project using JavaScript and jQuery.",
    image: "/project1hot.png",
    github: "https://github.com/brycefish/firstJavaScriptProject",
    link: "https://s3.amazonaws.com/hotheadsauces.com/index.html",
  },
  {
    name: "Dog Blog",
    description: "Front-End Blog demonstrating Vue.",
    image: "/dogBlogImage.png",
    github: "https://github.com/brycefish/DogBlogSocial",
    link: "https://codesandbox.io/s/project-4-react-9u3w0s",
  },
  {
    name: "First Portfolio using Bootstrap",
    description: "Portfolio created using Next.js and Tailwind",
    image: "/oldPortfolioImage.png",
    github: "https://github.com/brycefish/bootstrap_portfolio",
    link: "https://s3.amazonaws.com/brycefish.com/index.html",
  },
]
const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-4xl my-10 text-center font-bold dark:text-slate-50">Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-400 border-0 rounded"></hr>
            </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="md:flex dark:text-slate-50">
                  <div className=" md:w-1/2 md:mr-20">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-2xl shadow-2xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-100">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4  dark:text-teal-400">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-500 dark:hover:text-slate-50"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-500 dark:hover:text-slate-50"
                        />
                      </Link>
                    </div>
                  </div>                  
                  </div>
                </div>
          )
        })}
        </div>
        </section>
    )
}

export default ProjectsSection