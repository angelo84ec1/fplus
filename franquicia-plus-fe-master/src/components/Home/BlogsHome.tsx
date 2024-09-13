import { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import blogs from "@/static/Content/BlogGeneral/blogs.json";
import { BlogsGeneral } from "@/types/BlogsGeneral";
import CardBlog from "../CardBlog";

const BlogEventosSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestBlogs, setLatestBlogs] = useState<BlogsGeneral["blogs"]>([]);
  const totalSlides = 3;

  const handleSlideChange = (direction: string) => {
    if (direction === "next") {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    } else if (direction === "prev") {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
      );
    }
  };

  const getClassName = (index: number) => {
    if (index === currentSlide) {
      return "active";
    } else if ((index + 1) % 3 === currentSlide) {
      return "prev";
    } else if ((index - 1 + 3) % 3 === currentSlide) {
      return "next";
    }
    return "";
  };
  const getLatestBlogs = () => {
    const blogsJson = blogs.blogs;
    // Parse the dates before sorting
    const sortedBlogs = blogsJson.sort(
      (a, b) =>
        new Date(b.fechaOrdenada).getTime() -
        new Date(a.fechaOrdenada).getTime()
    );
    setLatestBlogs(sortedBlogs);
  };

  useEffect(() => {
    getLatestBlogs();
  }, []);

  return (
    <div className="my-5">
      <div className="">
        <div className="mb-5">
          <div className="col-md-8 offset-md-2 text-center">
            <p className="text-4xl" style={{ fontFamily: "Mukata Mahee Bold" }}>
              Blog y Eventos
            </p>
            <p className="text-xl">Tenemos información para ti</p>
          </div>
        </div>
        <div className="lg:flex hidden w-full justify-center ">
          <div className="w-full max-w-[1024px] flex justify-center h-full gap-10">
            {latestBlogs.slice(0, 3).map((blog, index) => (
              <div key={index} data-aos="fade-in" className="w-full h-96">
                <CardBlog
                  blogImagen={blog.imagen}
                  cardWrapperClass={`text-white`}
                  buttonClass=""
                  buttonText={blog.valueCategoria}
                  cardClass="tipo-letra-bold"
                  blogIndividual={blog.url}
                  cardText={blog.nombre}
                  dateClass="text-white"
                  cardDate={blog.fecha}
                />
              </div>
            ))}
          </div>
        </div>
        <div id="slider" className="block lg:hidden">
          <div className="flex lg:hidden relative justify-center items-center overflow-hidden">
            {latestBlogs.slice(0, 3).map((blog, index) => (
              <a
                key={index}
                href={`/blogs/${blog.url}`}
                className={`slideBlogs ${getClassName(
                  index
                )} no-underline text-white rounded-3xl overflow-hidden`}
                style={{
                  backgroundImage: `url(${blog.imagen})`,
                }}
              >
                <div
                  className={`justify-end overflow-hidden relative flex no-underline text-white flex-col h-full p-2`}
                >
                  <div className="flex flex-col items-start justify-end h-24">
                    <button
                      type="button"
                      className={`text-white bg-[#0d132f] px-1 rounded-lg mb-2`}
                    >
                      {blog.valueCategoria}
                    </button>
                    <div className="no-underline">{blog.nombre}</div>
                  </div>

                  <div className={`text-white no-underline`}>{blog.fecha}</div>
                </div>
              </a>
            ))}
            <button
              className="absolute left-2 z-10 text-[#fa5e4d]"
              onClick={() => handleSlideChange("prev")}
            >
              <IoIosArrowBack className="text-4xl" />
            </button>
            <button
              className="absolute right-2 z-10 text-[#fa5e4d]"
              onClick={() => handleSlideChange("next")}
            >
              <IoIosArrowForward className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEventosSection;
