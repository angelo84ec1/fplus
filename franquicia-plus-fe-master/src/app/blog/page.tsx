"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/img-franquicias/Group 250.jpg";
import bannerPhone from "@/assets/img-franquicias/Group -39.jpg";
import { useEffect, useState } from "react";
import allBlogs from "@/static/Content/BlogGeneral/blogs.json";
import { BlogsGeneral } from "@/types/BlogsGeneral";
import CardBlog from "@/components/CardBlog";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCategories from "@/components/Blog/BlogCategories";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogsGeneral["blogs"]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const blogsPerPage = 9;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria) {
      setSelectedCategory(categoria);
    } else {
      setSelectedCategory("Todas");
    }
  }, [searchParams]);

  useEffect(() => {
    const blogsJson = allBlogs.blogs;
    const sortedBlogs = blogsJson.sort(
      (a, b) =>
        new Date(b.fechaOrdenada).getTime() -
        new Date(a.fechaOrdenada).getTime()
    );
    setBlogs(sortedBlogs);
    setTotalPages(Math.ceil(blogs.length / blogsPerPage));
  }, [blogs.length]);
  // Calculate the start and end index of the blogs to be displayed on the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  // Get the sliced array of blogs based on the current page
  const displayedBlogs = blogs.slice(startIndex, endIndex);

  return (
    <main>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="lg:block hidden h-[20em] right-0 left-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full">
              <Image
                unoptimized
                src={bannerPc}
                alt={""}
                className="images"
                draggable={false}
              />
            </div>
            <div className="absolute top-0 bottom-0 left-[80px] flex justify-center items-center">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-5xl text-white"
              >
                SE PARTE DE NUESTRA <br /> COMUNIDAD F+
              </div>
            </div>
          </div>
        </div>
        <div className="h-full lg:hidden block">
          <div className="h-[6rem] bg-[#0d132f]" />
          <div className="relative h-[12rem]">
            <div className="h-full w-full absolute">
              <Image
                unoptimized
                src={bannerPhone}
                alt={""}
                className="images"
                draggable={false}
              />
            </div>
            <div className="absolute top-0 bottom-0 left-10 flex items-center">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="text-4xl text-white"
              >
                Sé parte de <br />
                nuestra <br /> comunidad f+
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full flex lg:flex-row flex-col p-4">
          <BlogCategories selectedCategory={selectedCategory} />
          <div className="flex w-full justify-center lg:py-0 py-10 lg:px-0 px-6">
            <div className="w-full max-w-[1024px] grid lg:grid-cols-3 justify-center h-full gap-10">
              {displayedBlogs.length
                ? displayedBlogs.map((blog) => {
                    if (
                      blog.valueCategoria === selectedCategory ||
                      selectedCategory === "Todas"
                    ) {
                      return (
                        <div key={blog.id} className="w-full h-96">
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
                      );
                    } else {
                      return null;
                    }
                  })
                : Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center w-full h-full"
                    >
                      {index === 1 && (
                        <div
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="text-[#fa5e4d] text-9xl animate-spin"
                        >
                          <CgSpinnerTwoAlt />
                        </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        {totalPages > 1 && selectedCategory === "Todas" && (
          <div className="flex justify-center items-center py-4 gap-4">
            <div
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`text-5xl w-12 aspect-square flex justify-center items-center ${
                currentPage === 1
                  ? "text-transparent"
                  : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
              }`}
            >
              <IoIosArrowBack />
            </div>
            {Array.from({ length: totalPages }).map((_, index) => (
              <div key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={` relative flex justify-center items-center border text-2xl w-12 aspect-square rounded-full cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-[#fa5e4d] text-white"
                      : "hover:bg-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(blogs.length / blogsPerPage))
                )
              }
              className={`text-5xl w-12 aspect-square flex justify-center items-center ${
                currentPage === Math.ceil(blogs.length / blogsPerPage)
                  ? "text-transparent"
                  : "rounded-full text-[#fa5e4d] hover:bg-slate-200 cursor-pointer"
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </section>

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default BlogsPage;
