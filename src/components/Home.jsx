import React from "react";
import Gojo from "../assets/img/gojo_img.png";

const Home = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-md">
              <span className="font-bold">
                &lt;?php echo &quot;hello world&quot;; ?&gt;
              </span>
              ,
              <span className="block font-bold text-black text-2xl mt-1 lg:text-3xl">
                I'm <span style={{ textDecoration: "line-through" }}>Iron Man</span> Full Stack Developer</span>
            </h1>

            <p className="font-medium text-secondary mb-10 leading-relaxed">
              with hands-on experience specializing in <span className="text-secondary font-bold">PHP, Laravel, and JavaScript. </span>I've worked on real-world projects, building dynamic web
              applications and enhancing user experiences.
            </p>

            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="self-end mt-10 px-4 lg:w-1/2">
            <div className="relative lg:mt-9 lg:right-0">
              <img
                src={Gojo}
                alt="Description"
                style={{ maxWidth: "65%" }}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
