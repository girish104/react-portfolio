import React from "react";
import filmatic from "../assets/img/portfolio/filmatic.jpg";
import saman from "../assets/img/portfolio/saman.jpg";
import portfolioImg from "../assets/img/portfolio/portfolio.png";
import jobs from "../assets/img/portfolio/jobs.jpg";
import foodie from "../assets/img/portfolio/foodie.png";

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

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {[
            {
              img: foodie,
              title: "Foodie - React",
              desc: "Hungry? Order Now!",
              link: "https://github.com/girish104/foodie-react-app",
            },
            {
              img: filmatic,
              title: "Filmatic - Laravel",
              desc: "Search all your favourite movies here!",
              link: "https://github.com/girish104/filmatic",
            },
            {
              img: saman,
              title: "Saman e-commerce",
              desc: "An e-commerce website",
              link: "https://github.com/girish104/saman",
            },
            {
              img: portfolioImg,
              title: "Portfolio - React",
              desc: "Nothing to say, right?",
              link: "https://github.com/girish104/react-portfolio",
            },

            {
              img: jobs,
              title: "Jobs App - Laravel",
              desc: "Job search website",
              link: "https://github.com/girish104/jobs-app",
            },
          ].map((project, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <div className="relative rounded-md shadow-md overflow-hidden group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                <a
                  href={project.link}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </a>
              </h3>
              <p className="font-medium text-base text-secondary">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
