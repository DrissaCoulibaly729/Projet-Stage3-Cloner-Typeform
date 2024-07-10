import React, { useRef, useEffect } from "react";

const CardImgGD = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const resizeVideo = () => {
      if (videoRef.current) {
        videoRef.current.addEventListener("loadedmetadata", () => {
          const videoHeight = videoRef.current.videoHeight;
          const videoWidth = videoRef.current.videoWidth;
          const videoAspectRatio = videoWidth / videoHeight;

          const containerWidth = videoRef.current.parentElement.offsetWidth;
          const containerHeight = containerWidth / videoAspectRatio;

          videoRef.current.style.height = `${containerHeight}px`;
        });
      }
    };

    resizeVideo();
    window.addEventListener("resize", resizeVideo);

    return () => {
      window.removeEventListener("resize", resizeVideo);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="container mx-auto border-none flex flex-col md:flex-row justify-center items-start pt-6 pr-6">
      <div className="w-full md:w-1/2 relative">
        <video
          ref={videoRef}
          src="/video/hero.webm"
          alt="Typeform"
          className="w-full h-auto border-none"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="w-full md:w-1/2 mr-4 md:mr-40 pr-6 md:pr-36 mt-8 md:mt-20">
        <h1 className="text-5xl md:text-7xl font-weight-100 mt-0 mb-4">
          Make forms worth filling out
        </h1>
        <p className="mt-4 mb-6 text-l md:text-xl text-gray-700">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">
          Get started—it's free
        </button>
      </div>
    </div>
  );
};

export default CardImgGD;
