import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-transparent via-blue-900 opacity-80  to-black">
        <footer className="mt-24 pt-6 px-10  text-lg-content w-full">
          <div className="flex-col w-full">
            <div className="flex gap-y-3 flex-col sm:flex-row w-full mx-auto items-center sm:justify-around sm:items-start justify-start sm:mx-0">
              <div className="flex flex-col gap-y-1">
                <p className="font-extrabold text-lg pb-1 text-white/80">
                  Top Destinations
                </p>
                <a
                  href="https://sublimeislands.com/islands/baratang-andaman"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Baratang Island
                </a>
                <a
                  href="https://sublimeislands.com/islands/havelock-andaman"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Havelock Island
                </a>
                <a
                  href="https://sublimeislands.com/islands/neil-andaman"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Neil Island
                </a>
                <a
                  href="https://sublimeislands.com/islands/ross-island-andaman"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Ross Island
                </a>
              </div>
              <div className="flex flex-col gap-y-1 mr-8 mt-2 sm:mt-0 sm:mr-0">
                <p className="font-extrabold text-lg pb-1 text-white/80">
                  Services
                </p>
                <a
                  href="/Ferries"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Ferry Tracking
                </a>
                <a
                  href="/Ships"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Ship Booking
                </a>
                <a
                  href="/Flights"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Flight Booking
                </a>
                <a
                  href="/Package"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Tour Packages
                </a>
              </div>
              <div className="flex flex-col gap-y-1 mr-2 mt-2 sm:mt-0 sm:mr-0 ">
                <p className="font-extrabold text-lg pb-1 text-white/80">
                  Sublime Islands
                </p>
                <a
                  href="/"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                  target="_blank"
                >
                  All Services
                </a>
                <a
                  href="https://sublimeislands.com/About"
                  rel="noreferrer"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  About us
                </a>
                <a
                  href="https://sublimeislands.com/Contact"
                  rel="noreferrer"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Contact
                </a>
                <a
                  href="https://sublimeislands.com/Blogs"
                  rel="noreferrer"
                  className="hover:underline hover:text-yellow-400 text-slate-50 font-semibold"
                >
                  Blogs
                </a>
              </div>
            </div>
            <div className="w-full border-b-2 mt-4 mb-2 border-gray-700"></div>
            <div className="flex-col w-full">
              <div className="w-full pb-6 flex">
                <div className="w-full mx-auto flex justify-evenly items-center gap-x-10">
                  <p className="w-full font-semibold text-slate-50">
                    All Rights Reserved{" "}
                    <a
                      href="https://www.unicorniz.com"
                      className="hover:underline hover:text-red-400"
                      target="_blank"
                    >
                      Unicorniz Innovation Pvt. Ltd.
                    </a>{" "}
                    2023
                  </p>
                  <div className="flex items-end justify-end w-full gap-4">
                    <a
                      href="https://www.instagram.com/sublimeisland"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 15 15"
                        className="fill-slate-50"
                      >
                        <path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z"></path>
                        <path d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@sublimeisland"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-slate-50"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sublimeislands"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-slate-50"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
