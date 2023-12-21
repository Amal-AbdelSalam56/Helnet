import { useState } from "react";
import { Arrow } from "../../../assets/images/icons";

export default function ImageSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="md:order-2 px-10 grid justify-center gap-3">
      <div>
        <img className="h-80" src={images[currentImage]} alt="" />
      </div>

      <div className="relative h-24 flex justify-center w-full">
        <ul className="absolute flex gap-1 top-0 -left-3 overflow-x-scroll w-full no-scrollbar ">
          {images.map((image, index) => (
            <li key={index}>
              <button
                className="h-20 w-20"
                onClick={() => setCurrentImage(index)}
              >
                <img className="h-full w-full" src={image} alt="" />
              </button>
            </li>
          ))}
        </ul>
        <button
          className="flex justify-center items-center absolute left-0 top-5 bg-violet-500 opacity-70 rounded-full h-10 w-10"
          onClick={() =>
            setCurrentImage(
              currentImage < images.length - 1 ? currentImage + 1 : 0
            )
          }
        >
          <img src={Arrow} alt="" />
        </button>
        <button
          className="flex justify-center items-center absolute right-0 top-5 bg-violet-500 opacity-70 rounded-full h-10 w-10"
          onClick={() =>
            setCurrentImage(
              currentImage === 0 ? images.length - 1 : currentImage - 1
            )
          }
        >
          <img className="rotate-180" src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
