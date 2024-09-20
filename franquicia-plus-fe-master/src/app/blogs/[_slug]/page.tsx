/* eslint-disable @next/next/no-img-element */
"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bannerPc from "@/assets/img-franquicias/Group -23.jpg";
import { useEffect, useState } from "react";
import BlogCategories from "@/components/Blog/BlogCategories";
import { BlogData } from "@/types/BlogData";
import blogs from "@/static/Content/BlogGeneral/blogs.json";
import { BlogsGeneral } from "@/types/BlogsGeneral";
import "./blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaLinkedin,
  FaShareSquare,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ErrorPage from "@/components/ErrorPage";

const Blogs = () => {
  const [article, setArticle] = useState<BlogData>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [compartirToggle, setCompartirToggle] = useState(false);
  const [latestBlogs, setLatestBlogs] = useState<BlogsGeneral["blogs"]>([]);
  const [urlBlog, setUrlBlog] = useState("");

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

  useEffect(() => {
    const urlBlog = window.location.pathname;
    const routerParts = urlBlog.split("/");
    const blogUrl = routerParts[2];
    setUrlBlog(`https://franquiciaplus.com/blogs/${blogUrl}`);

    try {
      setArticle(require(`@/static/Content/BlogPost/${blogUrl}.json`));
      if (article) {
        setSelectedCategory(article?.category);
      }
    } catch (e: any) {
      console.log(e);
    }
  }, [article]);

  const compartirFacebook = (urlBlog: string) => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      urlBlog
    )}`;
    window.open(url, "_blank");
  };

  const compartirTwitter = (urlBlog: string) => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      urlBlog
    )}`;
    window.open(url, "_blank");
  };

  const compartirLinkedin = (urlBlog: string) => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      urlBlog
    )}`;
    window.open(url, "_blank");
  };

  if (article) {
    return (
      <main>
        <section>
          <Navbar />
        </section>

        <section>
          <div className="h-[20em] right-0 left-0">
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
              <div className="absolute bottom-10 inset-x-0 left-[80px] flex justify-center items-center">
                <div
                  data-aos="fade-right"
                  data-aos-delay="150"
                  className="text-4xl text-white"
                  dangerouslySetInnerHTML={{ __html: article.title }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full flex lg:flex-row flex-col p-4">
            <div className="flex flex-col gap-y-4">
              <BlogCategories selectedCategory={selectedCategory} />
              <div
                onClick={() => setCompartirToggle(true)}
                className="w-full hidden lg:flex justify-center py-2 rounded-xl items-center border text-white no-underline bg-[#fa5e4d] hover:bg-[#0d132f] relative cursor-pointer"
              >
                Compartir
                <div className="absolute top-0 bottom-0 flex items-center right-5">
                  <FaShareSquare />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8 p-0 lg:pl-10">
              <div className="container container-grande">
                <div className="cuerpo blog">
                  <div>
                    {article.body.map((v, id) => (
                      <div key={`text-${id}`}>
                        {v.type === "titulo20" && (
                          <div
                            className="title tamañoLetra20"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "titulo22" && (
                          <div
                            className="title tamañoLetra22"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "titulo24" && (
                          <div
                            className="title tamañoLetra24"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "titulo26" && (
                          <div
                            className="title tamañoLetra26"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "titulo28" && (
                          <div
                            className="title tamañoLetra28"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "titulo30" && (
                          <div
                            className="title tamañoLetra30"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal14" && (
                          <div
                            className="parrafo tamañoLetra14"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal16" && (
                          <div
                            className="parrafo tamañoLetra16"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal18" && (
                          <div
                            className="parrafo tamañoLetra18"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal20" && (
                          <div
                            className="parrafo tamañoLetra20"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal22" && (
                          <div
                            className="parrafo tamañoLetra22"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "texto-normal24" && (
                          <div
                            className="parrafo tamañoLetra24"
                            style={{ color: v.color }}
                            dangerouslySetInnerHTML={{ __html: v.content }}
                          ></div>
                        )}
                        {v.type === "enlace14" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra14"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "enlace16" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra16"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "enlace18" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra18"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "enlace20" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra20"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "enlace22" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra22"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "enlace24" &&
                          typeof v.content === "string" && (
                            <a
                              className="enlace tamañoLetra24"
                              style={{ color: v.color }}
                              href={v.content}
                              target="_blank"
                            >
                              {v.content}
                            </a>
                          )}
                        {v.type === "lista" && Array.isArray(v.content) && (
                          <div className="list">
                            <ul>
                              {v.content.map((item, index) => (
                                <li key={`li${index}`}>
                                  {item.type === "titulo-lista20" && (
                                    <p
                                      className="tituloLista tamañoLetra20"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "titulo-lista22" && (
                                    <p
                                      className="tituloLista tamañoLetra22"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "titulo-lista24" && (
                                    <p
                                      className="tituloLista tamañoLetra24"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "titulo-lista26" && (
                                    <p
                                      className="tituloLista tamañoLetra26"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "titulo-lista28" && (
                                    <p
                                      className="tituloLista tamañoLetra28"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "titulo-lista30" && (
                                    <p
                                      className="tituloLista tamañoLetra30"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista14" && (
                                    <p
                                      className="textoLista tamañoLetra14"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista16" && (
                                    <p
                                      className="textoLista tamañoLetra16"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista18" && (
                                    <p
                                      className="textoLista tamañoLetra18"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista20" && (
                                    <p
                                      className="textoLista tamañoLetra20"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista22" && (
                                    <p
                                      className="textoLista tamañoLetra22"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "texto-lista24" && (
                                    <p
                                      className="textoLista tamañoLetra24"
                                      style={{ color: v.color }}
                                    >
                                      {item.content}
                                    </p>
                                  )}
                                  {item.type === "enlace-lista14" && (
                                    <a
                                      className="enlace tamañoLetra14"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                  {item.type === "enlace-lista16" && (
                                    <a
                                      className="enlace tamañoLetra16"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                  {item.type === "enlace-lista18" && (
                                    <a
                                      className="enlace tamañoLetra18"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                  {item.type === "enlace-lista20" && (
                                    <a
                                      className="enlace tamañoLetra20"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                  {item.type === "enlace-lista22" && (
                                    <a
                                      className="enlace tamañoLetra22"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                  {item.type === "enlace-lista24" && (
                                    <a
                                      className="enlace tamañoLetra24"
                                      style={{ color: v.color }}
                                      href={item.content}
                                      target="_blank"
                                    >
                                      {item.content}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {v.type === "lista2imagenes" &&
                          Array.isArray(v.content) && (
                            <div className="d-flex lista2imagenes">
                              {v.content.map((item, index) => (
                                <div key={`li${index}`}>
                                  {item.type === "imagen-mediana-lista" && (
                                    <div className="imagen-mediana w-auto">
                                      <Image
                                        unoptimized
                                        height={1000}
                                        width={1000}
                                        draggable={false}
                                        src={item.content}
                                        alt={item.alt || ""}
                                        title={item.title}
                                        className="my-20px h-full object-cover w-auto"
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        {v.type === "imagen-mediana" &&
                          typeof v.content === "string" && (
                            <div className="imagen-mediana w-auto">
                              <Image
                                unoptimized
                                height={1000}
                                width={1000}
                                src={v.content}
                                alt={v.alt || ""}
                                title={v.title}
                                className="my-20px h-full object-cover w-auto"
                                draggable={false}
                              />
                            </div>
                          )}
                        {v.type === "imagen-grande" &&
                          typeof v.content === "string" && (
                            <div className="imagen-grande w-auto">
                              <Image
                                unoptimized
                                height={1000}
                                width={1000}
                                src={v.content}
                                alt={v.alt || ""}
                                title={v.title}
                                className="my-20px h-full object-cover w-auto"
                                draggable={false}
                              />
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                  <div
                    className="container-categorias-individuales"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <button
                      className="boton-compartir categoria-compartir relative"
                      style={{ width: "350px" }}
                      onClick={() => setCompartirToggle(!compartirToggle)}
                    >
                      <p className="share-button">Compartir</p>
                      <div className="absolute top-0 bottom-0 flex items-center right-5">
                        <FaShareSquare />
                      </div>
                    </button>
                    {/* Modal component */}
                    {compartirToggle && (
                      <div className="z-10 inset-0 fixed bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="w-96 flex flex-col bg-white border p-4 rounded-2xl gap-y-3">
                          <div className="flex justify-between text-xl">
                            <div>Compartir en:</div>
                            <div
                              onClick={() => setCompartirToggle(false)}
                              className="hover:text-[#fa5e4d] cursor-pointer"
                            >
                              <IoClose />
                            </div>
                          </div>
                          <div className="redes-sociales">
                            <button
                              className="flex flex-col items-center w-1/3"
                              onClick={() => compartirFacebook(urlBlog)}
                            >
                              <FaFacebook />
                              <p>Facebook</p>
                            </button>
                            <button
                              className="flex flex-col items-center w-1/3"
                              onClick={() => compartirTwitter(urlBlog)}
                            >
                              <FaTwitter />
                              <p>Twitter</p>
                            </button>
                            <button
                              className="flex flex-col items-center w-1/3"
                              onClick={() => compartirLinkedin(urlBlog)}
                            >
                              <FaLinkedin />
                              <p>LinkedIn</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full bg-[#0D132F]">
          <div className="h-full w-full flex flex-col p-10 items-center gap-4">
            <div className="text-white text-5xl">
              Descubre mas temas de interés!!
            </div>
            <div className="flex flex-col lg:flex-row w-[90%] justify-between lg:p-8 gap-6 lg:gap-0">
              {latestBlogs.slice(0, 3).map((blog, index) => (
                <div
                  key={index}
                  className="aspect-square h-[300px] rounded-3xl overflow-hidden"
                >
                  <div className="text-white relative">
                    <div className="h-[300px] aspect-square">
                      <Image
                        unoptimized
                        width={1000}
                        height={1000}
                        src={blog.imagen}
                        className="images"
                        alt=""
                        draggable={false}
                      />
                    </div>
                    <div className="content-card-bottom absolute bottom-0 flex flex-row w-full right-0 left-0">
                      <div className="flex gap-1 flex-col justify-center bg-[#02c5d5] w-full px-3 relative">
                        <div className="top-1 absolute text-xs">
                          {blog.fecha}
                        </div>
                        <a
                          href={`/blogs/${blog.url}`}
                          className="text-[#0D132F] text-sm no-underline cursor-pointer"
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                        >
                          {blog.nombre}
                        </a>
                      </div>
                      <a
                        href={`/blogs/${blog.url}`}
                        className="w-[80px] h-[80px] bg-[#0D132F] flex items-center justify-center bottom-0 right-0 cursor-pointer"
                      >
                        <div className="aspect-square p-1 border-2 border-white rounded-full flex justify-center items-center">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="aspect-square w-6 text-white"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <Footer />
        </section>
        <ChatBot />
      </main>
    );
  } else {
    return <ErrorPage />;
  }
};

export default Blogs;