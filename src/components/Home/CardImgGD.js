import React, { useRef, useEffect } from "react";

const CardImgGD = () => {
  const videoRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="flex justify-center items-start pt-6 pr-6">
      <div className="w-9/12 relative">
        <video
          ref={videoRef}
          src="/video/hero.webm"
          alt="Typeform"
          className="w-full h-auto pl-12"
          autoPlay
          loop
        />
      </div>
      <div className="w-1/2 mr-40 pr-36 mt-20">
        <h1 className="text-7xl font-weight-900 mt-0 mb-2">
          Make forms worth filling out
        </h1>
        <p className="mt-12 mb-4 text-3l text-gray-700">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </p>
        <button className="mt-auto bg-black text-white px-6 py-3 rounded">
          Get started—it's free
        </button>
      </div>
    </div>
  );
};

export default CardImgGD;
