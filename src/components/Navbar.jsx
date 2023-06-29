import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section class="relative mx-auto ">
        <header class="relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-white md:mx-auto md:flex-row md:items-center">
          <a class="flex w-full gap-2 items-center" href="/">
            <img class="h-14" src="/logo.svg" alt="logo" />
            <h1 className="text-2xl font-bold font-heading font-pango">
              CamCall
            </h1>
          </a>
          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label
            class="absolute top-5 right-7 cursor-pointer md:hidden"
            for="navbar-open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li class="font-bold md:mr-12">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li class="md:mr-12">
                <a href="#">Features</a>
              </li>
              <li class="md:mr-12">
                <a href="#">Support</a>
              </li>
              <li class="md:mr-12">
                <button
                  class="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-violet-500 hover:text-white"
                  onClick={() => nav("/login")}
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {/* <nav class="flex justify-between bg-gray-900 text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="flex w-full gap-2 items-center" href="#">
              <img class="h-9" src="/logo.svg" alt="logo" />
              <h1 className="text-2xl font-bold font-heading font-pango">
                CamCall
              </h1>
            </a>

            <div class="w-full flex items-center space-x-5 justify-end">
              <a class="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav> */}
      </section>
    </>
  );
};

export default Navbar;
