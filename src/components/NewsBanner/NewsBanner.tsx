"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1/1980/650",
  "https://picsum.photos/id/2/1980/650",
  "https://picsum.photos/id/3/1980/650",
  "https://picsum.photos/id/4/1980/650",
];
export function NewsBanner() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        if (prev === images.length - 1) {
          scrollTo(0);
          return 0;
        }
        scrollTo(prev + 1);
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function scrollTo(index: number) {
    const container = document.querySelector(".overflow-x-scroll");
    container?.scrollTo({
      left: 0 + index * 1920,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative w-full h-[650px] mx-auto">
      <div
        data-testid="news-banner-container"
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((image, index) => {
          return (
            <Image
              key={image}
              className={`w-full h-[650px] object-cover transition-all ease-in duration-1000 snap-center`}
              src={image}
              alt="News Banner"
              width={1920}
              height={650}
            />
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">News Title</h2>
          <p className="text-white">News Description</p>
        </div>
      </div>
      <div className="absolute flex gap-3 bottom-10 left-1/2 -translate-x-1/2">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={`w-4 h-3 shadow-lg shadow-black  ${
                index === imageIndex ? "bg-primary" : "bg-white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
