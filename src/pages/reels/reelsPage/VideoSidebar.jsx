import React, { useState } from "react";
import "./VideoSidebar.scss";
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import MessageIcon from '@material-ui/icons/Message'
// import ShareIcon from '@material-ui/icons/Share'
import Heart from "../../../assets/images/Heart.png";
import Union from "../../../assets/images/Union.png";
import Ellipse from "../../../assets/images/Ellipse.png";
import Plus from "../../../assets/images/Plus.png";
import Subtract from "../../../assets/images/Subtract.png";

const VideoSidebar = ({ likes, shares, messages, liked, setLiked }) => {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button position-relative">
        <img src={Ellipse} alt="" className="picture" />
        <img src={Plus} alt="" className="plus" />
      </div>
      <div className="videoSidebar_button">
        {liked ? (
          <img
            src={Heart}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
          />
        ) : (
          <img
            src={Heart}
            alt=""
            onClick={() => {
              setLiked(!liked);
            }}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button ">
        <img src={Subtract} alt="" className="comment" />
        {/* <MessageIcon fontSize="large" /> */}
        <p>20</p>
      </div>
      <div className="videoSidebar_button">
        <img src={Union} alt="" className="share" />
        <p>{30}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
