import React from "react";
import filmatic from "../assets/img/portfolio/filmatic.jpg";
import saman from "../assets/img/portfolio/saman.jpg";
import portfolioImg from "../assets/img/portfolio/portfolio.png";
import jobs from "../assets/img/portfolio/jobs.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="font-bold text-dark text-2xl mb-4 sm:text-3xl lg:text-4xl">
              Works
            </h2>
          </div>
        </div>
        {/* Project List */}
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="relative rounded-md shadow-md overflow-hidden group">
              <img
                src={filmatic}
                alt="Filmatic"
                className="w-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              <a
                href="https://github.com/girish104/filmatic"
                className="hover:text-primary transition-colors duration-300"
              >
                Filmatic - Laravel
              </a>
            </h3>
            <p className="font-medium text-base text-secondary">
              Search all your favourite movies here!
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="relative rounded-md shadow-md overflow-hidden group">
              <img
                src={saman}
                alt="Saman"
                className="w-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              <a
                href="https://github.com/girish104/saman"
                className="hover:text-primary transition-colors duration-300"
              >
                Saman "e-commerce"
              </a>
            </h3>
            <p className="font-medium text-base text-secondary">
              An e-commerce website
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="relative rounded-md shadow-md overflow-hidden group">
              <img
                src={portfolioImg}
                alt="Portfolio"
                className="w-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Portfolio - Laravel React
              </a>
            </h3>
            <p className="font-medium text-base text-secondary">
              Nothing to say, right?
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="relative rounded-md shadow-md overflow-hidden group">
              <img
                src={jobs}
                alt="Jobs App"
                className="w-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              <a
                href="https://github.com/girish104/jobs-app"
                className="hover:text-primary transition-colors duration-300"
              >
                Jobs App - Laravel
              </a>
            </h3>
            <p className="font-medium text-base text-secondary">
              Job search website{" "}
              <span style={{ textDecoration: "line-through" }}>
                Hire me, anyone 🥹
              </span>{" "}
              ? LinkedIn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
