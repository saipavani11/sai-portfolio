import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      className="py-20 text-white "
    >
      <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold text-[#e9c136] drop-shadow-lg">
        My Projects
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation={{
    prevEl: ".custom-prev",
    nextEl: ".custom-next",
  }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12 max-w-6xl mx-auto"
>
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="flex flex-col h-[420px] p-6 rounded-xl 
                bg-white/10 backdrop-blur-md
                shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="rounded-xl overflow-hidden group relative h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
                </div>

                <div className="pt-4 flex flex-col flex-grow">
                  <h3 className="text-xl mb-2 font-semibold text-white group-hover:text-[#e9c136] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 flex-grow text-[#cbbde2] line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-block mt-auto px-6 py-2 rounded-lg text-center 
                      border-2 border-[#9c7cb4]/40 text-[#e9c136] font-medium 
                      hover:bg-[#9c7cb4]/20 hover:border-[#e9c136]/60 hover:text-white 
                      shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Navigation Buttons */}
        <button
  className="custom-prev absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 
  z-10 w-10 h-10 flex items-center justify-center rounded-full 
  bg-[#e9c136]/90 text-black cursor-pointer shadow-lg 
  hover:scale-110 transition"
>
  ‹
</button>
<button
  className="custom-next absolute top-1/2 right-20 translate-x-1/2 -translate-y-1/2 
  z-10 w-10 h-10 flex items-center justify-center rounded-full 
  bg-[#e9c136]/90 text-black cursor-pointer shadow-lg 
  hover:scale-110 transition"
>
  ›
</button>

        <style>{`
          .swiper-pagination-bullet {
            background: #9c7cb4 !important;
            opacity: 0.6;
          }
          .swiper-pagination-bullet-active {
            background: #e9c136 !important;
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
