import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import phone from "@/assets/img-franquicias/Group -70.png";
import pc from "@/assets/img-franquicias/Group 279.png";

const PublicityComponent = () => {
  return (
    <div className="h-[525px] lg:h-[20em] w-full">
      <Carousel controls={false} indicators={false} className="w-full h-full">
        <Carousel.Item
          interval={3000}
          className="relative h-[525px] lg:h-[20em]"
        >
          <div className="w-full h-full lg:block hidden absolute">
            <Image
              unoptimized
              width={50000}
              height={50000}
              draggable={false}
              alt=""
              src={pc}
              className="images"
            />
          </div>
          <div className="w-full h-full block lg:hidden absolute">
            <Image
              unoptimized
              width={50000}
              height={50000}
              draggable={false}
              alt=""
              src={phone}
              className="images"
            />
          </div>

          <div className="absolute w-full lg:top-0 top-60 lg:bottom-0 bottom-10 flex items-center lg:ml-64 lg:px-0 px-10">
            <div className="w-full h-full lg:h-auto flex flex-col lg:justify-center justify-between items-center lg:items-start">
              <div
                className="lg:text-3xl text-2xl lg:w-[80%] mb-5 text-white"
                data-aos="fade-right"
              >
                Franquicia tu negocio con nuestra <br />
                metodología única que ha ayudado <br />a +50 marcas a nivel
                mundial
              </div>

              <a
                className="no-underline"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=593999209555&text=Hola, estoy interesado en anunciar mi franquicia en su portal.&app_absent=0"
              >
                <button
                  className="lg:text-xl text-2xl lg:px-4 px-6 py-2 bg-[#02C5D5] text-black hover:bg-[#F85E4D] hover:text-white rounded-2xl"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  Saber más
                </button>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PublicityComponent;
