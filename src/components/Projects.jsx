import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { projects } from "../data/projects";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div   className=" flex" 
 >
      <Link  className="text-[#7c6aea] w-fit text-sm border border-[#7c6aea] px-4 py-2 rounded-lg hover:bg-[#7c6aea] hover:text-white transition"
        to="/projects"
              >
        View All
      
      </Link>
      <FaArrowRight  className="align-center text-center"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-4">
        <Slider {...settings}>
          {projects.map((p, i) => (
            <a href={p.link} key={i} className="px-3">
              <div className="bg-white/5  hover:bg-[#7c6aea]  p-8 rounded-xl hover:scale-105 transition   shadow-md">
                <h3 className="text-xl font-semibold text-[#7c6aea] hover:text-white ">
                  {p.name}
                </h3>

                <p className="text-gray-300 mt-3">{p.desc}</p>

                <p className="text-gray-400 mt-3 text-sm">Tech: {p.tech}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-[#7c6aea]"
                >
                  Visit Project →
                </a>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
}
