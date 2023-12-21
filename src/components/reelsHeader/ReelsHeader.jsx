import React, { useState } from "react";
import "./ReelsHeader.scss";
function ReelsHeader() {
  const [active, setActive] = useState("you");
  return (
    <div className="reels__header">
      <span
        className={active === "you" && "active"}
        onClick={() => setActive("you")}
      >
        For You
      </span>
      <span
        className={active === "following" && "active"}
        onClick={() => setActive("following")}
      >
        Following
      </span>
    </div>
  );
}

export default ReelsHeader;
