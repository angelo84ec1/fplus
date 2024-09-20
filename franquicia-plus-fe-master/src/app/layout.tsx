import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franquicias en Ecuador | F+ |  Consultoría y Comercialización",
  description:
    "Las mejores marcas de Franquicias en Ecuador las encuentras en Franquicia Plus, somos consultores creamos y comercializamos negocios rentables exitosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gTagInit = `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11455491215');
`;
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        {/* Google+ metadata */}
        <meta
          itemProp="name"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta
          itemProp="description"
          content="Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más."
        />
        <meta itemProp="image" content="/FranquiciaPlusgoogle.png" />
        {/* Facebook Open Graph metadata */}
        <meta
          property="og:title"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más."
        />
        <meta
          property="og:image"
          content="https://www.franquiciaplus.com/FranquiciaPlusgoogle.png"
        />
        <meta property="og:url" content="https://www.franquiciaplus.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://franquiciaplus.com/" />
        <meta
          name="twitter:title"
          content="Franquicias en Ecuador y Negocios rentables de Oportunidad"
        />
        <meta
          name="twitter:description"
          content="Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más."
        />
        <meta
          name="twitter:image"
          content="https://www.franquiciaplus.com/FranquiciaPlusgoogle.png"
        />
        <meta name="twitter:site" content="@franquiciaplus" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11455491215" />
        <Script id="gTagInit" dangerouslySetInnerHTML={{ __html: gTagInit }} />
        <Script
          id="escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"
          type="application/json"
          data-version="0.1.0"
          dangerouslySetInnerHTML={{
            __html: `
      window["escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"]={e:"page",f:"6643f731-2129-4d3c-a573-18a15b75a2a9",l:"es",r:"ran007980220840383234dom"};function escInitFormImpl(e : any){!function(){var a=window.addEventListener?"addEventListener":"attachEvent";(0,window[a])("attachEvent"===a?"onmessage":"message",function(e : any){if("escalaForm"===e.data.origin)if("init"===e.data.eventName&&e.data.height){const a=document.querySelector('[escala-element-form="escala-form-'+e.data.instance+'"]');a&&(a.height=e.data.height)}else"escala_lead"===e.data.eventName&&("function"==typeof fbq&&(e.data.leadData&&e.data.leadData.contact_email?fbq("track","Lead",{email:e.data.leadData.contact_email},{eventID:e.data.leadData.deduplicationId}):fbq("track","Lead",{},{eventID:e.data.leadData.deduplicationId})),"function"==typeof gtag&&(e.data.leadData&&e.data.leadData.contact_email?gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead",email:e.data.leadData.contact_email}):gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead"})),"undefined"!=typeof dataLayer&&dataLayer.push&&"function"==typeof dataLayer.push&&(e.data.leadData&&e.data.leadData.contact_email?dataLayer.push({event:"escala_lead",email:e.data.leadData.contact_email}):dataLayer.push({event:"escala_lead"})))});var t="escala-iframe-{f}-{l}-{r}".replace("{f}",e.f).replace("{l}",e.l).replace("{r}",e.r),n=document.getElementById(t);n&&n.remove(),n=document.createElement("iframe");var o=btoa(JSON.stringify({loc:location.href,title:encodeURIComponent(document.title),ref:document.referrer})),d=(e.f+"-"+e.r+"-"+Math.random()).replace(".","-"),l="form="+e.f+"&lang="+e.l+"&instance="+d+"&host="+o+"&v="+Math.random();n.setAttribute("src","https://escalapages.com/plugins/forms/embed.html?"+l);for(var r=["marginwidth","marginheight","frameborder","vspace","hspace"],c=0;c<r.length;c++)n.setAttribute(r[c],"0");n.setAttribute("scrolling","no"),n.width="100%",n.setAttribute("escala-element-form","escala-form-"+d),n.setAttribute("id",t);var i=document.getElementById("escala-form-"+e.f+"-"+e.r),m=document.getElementsByTagName("body")[0];m.contains(i)?i.parentElement.appendChild(n):m.appendChild(n)}()}function escInitForm(){var e=window["escala-form-6643f731-2129-4d3c-a573-18a15b75a2a9-ran007980220840383234dom"];"elementor-popup"===e.e?jQuery(document).ready(function(){jQuery(document).on("elementor/popup/show",()=>{escInitFormImpl(e : any)})}):escInitFormImpl(e : any)}window.addEventListener?window.addEventListener("load",escInitForm,!1):window.attachEvent?window.attachEvent("onload",escInitForm):window.onload=escInitForm;
    `,
          }}
        />

        <Script
          id="escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"
          type="application/json"
          data-version="0.1.0"
          dangerouslySetInnerHTML={{
            __html: `
      window["escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"]={e:"page",f:"9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e",l:"es",r:"ran05067051907150277dom"};function escInitFormImpl(e : any){!function(){var a=window.addEventListener?"addEventListener":"attachEvent";(0,window[a])("attachEvent"===a?"onmessage":"message",function(e : any){if("escalaForm"===e.data.origin)if("init"===e.data.eventName&&e.data.height){const a=document.querySelector('[escala-element-form="escala-form-'+e.data.instance+'"]');a&&(a.height=e.data.height)}else"escala_lead"===e.data.eventName&&("function"==typeof fbq&&(e.data.leadData&&e.data.leadData.contact_email?fbq("track","Lead",{email:e.data.leadData.contact_email},{eventID:e.data.leadData.deduplicationId}):fbq("track","Lead",{},{eventID:e.data.leadData.deduplicationId})),"function"==typeof gtag&&(e.data.leadData&&e.data.leadData.contact_email?gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead",email:e.data.leadData.contact_email}):gtag("event","generate_lead",{event_category:"engagement",event_label:"escala_lead"})),"undefined"!=typeof dataLayer&&dataLayer.push&&"function"==typeof dataLayer.push&&(e.data.leadData&&e.data.leadData.contact_email?dataLayer.push({event:"escala_lead",email:e.data.leadData.contact_email}):dataLayer.push({event:"escala_lead"})))});var t="escala-iframe-{f}-{l}-{r}".replace("{f}",e.f).replace("{l}",e.l).replace("{r}",e.r),n=document.getElementById(t);n&&n.remove(),n=document.createElement("iframe");var o=btoa(JSON.stringify({loc:location.href,title:encodeURIComponent(document.title),ref:document.referrer})),d=(e.f+"-"+e.r+"-"+Math.random()).replace(".","-"),l="form="+e.f+"&lang="+e.l+"&instance="+d+"&host="+o+"&v="+Math.random();n.setAttribute("src","https://escalapages.com/plugins/forms/embed.html?"+l);for(var r=["marginwidth","marginheight","frameborder","vspace","hspace"],c=0;c<r.length;c++)n.setAttribute(r[c],"0");n.setAttribute("scrolling","no"),n.width="100%",n.setAttribute("escala-element-form","escala-form-"+d),n.setAttribute("id",t);var i=document.getElementById("escala-form-"+e.f+"-"+e.r),m=document.getElementsByTagName("body")[0];m.contains(i)?i.parentElement.appendChild(n):m.appendChild(n)}()}function escInitForm(){var e=window["escala-form-9ab1c2d4-dfca-4d15-96b8-64c6e971bd4e-ran05067051907150277dom"];"elementor-popup"===e.e?jQuery(document).ready(function(){jQuery(document).on("elementor/popup/show",()=>{escInitFormImpl(e : any)})}):escInitFormImpl(e : any)}window.addEventListener?window.addEventListener("load",escInitForm,!1):window.attachEvent?window.attachEvent("onload",escInitForm):window.onload=escInitForm;
    `,
          }}
        />

        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
            "GTM-MJ5P2XQ8"
          )}`}
          strategy="afterInteractive"
          async
        />
        <Script
          strategy="afterInteractive"
          src="https://api.clientify.net/web-marketing/webforms/external/script/131910.js"
          async
          defer
        />
        <Script
          strategy="afterInteractive"
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "OnlineBusiness",
              address:
                "De los Establos y Av. de los Conquistadores, edificio Cemacol Cumbayá - Quito - Ecuador",
              description:
                "Franquicias en Ecuador, encuentra negocios rentables en farmacias, franquicias de disensa, servientrega, kfc, starbucks, bogati, sweet and coffee y más.",
              email: "info@franquiciaplus.com",
              image: "https://www.franquiciaplus.com/FranquiciaPlusgoogle.png",
              name: "Franquicias en Ecuador y Necogios rentables de Oportunidad",
              telephone: "+593(4)371-3181",
              url: "https://www.franquiciaplus.com/",
              sameAs: [
                "https://www.facebook.com/franquiciaplus/",
                "https://www.instagram.com/franquicia_plus/",
                "https://www.linkedin.com/company/franquicia-plus/",
              ],
            }),
          }}
        />
      </head>
      <body
        style={{ fontFamily: "Mukata Mahee Medium" }}
        className={inter.className}
      >
        {children}
      </body>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        theme="colored"
      />
    </html>
  );
}