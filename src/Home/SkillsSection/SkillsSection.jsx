import Marquee from "react-fast-marquee";
const skills = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Mongoose",
    src: "https://mongoosejs.com/docs/images/mongoose.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://img.jsdelivr.com/github.com/tailwindlabs.png",
  },
];
const SkillsSection = () => {
  return (
    <div className="w-full overflow-hidden bg-base-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        My Skills
      </h2>
      <div className="w-full">
        <Marquee gradient={true} speed={50} pauseOnHover={true}>
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="carousel-item">
              <div className="flex flex-col items-center gap-2 px-4">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 mx-14 object-contain"
                />
                <p className="text-sm ">{skill.name}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsSection;
