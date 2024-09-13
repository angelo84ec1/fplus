"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const ErrorPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set timeout to 3 seconds (3000 milliseconds)

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, []);

  if (loading) {
    // Render a loading or placeholder component before timeout expires
    return (
      <>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="bg-[#0d132f] h-20 z-[1] relative" />
        <div className="h-full min-h-[60vh] w-full flex justify-center items-center">
          <div
            style={{ fontFamily: "Mukata Mahee Bold" }}
            className="text-[#fa5e4d] text-9xl animate-spin"
          >
            <CgSpinnerTwoAlt />
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
    );
  }

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <div className="bg-[#0d132f] h-20 z-[1] relative" />
        <div className="h-full min-h-[60vh] w-full flex justify-center items-center">
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

export default ErrorPage;