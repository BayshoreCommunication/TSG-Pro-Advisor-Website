"use client";

import Image from "next/image";

import { memo } from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[480px] lg:min-h-[480]">
      {/* Background Image */}
      <Image
        src="/images/aboutPage/video-bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top"
        priority
      />

      {/* Content Container */}
      <div className="relative max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-16">
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-center text-4xl md:text-5xl lg:text-[52px] font-semibold mb-5 text-black arya-font">
            Turning Expertise into Impact, and Ambition into Results
          </h1>
          <p className="text-center">
            Whether you’re starting a tax business or improving an existing one,
            we provide the training and guidance to help you move forward with
            confidence.
          </p>
        </div>
        {/* Youtube Video framework  */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
          <iframe
            className="w-full h-[300px] md:h-[550px] lg:h-[600px]"
            src="https://www.youtube.com/embed/gEvR2lr3nMM?si=0s4CASnN7tqtL_jv"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default memo(VideoSection);
