import { motion } from "framer-motion";

type TPortfolio = {
  title: string;
  year: string;
  description: string;
  link?: string;
};

const projects: TPortfolio[] = [
  {
    title: "Library Classification System For Knowledge Resources On Islam",
    year: "May 2021 - Present",
    description:
      "A classification system for knowledge resources on Islam, revised and devised by the IIUM Library to replace the currently used Library of Congress Classification (LCC), subclass BP-Islam. Helped IT team from IIUM Library to digitalize the ICSI book and acted as the main developer.",
  },
  {
    title: "IIUM Service Desk System",
    year: "Mar 2021 - Present",
    description:
      "An overhauled project for the old ISDS. Tasked to developed Ticket Management Module; implementing REST API.",
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
              <a
                href="#"
                className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={"/assets/black_bk6.jpg"}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-amber-500">
                    {p.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-amber-300">{p.year}</p>
                  <p className="mb-3 font-normal text-amber-700 dark:text-amber-50">{p.description}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Portfolio;
