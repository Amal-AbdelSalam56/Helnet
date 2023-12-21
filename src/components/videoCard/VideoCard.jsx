import React from "react";
import "./VideoCard.scss";
import { useNavigate } from "react-router-dom";
function VideoCard({ videos }) {
  const navigate = useNavigate();
  return (
    <>
      {videos.map((p, index) => (
        <div
          className="videos__page__card cursor-pointer"
          key={index}
          onClick={() => navigate("/singleVideo")}
        >
          <img src={p.src} preload="true" className="mb-2 w-100" />
          {/* {p.plus && <span className="card__store__plus">{p.plus}</span>} */}
          <div className="card__store__content">
            <div className="videos__page__card__rate">
              {/* <ul>
            {Array(p.star)
              .fill(null)
              .map((s) => (
                <li>
                  <img src={Star} />
                </li>
              ))}
          </ul> */}
              <img src={p.img} preload="true" className="mb-2" />

              <span>({p.title})</span>
            </div>
            {/* <div className="card__store__dec">{p.desc}</div> */}
            <div className="d-flex justify-content-between">
              <div className="card__store__time">{p.time}</div>
              <div className="card__store__watch">{p.watch}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoCard;
