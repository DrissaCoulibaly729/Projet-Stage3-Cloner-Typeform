import React, { useRef, useEffect }  from "react";
const CardImgDG = () => {
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
    <div className="container mx-auto pt-6 pr-6">
      <p className="text-center text-4xl md:text-6xl font-weight-100 py-10 px-4 md:p-10 md:m-10">
        Refreshingly different, by design
      </p>

      {/* Première section en haut */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-x-6 md:pt-6 md:pr-6">
          <div className="w-full md:w-1/2 px-6 md:pl-48 md:mt-20">
            <h1 className="text-3xl md:text-5xl font-weight-100 mt-0 mb-2">
              Looks striking. Feels effortless.
            </h1>
            <p className="mt-2 mb-4 text-base md:text-lg text-gray-700">
              Impress your form takers. Catch their eye with striking visuals,
              and make form-filling feel effortless by replacing walls of
              questions with just one at a time.
            </p>
            <a href="signup" className="bg-black text-white px-4 py-2 rounded">
              Sign Up
            </a>
          </div>
          <div className="w-full md:w-1/2 md:pr-48">
            <video
            ref={videoRef}
              src="/video/for-them.webm"
              alt="for-them"
              className="w-full h-auto rounded shadow"
              autoPlay
              loop
            />
          </div>
        </div>
      </div>

      {/* Deuxième section en bas */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-x-6 pt-6 md:pr-6">
        <div className="w-full md:w-1/2 md:pl-48">
          <video
           ref={videoRef}
            src="/video/for-you.webm"
            alt="for-you"
            className="w-full h-auto rounded shadow"
            autoPlay
            loop
          />
        </div>
        <div className="w-full md:w-1/2 px-6 md:pr-48 md:mt-20">
          <h1 className="text-3xl md:text-5xl font-weight-100 mt-0 mb-2">
            Embeds smoothly. Reveals more.
          </h1>
          <p className="mt-2 mb-4 text-base md:text-lg text-gray-700">
            Collect more and better data. Embed forms where people see them,
            from web to email. Ask the right follow-up question at the right
            time to reveal deeper insights.
          </p>
          <a href="signup" className="bg-black text-white px-4 py-2 rounded">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardImgDG;
