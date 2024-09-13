"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
      <div className="bg-[#0d132f] h-20 z-[1] relative" />
        <div className="h-full min-h-[80vh] w-full flex justify-center items-center">
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-[#fa5e4d] text-9xl"
          >
            Error 404
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default NotFound;
