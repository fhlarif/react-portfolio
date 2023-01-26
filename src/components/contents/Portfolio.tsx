import { motion } from "framer-motion";

type TPortfolio = {
  title: string;
  year: string;
  description: string;
  link?: string;
};

const projects: TPortfolio[] = [
  {
    title: "Internal Grant Evaluation System",
    year: "Sept 2022 - Present",
    description:
      "To digitalized and improved the general processes of evaluating the internal grant submitted via RMSv2 and mirroring the workflow available on MyGrants System",
  },
  {
    title: "IIUM Research's CMS",
    year: "Apr 2022 - Oct 2022",
    description:
      "Revamped RMC's website by developing custom Content Management System for RMC; enabling content approval workflow and acted as a one-stop centre for communication between researchers and RMC ",
  },
  {
    title: "Sponsored and Joint Research Registration Module",
    year: "May 2022 - Aug 2022",
    description:
      "Enabled digitalization of Sponsored and Joint Research Registration and improved the general processes of the submission; increasing productivity. ",
  },
  {
    title: "Common API for IIUM Research Management Centre",
    year: "Mar 2022 - May 2022",
    description:
      "Developed common API resources related to RMC systems; to be used by other applications and eliminating the need for granting database's views",
  },
  {
    title: "IIUM Service Desk System : Ticket Management Module",
    year: "Mar 2021 - Feb 2022",
    description:
      "An overhauled project for the old ISDS. Tasked to developed Ticket Management Module and enabling communication between other systems; laveraging REST API.",
  },
  {
    title: "Library Classification System For Knowledge Resources On Islam",
    year: "May 2021 - Aug 2021",
    description:
      "A classification system for knowledge resources on Islam, revised and devised by the IIUM Library to replace the currently used Library of Congress Classification (LCC), subclass BP-Islam. Helped IT team from IIUM Library to digitalize the ICSI book and acted as the main developer for the POC.",
  },
  {
    title: "IIUM MyRa Repository System",
    year: "Jan 2020 - Apr 2021",
    description:
      "To store digital evidence/metadata by allowing IIUM staffs to deposit their digital documents with a complete approval workflow process. Acted as Technical Team Leader and the main developer. Enabled the capturing of previously untracked evidences to increase the overall MyRa’s marks for IIUM and reduced the task for Kulliyah’s Heads to manage previously unsupervised submissions.",
    link: "https://istack.iium.edu.my/books/iium-myrepository-%28myrepo%29",
  },
  {
    title: "Research Registration and Grant Application Submission Enhancement",
    year: "Sep 2020 - Feb 2021",
    description:
      "Enhanced existing RRS and GAS modules based on the specification provided by Application Unit. Allowed for the capturing of the 17 sustainable development goals (SDGs). Improved the general processes of the submission; increasing productivity.",
  },
  {
    title: "Intellectual Property Registration Enhancement",
    year: "Jul 2020 - Aug 2020",
    description:
      "Enhanced existing IPR module based on the specifications provided by Innovation, Commercialization and Library Unit. Improved the general processes of the submission; increasing productivity.",
  },
  {
    title: "Asset Management Module for RMSv2",
    year: "Apr 2020 - Jun 2020",
    description:
      "Allows auditors to view information for every research's purchased items information via QR code . Generates QR codes for every Ministry–based researches. Allows for the tracking of assets purchased using government’s grant’s money. Generated QR codes are to be printed as stickers for each asset and distributed among all IIUM campuses.",
  },
  {
    title: "A comparative study for bandwidth on demand using ONOS reactive and intent forwarding",
    year: "Mar 2020",
    description:
      "This study was to address the effects of SDN (software-defined network) on the BoD performance towards the differences between the reactive and intent forwarding based on the assessment matrix. The testbed was performed under Mininet simulator which interacted with ONOS (Open Network Operating System). Mesh type topology with a predetermine parameter matrix was used using random topology generator. The expected outcome from this research was to show the effect on the BoD performance under two type of forwarding; reactive and intent based on the assessment matrix. This report contributed towards determining the effectiveness of SDN architecture on BoD performance and to improve future benchmarking on SDN-BoD testbed.",
    link: "https://www.semanticscholar.org/paper/A-comparative-study-for-bandwidth-on-demand-using-Kamarudin-Noor/cb6ae2885af185c0109a41f03dbe2a5045347bad",
  },
  {
    title: "Securing Mobile Apps: Application Lock with Image Authentication for Android OS (ALISA)",
    year: "Jan 2017",
    description: "An article of a project in developing an application lock with image authentication for Android OS. ",
    link: "http://www.jtec.org.my/index.php/JTeC/article/view/40",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full  max-w-5xl mx-auto h-full gap-4 grid md:gr mb-4 tracking-wide font-bold p-4 ">
      <ul className="max-w-5xl w-full">
        {projects.map((p, k) => {
          return (
            <li key={k} className="max-w-5xl my-4 w-full">
              <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-amber-500">
                    {p.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-amber-300">{p.year}</p>
                  <p className="mb-3 font-normal text-amber-700 dark:text-amber-50">{p.description}</p>
                  {p.link && (
                    <a
                      target="_blank"
                      href={p.link}
                      className="p-4 rounded-lg bg-gray-900 self-start mb-3 font-normal text-amber-700 dark:text-amber-50">
                      Show
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Portfolio;
