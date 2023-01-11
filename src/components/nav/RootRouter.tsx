import { Outlet, Link, createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { AiFillContacts, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaPaperclip } from "react-icons/fa";
import Portfolio from "../contents/Portfolio";
import { Profile } from "../contents/Profile";
import Resume from "../contents/Resume";

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <ul className="grid w-full rounded-xl  max-w-5xl mx-auto h-full">
        <li className="m-4 flex md:flex-row flex-col gap-2 uppercase w-full mx-auto">
          <Link
            className="  text-amber-600 underline hover:-translate-y-1 w-full cursor-pointer mt-2 p-4  hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-evenly md:flex-row items-center flex-col justify-center rounded-lg border-4 border-gray-800 shadow-md shadow-gray-700 bg-gray-700"
            to="/">
            <div className="flex gap-2">
              <span className="text-amber-500">
                <AiFillContacts size={25} />
              </span>
              Profile
            </div>
          </Link>

          <Link
            className=" text-amber-600 underline hover:-translate-y-1 w-full cursor-pointer mt-2 p-4  hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-evenly md:flex-row items-center flex-col justify-center rounded-lg border-4 border-gray-800 shadow-md shadow-gray-700 bg-gray-700"
            to="/resume">
            <div className="flex gap-2">
              <span className="text-amber-500">
                <FaPaperclip size={25} />
              </span>
              Resume
            </div>
          </Link>

          <Link
            className=" text-amber-600 underline hover:-translate-y-1 w-full cursor-pointer mt-2 p-4  hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-evenly md:flex-row items-center flex-col justify-center rounded-lg border-4 border-gray-800 shadow-md shadow-gray-700 bg-gray-700"
            to="/portfolio">
            <div className="flex gap-2">
              <span className="text-amber-500">
                <AiOutlineFundProjectionScreen size={25} />
              </span>
              Portfolio
            </div>
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  ),
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Profile,
});

const resumeRoute = rootRoute.createRoute({
  path: "/resume",
  component: Resume,
});

const portfolioRoute = rootRoute.createRoute({
  path: "/portfolio",
  component: Portfolio,
});

const routeConfig = rootRoute.addChildren([indexRoute, resumeRoute, portfolioRoute]);

export const router = createReactRouter({ routeConfig });
