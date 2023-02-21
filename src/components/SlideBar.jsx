import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import first from "../assets/image/first.webp";
import second from "../assets/image/second.webp";
import third from "../assets/image/third.webp";
import fourth from "../assets/image/fourth.webp";
import fifth from "../assets/image/fifth.webp";
import sixth from "../assets/image/sixth.webp";
import seventh from "../assets/image/seventh.webp";
import eighth from "../assets/image/eighth.webp";
const images = [
  { url: first },
  { url: second },
  { url: third },
  { url: fourth },
  { url: fifth },
  { url: sixth },
  { url: seventh },
  { url: eighth },
];

export const SlideBar = () => {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};
