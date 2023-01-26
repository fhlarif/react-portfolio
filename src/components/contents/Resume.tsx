import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";
import {
  FaCentos,
  FaFilePowerpoint,
  FaGitlab,
  FaLaravel,
  FaLinux,
  FaLocationArrow,
  FaMarkdown,
  FaPaperclip,
  FaPeopleArrows,
  FaWrench,
} from "react-icons/fa";
import {
  Postgresql,
  Livewire,
  Alpinedotjs,
  Tailwindcss,
  ReactJs,
  Vuedotjs,
  Docker,
  Redux,
  Laragon,
  Clickup,
  Obsidian,
  Visualstudiocode,
} from "@icons-pack/react-simple-icons";
import { IEducation, IBioInfo, IExpInfo } from "../../interfaces/IResume";

const bioinfo: IBioInfo = {
  name: "Fathul Arif Kamarudin",
  position: "IT Officer",
  description:
    "An Information Technology Officer at IIUM. Works in education industry. Skilled in web development, writing reports, troubleshooting and IT supports. A team player and good work ethics. Detail-oriented and committed to the advancement of IT related fields. Success in independent and team-driven environments. Proven public speaking skills and experienced in presenting research at conferences. Creative, resourceful and flexible.",
};

const experienceinfo: IExpInfo[] = [
  {
    year: "2020-present",
    position: "It Officer",
    description:
      "IUM Gombak, Selangor: Manage IT projects and resolved ICT operational issu registered via the Service Desk System",
  },
  {
    year: "2019",
    position: "GIS SUPPORT ANALYST, IMPLEMENTATION",
    description: "Esri Malaysia Sdn. Bhd: Troubleshooting GIS implementation issues for domestic user (United States)",
  },
  {
    year: "2018-2019",
    position: "RESEARCH ASSISTANT, INTERN",
    description:
      "Universiti Kuala Lumpur-MIIT, Kuala Lumpur: Handled hands-on workshop, related researchs and participating in conferences.",
  },
  {
    year: "2017-2018",
    position: "IT RESEARCHER, INTERN",
    description: "Telekom Research & Development Sdn Bhd, Cyberjaya, Selangor: Worked as an IT researcher",
  },
  {
    year: "2017",
    position: "BOOTCAMPER, INTERN",
    description: "ServiceRocket Sdn Bhd, Kuala Lumpur: Worked as an IT researcher",
  },
];

const educationinfo: IEducation[] = [
  {
    year: "2013-2017",
    infos: [
      {
        level: "BACHELOR OF COMPUTING IN SYSTEM SECURITY",
        descriptiom: "Universiti Kuala Lumpur MIIT, Kuala Lumpur.",
      },
    ],
  },
  {
    year: "2012-2013",
    infos: [
      {
        level: "SIJIL TINGGI PELAJARAN MALAYSIA (SCIENCE)",
        descriptiom: "SMK Ismail Petra, Kelantan",
      },
    ],
  },
];

type TSkill1 = {
  title: string;
};

const skill1data: TSkill1[] = [
  {
    title: "git",
  },
  {
    title: "mvc",
  },
  {
    title: "spa",
  },
  {
    title: "mpa",
  },
  {
    title: "api",
  },
  {
    title: "tdd",
  },
  {
    title: "ssr",
  },
  {
    title: "CSR",
  },
];

type TSkillTech = {
  title: string;
  icon: JSX.Element;
};

const skilltechdata: TSkillTech[] = [
  {
    title: "Laravel",
    icon: <FaLaravel size={38} />,
  },
  {
    title: "Livewire",
    icon: <Livewire size={38} />,
  },
  {
    title: "AlpineJs",
    icon: <Alpinedotjs size={38} />,
  },
  {
    title: "Tailwind",
    icon: <Tailwindcss size={38} />,
  },
  {
    title: "React",
    icon: <ReactJs size={38} />,
  },
  {
    title: "Redux",
    icon: <Redux size={38} />,
  },
  {
    title: "Vue",
    icon: <Vuedotjs size={38} />,
  },
  {
    title: "Docker",
    icon: <Docker size={38} />,
  },
  {
    title: "linux / unix",
    icon: <FaLinux size={38} />,
  },
  {
    title: "Centos",
    icon: <FaCentos size={38} />,
  },
  {
    title: "MYSQL / POSTGRESQL",
    icon: <Postgresql size={38} />,
  },
  {
    title: "VS Code",
    icon: <Visualstudiocode size={38} />,
  },
  {
    title: "GitLab",
    icon: <FaGitlab size={38} />,
  },
  {
    title: "Laragon",
    icon: <Laragon size={38} />,
  },
  {
    title: "Markdown",
    icon: <FaMarkdown size={38} />,
  },
  {
    title: "Clickup",
    icon: <Clickup size={38} />,
  },
  {
    title: "Obsidian",
    icon: <Obsidian size={38} />,
  },
];

const skillsupportdata: TSkillTech[] = [
  {
    title: "IT Support",
    icon: <FaWrench size={38} />,
  },
  {
    title: "Technical Documentation",
    icon: <FaPaperclip size={38} />,
  },
];
const skillmanagementdata: TSkillTech[] = [
  {
    title: "Technical Project Leader",
    icon: <FaFilePowerpoint size={38} />,
  },
  {
    title: "Unit Leader",
    icon: <FaPeopleArrows size={38} />,
  },
];
const skilllangdata: TSkillTech[] = [
  {
    title: "Malay",
    icon: <span className="text-xl font-extrabold">MY</span>,
  },
  {
    title: "English",
    icon: <span className="text-xl font-extrabold">ENG</span>,
  },
];

const bio = (
  <section className="w-full">
    <article className="flex flex-col items-start">
      <h2 className="uppercase font-sans font-extrabold text-xl text-gray-200">
        {bioinfo.name.slice(0, 11)} <span className="text-amber-400">{bioinfo.name.slice(11)}</span>
      </h2>
      <p className="uppercase bg-amber-900 self-start my-2 p-2 text-gray-100 rounded-lg">IT Officer</p>
      <p className="w-full leading-loose font-normal normal-case  py-4 tracking-tight sm:text-lg text-md  text-justify">
        {bioinfo.description}
      </p>
      <span className="font-normal my-3 text-amber-400">
        <span className="flex items-center gap-2">
          <AiFillMail size={19} /> Email me:
        </span>
        <p className="text-gray-200">fathulkb@gmail.com</p>
      </span>
      <span className="font-normal text-amber-400">
        <span className="flex items-center gap-2">
          <FaLocationArrow size={19} /> Location:
        </span>
        <p className="text-gray-200">Selangor, Malaysia</p>
      </span>
    </article>
  </section>
);

const experience = (
  <section className="my-8 w-full  ">
    <h3 className="p-2 bg-amber-900 uppercase">Experience</h3>
    {experienceinfo.map((expinfo, key) => {
      return (
        <div key={key} className="mt-8 ">
          <span className="rounded-full bg-red-800 py-1 px-2 ">{expinfo.year}</span>
          <h4 className="my-3 px-1">{expinfo.position}</h4>
          <p className="text-sm text-gray-400 leading-relaxed tracking-wider">{expinfo.description}</p>
        </div>
      );
    })}
  </section>
);

const education = (
  <section className="w-full ">
    <h3 id="activity" className="p-2 bg-amber-900 uppercase">
      Education
    </h3>
    {educationinfo.map((eduinfo, key) => {
      return (
        <div key={key} className="mt-8 ">
          <span className="rounded-full bg-red-800 py-1 px-2 ">{eduinfo.year}</span>

          {eduinfo.infos.map((ei, key) => {
            return (
              <div key={key}>
                <h4 className="my-3 px-1">{ei.level}</h4>
                <p className="text-sm text-gray-400 leading-relaxed tracking-wider">{ei.descriptiom}</p>
              </div>
            );
          })}
        </div>
      );
    })}
  </section>
);

const skill_1 = (
  <section className="w-full md:mt-0 my-10">
    <article className="grid grid-cols-4 gap-2 place-items-center">
      {skill1data.map((s1, key) => {
        return (
          <div
            key={key}
            className="uppercase text-xl w-20 rounded-full border-4 border-red-500 flex justify-center items-center h-20">
            <span className="p-1">{s1.title}</span>
          </div>
        );
      })}
    </article>
  </section>
);

const skill_tech = (
  <section className="w-full">
    <h3 id="techskill" className="p-2 my-8 bg-amber-900 uppercase">
      Technologies
    </h3>
    <article className="flex flex-col gap-1 place-content-start">
      {skilltechdata.map((st, key) => {
        return (
          <div key={key} className="w-full flex uppercase text-md  gap-2  ">
            <div className="flex w-full justify-between">
              <span className="p-1">{st.title}</span>
              <span className="p-1 text-amber-600">{st.icon}</span>
            </div>
          </div>
        );
      })}
    </article>
  </section>
);

const skill_support = (
  <section className="w-full">
    <h3 id="techskill" className="p-2 my-8 bg-amber-900 uppercase">
      Support Skills
    </h3>
    <article className="flex flex-col gap-1 place-content-start">
      {skillsupportdata.map((ss, key) => {
        return (
          <div key={key} className="w-full flex uppercase text-md  gap-2  ">
            <div className="flex w-full justify-between">
              <span className="p-1">{ss.title}</span>
              <span className="p-1 text-amber-600">{ss.icon}</span>
            </div>
          </div>
        );
      })}
    </article>
  </section>
);
const skill_management = (
  <section className="w-full">
    <h3 id="techskill" className="p-2 my-8 bg-amber-900 uppercase">
      Management Skills
    </h3>
    <article className="flex flex-col gap-1 place-content-start">
      {skillmanagementdata.map((sm, key) => {
        return (
          <div key={key} className="w-full flex uppercase text-md  gap-2  ">
            <div className="flex w-full justify-between">
              <span className="p-1">{sm.title}</span>
              <span className="p-1 text-amber-600">{sm.icon}</span>
            </div>
          </div>
        );
      })}
    </article>
  </section>
);
const skill_lang = (
  <section className="w-full">
    <h3 id="techskill" className="p-2 my-8 bg-amber-900 uppercase">
      Language Skills
    </h3>
    <article className="flex flex-col gap-1 place-content-start">
      {skilllangdata.map((sl, key) => {
        return (
          <div key={key} className="w-full flex uppercase text-md  gap-2  ">
            <div className="flex w-full justify-between">
              <span className="p-1">{sl.title}</span>
              <span className="p-1 text-amber-600">{sl.icon}</span>
            </div>
          </div>
        );
      })}
    </article>
  </section>
);

const Resume = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full  max-w-5xl mx-auto h-full gap-4 grid md:grid-cols-2 mb-4 revers tracking-wide font-bold p-4 ">
      <div>
        <div className="md:grid hidden">{bio}</div>
        {experience}
        {education}
      </div>
      <div>
        <div className="md:hidden grid">{bio}</div>
        {skill_1}
        {skill_tech}
        {skill_support}
        {skill_management}
        {skill_lang}
      </div>
    </motion.div>
  );
};

export default Resume;
