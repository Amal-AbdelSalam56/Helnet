import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import "./boxReelComponents.scss";
import Shape from "../../assets/images/Shape.png";
import { useNavigate } from "react-router-dom";

function BoxReelComponents({ video, index }) {
  const navigate = useNavigate();
  console.log(video);
  return (
    <>
      <div className="box__reel__components">
        <div
          style={{ marginBottom: "5px" }}
          key={index}
          role="button"
          onClick={() => {
            navigate("/reels-page");
            handleVideoClick(video);
            openModal2();
          }}
        >
          <div
            className="singlePost__body--video"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <a href="#">
              {/* الشكل بيتكرر ف نفس المكان !!! */}
              <img
                preload="true"
                className="profile-pic3"
                style={{ top: "11px", right: "-60%" }}
                src={Shape}
                alt=""
              />
            </a>
            <video className="" preload="true" src={video?.src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxReelComponents;
