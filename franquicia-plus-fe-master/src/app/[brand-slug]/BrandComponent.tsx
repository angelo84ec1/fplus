/* eslint-disable @next/next/no-img-element */
"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DetalleMarca } from "@/types/DetalleMarca";
import { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import axios from "../utils/axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DotProps } from "react-multi-carousel";
import Image from "next/image";
import cash from "@/assets/img/Paginasinternas/rentabilidad.png";
import bag from "@/assets/img/Paginasinternas/negocio.png";
import graph from "@/assets/img/Paginasinternas/posiciona.png";
import compass from "@/assets/img/Paginasinternas/zona.png";
import pin from "@/assets/img/Paginasinternas/ubica.png";
import signature from "@/assets/img/Paginasinternas/know.png";
import board from "@/assets/img/Paginasinternas/formacion.png";
import megaphone from "@/assets/img/Paginasinternas/megafonopubli.png";
import spotLight from "@/assets/img/Paginasinternas/fondo-luces.jpg";
import { toast } from "react-toastify";
import { Sector } from "@/types/Sector";
import { NextResponse } from "next/server";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const getUbications = async () => {
  const { data } = await axios.get("/api/v1/ubicacion/");
  return data;
};

interface props {
  detalleMarca: DetalleMarca;
}
const countries = [
  { name: 'Ecuador', code: '+593', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Ecuador.png' },
  { name: 'Argentina', code: '+54', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
  { name: 'Brasil', code: '+55', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg' },
  { name: 'Colombia', code: '+57', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' },
  { name: 'México', code: '+52', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' },
  { name: 'Perú', code: '+51', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg' },
  // Agrega más países si es necesario
];

const BrandComponent = ({ detalleMarca }: props) => {
  const brandDetails = detalleMarca;
  const [ubications, setUbications] = useState<Sector[]>();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [brand, setBrand] = useState("");
  const [phoneCode, setPhoneCode] = useState('+593'); // Có
  const [flag, setFlag] = useState('https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Ecuador.png'); // Bandera inicial de Ecuador
  const router = useRouter();
  const pathname = usePathname();


  const handleCountryChange = (e : any) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  
    // Buscar los datos del país seleccionado (código y bandera)
    const selectedCountryData = countries.find(
      (c) => c.name === selectedCountry
    );
  
    if (selectedCountryData) {
      setPhoneCode(selectedCountryData.code); // Actualiza el código de teléfono
      setFlag(selectedCountryData.flag);     // Actualiza la bandera
      setPhone(selectedCountryData.code);    // Inicializa el campo de teléfono con el nuevo código
    }
  };

    const handlePhoneChange = (e : any) => {
    const phoneValue = e.target.value.replace(phoneCode, ''); // Eliminar el código al editar
    setPhone(`${phoneCode}${phoneValue}`); // Mantener el código y actualizar el número
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      phone !== "" &&
      country !== "" &&
      province !== "" &&
      brand !== "" &&
      message !== ""
    ) {
      let parametrosn =
        "nombre=" +
        name +
        "&apellido=" +
        surname +
        "&pais=" +
        country +
        "&provincia=" +
        province +
        "&telefono=" +
        phone +
        "&email=" +
        email +
        "&comentarios=" +
        message +
        "&nombremarca=" +
        brand;

      const response = axios.post("/marca/send_email/", parametrosn);
        console.log(phone)
      axios
        .post("https://api.escala.com/new-lead/", {
          contact_first_name: name,
          contact_last_name: surname,
          contact_email: email,
          contact_phone_number: phone,
          contact_job_title: country,
          contact_city: province,
          cf_contact_comentario_aycp_text: message,
          account_name: brand,
          cf_contact_marca_de_interes_vkby_text: brand,

          form_id: "8689a576-ae58-11ee-9c93-22ce4c57bdd0",
          form_name: "Marcas",
          form_fields_metadata: {
            contact_first_name: {
              name: "Nombre",
              type: "text",
              lead: "contact_first_name",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_last_name: {
              name: "Apellido",
              type: "text",
              lead: "contact_last_name",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_email: {
              name: "Email",
              type: "text",
              lead: "contact_email",
              required: "True",
              options: [],
              default: "",
              regex:
                "[a-z0-9-A-Z!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9-A-Z!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9-A-Z](?:[a-z0-9-A-Z]*[a-z0-9-A-Z])?\\.)+[a-z0-9-A-Z](?:[a-z0-9-A-Z]*[a-z0-9-A-Z])+",
              placeholder: "",
            },
            contact_phone_number: {
              name: "Teléfono",
              type: "text",
              lead: "contact_phone_number",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_job_title: {
              name: "País",
              type: "text",
              lead: "contact_job_title",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            contact_city: {
              name: "Provincia",
              type: "text",
              lead: "contact_city",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            cf_contact_comentario_aycp_text: {
              name: "Comentario",
              type: "text",
              lead: "cf_contact_comentario_aycp_text",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
            account_name: {
              name: "Marca",
              type: "text",
              lead: "account_name",
              required: "False",
              options: [],
              default: "",
              regex: "",
              placeholder: "",
            },
          },
          create_deals: true,
          update_deal_value: false,
          notify_leads: true,
          notify_leads_recipients: ["asesoria@franquiciaplus.com"],
          notify_submits: false,
          notify_submits_recipients: [],
          page_url: "https://escalapages.com/plugins/forms/embed.html",
          page_title: "Escala - Form",
          tenant_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          customer_id: "a9792f78-9064-11ee-b842-ee9d42ce137e",
          visitor_id: "bcc4bf53-4b06-453f-afa9-e53f1f29a618",
          visit_id: "5798b27f-6bcc-4095-98a3-f9e0ac7293a6",
          utm_type: "typein",
          utm_source: "(direct)",
          utm_medium: "(none)",
          utm_campaign: "(none)",
          utm_terms: "(none)",
          escala_acc: "(none)",
          escala_cam: "(none)",
          escala_grp: "(none)",
          escala_ad: "(none)",
          escala_net: "(none)",
          escala_src: "(direct)",
          escala_la: "true",
          escala_ol: "false",
          first_utm_type: "typein",
          first_utm_source: "(direct)",
          first_utm_medium: "(none)",
          first_utm_campaign: "(none)",
          first_utm_terms: "(none)",
          first_escala_acc: "(none)",
          first_escala_cam: "(none)",
          first_escala_grp: "(none)",
          first_escala_ad: "(none)",
          first_escala_net: "(none)",
          first_escala_src: "(direct)",
          first_escala_la: "true",
          first_escala_ol: "false",
          device_type: "desktop",
          device_brand: "",
          device_model: "",
          device_client_type: "browser",
          device_client_name: "Chrome",
          device_client_version: "120.0",
          device_client_engine: "Blink",
          device_os_name: "Windows",
          device_os_version: "10.0",
          device_os_platform: "x64",
          contact_phone: null,
          runner_version: "0.1.13",
        })
        .then(console.log)
        .catch(console.error);
      response
        .then(() => {
          if (
            name !== "" &&
            surname !== "" &&
            email !== "" &&
            phone !== "" &&
            province !== "" &&
            country !== "" &&
            message !== ""
          ) {
            toast.success(
              "Mensaje enviado, pronto un asesor se contactará contigo."
            );
            setName("");
            setSurname("");
            setEmail("");
            setPhone("");
            setProvince("");
            setCountry("");
            setMessage("");
          }

          // console.log("El csrf de response",csrftoken)
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Lo sentimos, hubo un error al enviar tu mensaje. Inténtalo nuevamente."
          );
        });
    }
  };

  useEffect(() => {
    getUbications().then((newData) => setUbications(newData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CustomDot = ({ index, onClick, active }: DotProps) => {
    return (
      <li
        className={`block lg:hidden w-3 mx-2 cursor-pointer aspect-square rounded-full ${
          active ? "bg-black" : "bg-[#d6d6d6]"
        }`}
        onClick={() => onClick!()}
      ></li>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const details = [
    {
      image: cash,
      alt: "cash",
      title: "Alta <br />Rentabilidad",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: bag,
      alt: "bag",
      title: "Negocio <br />Comprobado",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: graph,
      alt: "graph",
      title: "Marca <br />Posicionada",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: compass,
      alt: "compass",
      title: "Exclusividad <br />Zona Geográfica",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: pin,
      alt: "pin",
      title: "Ubicación y <br />Montaje",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: signature,
      alt: "signature",
      title: "Know-How <br />del Negocio",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: board,
      alt: "board",
      title: "Formación y <br />Capacitación",
      color: brandDetails?.color_ocho_cajas,
    },
    {
      image: megaphone,
      alt: "megaphone",
      title: "Asistencia <br />Publicitaria",
      color: brandDetails?.color_ocho_cajas,
    },
  ];

  const whiteBoxes = [
    {
      title: "Valor de Franquicia",
      value: Number(brandDetails?.valor_franquicia).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    },
    {
      title: "Regalias",
      value: brandDetails?.regalias,
    },
    {
      title: "Fee de Marketing",
      value: brandDetails?.fee_de_marketing,
    },
    {
      title: "Duración del contrato",
      value: brandDetails?.duracion_contrato,
    },
    {
      title: "¿Valor de Renovación?",
      value: Number(brandDetails?.valor_renovacion).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    },
    {
      title: "Metros local",
      value: brandDetails?.metros_local,
    },
    {
      title: "Recuperación inversión",
      value: brandDetails?.recuperacion_inversion,
    },
    {
      title: "Población mínima",
      value: brandDetails?.poblacion_minima,
    },
    {
      title: "¿Auditoria y Soporte?",
      value: brandDetails?.auditoria_soporte ? "Si" : "No",
    },
    {
      title: "Franquicias en Ecuador",
      value: brandDetails?.franquicias_en_ecuador,
    },
  ];

  return (
    <main>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="bg-[#0d132f] h-20 z-[1] relative" />
      </section>
      {brandDetails ? (
        <>
          <section
            style={{
              backgroundColor: brandDetails?.color_detalle_marca,
              color: brandDetails?.color_texto_detalle_marca,
            }}
          >
            <div className="py-4 relative  w-full flex justify-center">
              <div>
                <button
                  onClick={() => router.back()}
                  className="absolute flex items-center left-5"
                >
                  <IoIosArrowBack /> Regresar al buscador
                </button>
              </div>
              <div className="flex flex-col justify-center items-center lg:mt-0 mt-10">
                <div className="h-24 mb-5">
                  <img
                    loading="eager"
                    width={10000}
                    height={10000}
                    draggable={false}
                    data-aos="fade-down"
                    src={brandDetails.imagen_detalle_marca}
                    alt={brandDetails.alt_imagen_detalle_marca}
                    title={brandDetails.title_imagen_detalle_marca}
                    className="images"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="max-w-[700px] text-center text-lg"
                >
                  {brandDetails?.descripcion}
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: brandDetails?.color_detalle_marca }}
              className={`lg:h-screen h-[40vh] overflow-hidden`}
            >
              <img
                loading="eager"
                width={10000}
                height={10000}
                draggable={false}
                src={brandDetails?.imagen_banner}
                alt=""
                className="images"
              />
            </div>

            <div
              className={`flex justify-center bg-[${brandDetails?.color_promesa_valor}]`}
              style={{ backgroundColor: brandDetails?.color_promesa_valor }}
            >
              <iframe
                className="w-[80%] h-[13.4375rem] lg:h-80 lg:w-auto aspect-video rounded-3xl my-10"
                style={{ boxShadow: "4px 21px 21px rgba(0,0,0,.45)" }}
                width="560"
                height="315"
                src={brandDetails?.video_marca}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className="h-full"
              style={{ backgroundColor: brandDetails?.color_promesa_valor }}
            >
              <div className="flex py-8 lg:flex-row flex-col overflow-hidden">
                <div className="flex items-center justify-center lg:w-2/5">
                  <div className="max-w-[90%] w-auto lg:h-[20em] h-40 overflow-hidden">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_producto}
                      alt={brandDetails?.alt_imagen_producto}
                      title={brandDetails?.title_imagen_producto}
                      className="w-full h-full object-contain"
                      data-aos="fade-right"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:w-3/5 lg:mt-0 mt-5">
                  <div
                    data-aos="fade-down"
                    style={{
                      fontFamily: "Mukata Mahee Bold",
                      color: brandDetails?.color_texto_titulo_promesa_valor,
                    }}
                    className="lg:text-7xl text-2xl ml-2"
                  >
                    {brandDetails?.titulo_promesa_valor}
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{
                      color: brandDetails?.color_texto_cuerpo_promesa_valor,
                    }}
                    className="lg:text-2xl text-base lg:pt-0 lg:px-0 px-4 pt-4"
                  >
                    {brandDetails?.cuerpo_promesa_valor}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-full overflow-hidden">
              <div className="w-screen flex justify-center overflow-hidden">
                <Carousel
                  arrows
                  draggable
                  showDots
                  infinite
                  customDot={<CustomDot />}
                  customRightArrow={
                    <button className="hidden lg:block absolute right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full">
                      <IoIosArrowForward className="text-xl" />
                    </button>
                  }
                  customLeftArrow={
                    <button className="hidden lg:block absolute left-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full">
                      <IoIosArrowBack className="text-xl" />
                    </button>
                  }
                  responsive={responsive}
                  className="max-w-[1200px] w-screen overflow-hidden lg:m-0 mx-8 my-4"
                >
                  <div className="rounded-xl overflow-hidden lg:mx-1 lg:my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_1}
                      alt={brandDetails?.alt_imagen_local_1}
                      title={brandDetails?.title_imagen_local_1}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_2}
                      alt={brandDetails?.alt_imagen_local_2}
                      title={brandDetails?.title_imagen_local_2}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_3}
                      alt={brandDetails?.alt_imagen_local_3}
                      title={brandDetails?.title_imagen_local_3}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_4}
                      alt={brandDetails?.alt_imagen_local_4}
                      title={brandDetails?.title_imagen_local_4}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_5}
                      alt={brandDetails?.alt_imagen_local_5}
                      title={brandDetails?.title_imagen_local_5}
                      className="images select-none"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden mx-1 my-5 h-[270px]">
                    <img
                      loading="eager"
                      width={10000}
                      height={10000}
                      draggable={false}
                      src={brandDetails?.imagen_local_6}
                      alt={brandDetails?.alt_imagen_local_6}
                      title={brandDetails?.title_imagen_local_6}
                      className="images select-none"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="h-full w-full flex flex-col gap-4 items-center">
                <div
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="pt-8 flex justify-center text-black lg:text-[3.5rem] text-2xl lg:leading-[3.125rem] text-center lg:w-[60%] lg:px-0 px-7"
                >
                  ¿Por qué deberías comprar una Franquicia?
                </div>
                <div className="pt-8 flex justify-center text-black lg:text-[1.25rem] text-sm lg:leading-[1.875rem] text-center lg:w-[60%] lg:px-0 px-4">
                  “Sabias qué adquirir una franquicia es invertir en un negocio
                  de éxito comprobado, VS un 95% de emprendimientos que tienen
                  el riesgo de fracasar durante los 3 primeros años”
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[90%] py-5 grid lg:grid-cols-4 grid-cols-2">
                  {details.map((detail, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center mb-4"
                      data-aos="flip-left"
                    >
                      <div
                        className="rounded-3xl w-[95%]"
                        style={{ backgroundColor: detail.color }}
                      >
                        <div className="flex justify-center">
                          <div className=" lg:h-[6.5em] h-11 lg:w-[7em] w-12 my-[0.5em]">
                            <Image
                              loading="eager"
                              unoptimized
                              draggable={false}
                              src={detail.image}
                              alt={detail.alt}
                              className="h-full w-full object-contain"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <p
                            style={{ fontFamily: "Mukata Mahee Bold" }}
                            className="text-white text-[1.5625em] leading-[1.4375rem] pt-1 text-center"
                            dangerouslySetInnerHTML={{ __html: detail.title }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={`h-full relative`}>
              <div className="h-full w-full absolute">
                <Image
                  unoptimized
                  loading="eager"
                  src={spotLight}
                  alt=""
                  className="images"
                  draggable={false}
                />
              </div>
              <div className="relative top-0 w-full h-full">
                <div className="pt-[5em] mb-[1rem] flex justify-center">
                  <p
                    style={{ fontFamily: "Mukata Mahee Bold" }}
                    className="text-white leading-[2.375rem] text-[3.25em] text-center"
                  >
                    Empieza tu negocio desde
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-[#47505a] leading-[2.75rem] text-[2.8125em] text-center">
                    {Number(brandDetails?.valor_marca).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div className="flex justify-center pt-[0.75em]">
                  <p className="text-white leading-[1.75rem] text-[1.875em] text-center">
                    Con ganancias aproximadas <br />
                    mensuales desde
                  </p>
                </div>
                <div className="flex justify-center mt-[1em]">
                  <p
                    style={{ fontFamily: "Mukata Mahee Bold" }}
                    className="text-white leading-[5.625rem] italic text-[6em] text-center"
                  >
                    {brandDetails?.ganancia_mensual}
                  </p>
                </div>
                <div className="flex justify-center mt-[1em]">
                  <div className="bg-white h-[0.5em] w-[50em]" />
                </div>
                <div className="flex justify-center">
                  <div className="mt-[3em] lg:w-[80%] w-[90%] flex lg:flex-row flex-col justify-center">
                    <div className="bg-white rounded-[1.9375em] lg:h-[12.4375em] h-48 mx-[1em] mb-[1rem] lg:w-[27.5em]">
                      <div className="pt-[4em] h-1/2 flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[2.25em] lg:leading-[2rem] text-2xl text-center"
                        >
                          Valor de Franquicia
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[1.6875em] lg:leading-[3.75rem] text-xl text-center relative -bottom-4"
                        >
                          Desde{" "}
                          <span className="text-[#47505a] text-[2.125em]">
                            {" "}
                            {Number(
                              brandDetails?.valor_franquicia
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-[1.9375em] lg:h-[12.4375em] h-48 mx-[1em] mb-[1rem] lg:w-[27.5em]">
                      <div className="pt-[2em] h-1/2 flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[2.25em] lg:leading-[2rem] text-2xl text-center"
                        >
                          Adecuación Aprox. <br />
                          del Local
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p
                          style={{ fontFamily: "Mukata Mahee Bold" }}
                          className="lg:text-[1.6875em] lg:leading-[3.75rem] text-xl text-center relative -bottom-4"
                        >
                          Desde{" "}
                          <span className="text-[#47505a] text-[2.125em]">
                            {" "}
                            {Number(
                              brandDetails?.valor_adecuacion_local
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-[1rem] pb-[3rem]">
                  <div className="w-[90%]">
                    {whiteBoxes.map((box, index) => (
                      <div
                        key={index}
                        className="inline-block px-[1.25em] pb-[0.625em] pt-[1.25em] lg:w-[20%] w-[50%]"
                      >
                        <div className="h-[30%]">
                          <p
                            style={{ fontFamily: "Mukata Mahee Bold" }}
                            className="lg:text-[1em] text-xs pb-[0.3125em] pl-[0.625em] text-[#47505a] italic"
                          >
                            {box.title}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg h-[40px] w-full">
                          <div className="flex items-center h-full">
                            <p
                              style={{ fontFamily: "Mukata Mahee Bold" }}
                              className="lg:text-[1.125em] text-xs pl-[0.625em] text-[#47505a] italic"
                            >
                              {box.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="h-full">
              <div className="flex justify-center pt-[1.5rem] mb-[1rem]">
                <div data-aos="fade-down" className="h-[9.375em] w-auto">
                  <img
                    loading="eager"
                    width={10000}
                    height={10000}
                    src={brandDetails?.imagen_formulario}
                    alt={brandDetails?.alt_imagen_formulario}
                    title={brandDetails?.title_imagen_formulario}
                    className="images"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex justify-center" data-aos="fade-down">
                <p
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[35px] text-center"
                >
                  Comienza tu propio negocio
                </p>
              </div>
              <div className="flex justify-center" data-aos="fade-down">
                <p
                  style={{ fontFamily: "Mukata Mahee Bold" }}
                  className="text-[35px] py-[16.25px] text-center"
                >
                  CONTÁCTANOS
                </p>
              </div>
              <div className="flex justify-center">
                <div className="lg:w-[60%] w-[90%]">
                  <form onSubmit={handleSubmit}>
                    <div className="flex lg:flex-wrap lg:flex-row flex-col">
                      <div className="form-group lg:w-1/2 w-full py-2 px-2">
                        <input
                          type="text"
                          className="form-control"
                          name="nombre"
                          value={name}
                          onChange={(e : any) => setName(e.target.value)}
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className="form-group lg:w-1/2 w-full py-2 px-2">
                        <input
                          type="text"
                          className="form-control"
                          name="apellido"
                          value={surname}
                          onChange={(e : any) => setSurname(e.target.value)}
                          placeholder="Apellido"
                          required
                        />
                      </div>
                      <div className="relative form-group lg:w-1/2 w-full py-2 px-2 cursor-pointer">
                        <div
                          className={`absolute top-0 bottom-0 flex items-center right-5 pointer-events-none`}
                        >
                          <IoIosArrowDown
                            style={{
                              color: brandDetails?.color_boton_formulario,
                            }}
                          />
                        </div>
                        <select
                            className="form-control cursor-pointer"
                            id="pais-interes"
                            name="pais"
                            value={country}
                            onChange={handleCountryChange}
                          >
                            <option value="" disabled>
                              País de Interés
                            </option>
                            {countries.map((country) => (
                              <option value={country.name} key={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                      </div>

                      <div className="relative form-group lg:w-1/2 w-full py-2 px-2 cursor-pointer">
                        <div
                          className={`absolute top-0 bottom-0 flex items-center right-5 pointer-events-none`}
                        >
                          <IoIosArrowDown
                            style={{
                              color: brandDetails?.color_boton_formulario,
                            }}
                          />
                        </div>
                        <select
                          className="form-control cursor-pointer"
                          id="province"
                          name="province"
                          value={province}
                          onChange={(e : any) => setProvince(e.target.value)}
                        >
                          <option value="" disabled selected>
                            Provincia de Interés
                          </option>
                          {ubications?.map((ubication) => (
                            <option value={ubication.nombre} key={ubication.id}>
                              {ubication.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                        <div className="form-group lg:w-1/2 w-full py-2 px-2 relative">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <div className="flex items-center px-3 border-r">
                            <img src={flag} alt={`${country} Flag`} className="w-6 h-4 mr-2" />
                            <span className="text-700 font-medium">{phoneCode}</span>
                          </div>
                          <input
                            type="text"
                            className="form-control flex-1 pl-2"
                            name="telefono"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Teléfono celular"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group lg:w-1/2 w-full py-2 px-2">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={(e : any) => setEmail(e.target.value)}
                          id="InputEmail1"
                          placeholder="Correo electrónico"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group py-2 px-2">
                      <textarea
                        className="form-control"
                        name="comentarios"
                        value={message}
                        onChange={(e : any) => setMessage(e.target.value)}
                        required
                        id="exampleFormControlTextarea1"
                        placeholder="Comentarios"
                        rows={3}
                      ></textarea>
                    </div>
                    <input
                      id="nombremarca"
                      name="nombremarca"
                      type="hidden"
                      value={brand}
                      onChange={(e : any) => setBrand(brandDetails?.nombre || "")}
                    />
                    <div className="flex justify-center py-12 mb-10">
                      <button
                        onClick={() => setBrand(brandDetails?.nombre || "")}
                        type="submit"
                        style={{
                          backgroundColor: brandDetails?.color_boton_formulario,
                        }}
                        className="text-white px-10 rounded-lg py-2 text-lg"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="relative flex justify-center items-center py-72">
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-[#fa5e4d] text-9xl animate-spin"
          >
            <CgSpinnerTwoAlt />
          </div>
        </div>
      )}

      <section>
        <Footer />
      </section>
      <ChatBot />
    </main>
  );
};

export default BrandComponent;
