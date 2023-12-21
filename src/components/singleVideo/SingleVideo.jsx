import "./SingleVideo.scss";
import Navbar from "../navbar/Navbar";
import SinglePost from "../singlePost/SinglePost";
import { youtubeCardData } from "/public/fakeData";
import { verified1 } from "../../assets/images/icons";
import { t } from "i18next";
import { useState } from "react";

export default function SingleVideo() {
  const cardData = youtubeCardData;

  const [postIndex, setPostIndex] = useState(0);
  const direction = localStorage.getItem("direction");

  return (
    <div dir={direction}>
      <Navbar />
      <div className="container flex flex-col-reverse lg:grid gap-6 grid-cols-12 pt-28 ">
        <ul className="bg-white rounded-xl p-3 col-span-12 lg:col-span-5 xl:col-span-4">
          {cardData &&
            cardData.map((card) => (
              <li
                className="flex flex-row py-3 justify-center items-center gap-4 xs"
                key={card.post_id}
              >
                <img
                  className="w-1/2 cursor-pointer"
                  src={card.post_data.post_thumbnail}
                  onClick={() => {
                    setPostIndex(card.post_id - 1);
                  }}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h3
                    className="cursor-pointer"
                    onClick={() => {
                      setPostIndex(card.post_id - 1);
                    }}
                  >
                    {card.post_data.post_text}
                  </h3>

                  <p className="flex items-center gap-2">
                    {card.post_user.user_name}{" "}
                    {card.post_user.isVerified && (
                      <span>
                        <img src={verified1} alt="" />
                      </span>
                    )}
                  </p>

                  <p>
                    {t(card.post_data.post_time) +
                      " " +
                      "." +
                      " " +
                      card.post_data.post_views +
                      " " +
                      t("view")}
                  </p>
                </div>
              </li>
            ))}
        </ul>

        <div
          className="col-span-12 lg:col-span-7 xl:col-span-8"
         
        >
          <SinglePost data={youtubeCardData[postIndex]} />
        </div>
      </div>
    </div>
  );
}
