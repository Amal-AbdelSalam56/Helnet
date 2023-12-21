import { Link } from "react-router-dom";

import { t } from "i18next";
import { useState } from "react";
import CreateComment from "../createComment/CreateComment";

export default function SingleComment({ data }) {
  const [isWriting, setIsWriting] = useState();

  return (
    <div className={data.isReplay ? "ms-20" : ""}>
      <div className="flex gap-2 mt-6">
        <Link to={"path" + data.user.id}>
          <img className="rounded-full" src={data.user.image} alt="PFP" />
        </Link>
        <div>
          <Link className="flex" to={"path" + data.user.id}>
            <p className="text-lg">{data.user.name}</p>
            <img className="w-4 h-4 m-2" src={data.user.type} alt="" />
          </Link>
          <p>{data.text}</p>
          <div className="flex gap-1 text-stone-400 py-2">
            <button className="h-fit">{t("Like") + " ."}</button>
            <button className="h-fit" onClick={() => setIsWriting(!isWriting)}>
              {t("Comment") + " ."}
            </button>
            <p>{data.time + " ."}</p>
            <p className="text-violet-700">{data.likes + " " + t("Likes")}</p>
          </div>
        </div>
      </div>

      {isWriting && <CreateComment />}
    </div>
  );
}
