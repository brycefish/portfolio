import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "C#" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "Swift" },
  { skill: "React" },
  { skill: "Vue" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Tailwind CSS" },
  { skill: "Boostrap" },
  { skill: "jQuery" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "AWS" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 dark:text-slate-50">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center mx-1 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Bryce, and I am  a highly <span className="text-teal-500 font-semibold">motivated</span> software developer based in Boise, ID.
            </p>
            <br />
            <p>
              After a decade of working in healthcare, I discovered my <span className="text-teal-500 font-semibold">passion</span> for programing.  I am currently attending the College of Western Idaho to obtain my AAS in Software Development.
            </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold hover:bg-teal-200 dark:hover:bg-teal-500"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection