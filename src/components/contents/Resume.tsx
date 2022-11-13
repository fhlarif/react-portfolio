import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { IActivity, IBioInfo, IExpInfo } from "../../interfaces/IResume";

const bioinfo: IBioInfo = {
  name: "Fathul Arif Kamarudin",
  position: "IT Officer",
  description:
    "An Information Technology Officer at IIUM currently completing a master degree in Information Technology under Networking. Works in education industry. Skilled in conducting research, editing information,writing reports, troubleshooting and data analysis. A team player and good work ethic. Detail-oriented and committed to the advancement of IT related fields; contributing to I.R 4.0. Success in independent and team-driven research environments. Proven public speaking skills and experienced in presenting research at conferences. Creative, resourceful and flexible.",
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

const activityinfo: IActivity[] = [
  {
    year: "2021",
    infos: [
      {
        location: "Online",
        descriptiom: "CEO@FACULTY PROGRAMME 2.0 Fellow (CYCLE 3): Taaruf on Python 3, Zoom, IIUM GOMBAK, 18/02/2021",
      },
    ],
  },
  {
    year: "2020",
    infos: [
      {
        location: "Online",
        descriptiom:
          "Information System Management Security (ISMS), Information Technology Division, INTAN, Bukit Kiara, 19/08/2020",
      },
      {
        location: "Online",
        descriptiom: "Penetration Test Training, Information Technology Division, ITD Training Lab, ITD, 05/08/2020",
      },
    ],
  },
];

const bio = (
  <section className="w-full grid md:grid-cseols-2">
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
  <section className="mt-8 w-full ">
    <h3 className="p-2 bg-amber-900 uppercase">Experience</h3>
    {experienceinfo.map((expinfo, key) => {
      return (
        <div key={key} className="my-8 ">
          <span className="rounded-full bg-red-800 py-1 px-2 ">{expinfo.year}</span>
          <h4 className="my-3 px-1">{expinfo.position}</h4>
          <p className="text-sm text-gray-400 leading-relaxed tracking-wider">{expinfo.description}</p>
        </div>
      );
    })}
  </section>
);

const activiy = (
  <section className="mt-8 w-full ">
    <h3 className="p-2 bg-amber-900 uppercase">Activity</h3>
    {activityinfo.map((actinfo, key) => {
      return (
        <div key={key} className="my-8 ">
          <span className="rounded-full bg-red-800 py-1 px-2 ">{actinfo.year}</span>

          {actinfo.infos.map((ai, key) => {
            return (
              <div key={key}>
                <h4 className="my-3 px-1">{ai.location}</h4>
                <p className="text-sm text-gray-400 leading-relaxed tracking-wider">{ai.descriptiom}</p>
              </div>
            );
          })}
        </div>
      );
    })}
  </section>
);

const Resume = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full tracking-wide font-bold p-4 ">
      {bio}
      {experience}
      {activiy}
    </motion.div>
  );
};

export default Resume;
