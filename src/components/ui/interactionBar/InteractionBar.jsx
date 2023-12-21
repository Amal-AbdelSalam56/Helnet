import { useState } from "react";
import { like, comment, share } from "../../../assets/images/icons";
import ShareModel from "../../shareModel/ShareModel";
import CreateComment from "../createComment/CreateComment";
import CommentSection from "../../commentSection/CommentSection";

export default function InteractionBar() {
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);

  function closeShareModal() {
    setIsShareModelOpen(false);
  }

  function openShareModal() {
    setIsShareModelOpen(true);
  }

  const likes = "99+";
  const comments = "8";

  return (
    <>
      <div className="flex gap-4 mt-8 ps-6">
        <button
          className="relative"
          children={
            <>
              <img src={like} role="button" alt="" />
              <span
                className="absolute top-0 text-xs left-0 translate-x-2 rounded-full bg-violet-700 px-2 text-white"
                children={likes}
              />
            </>
          }
          onClick={() => {}}
        />
        <button
          className="relative"
          children={
            <>
              <span
                className="absolute top-0 text-xs left-0 translate-x-2 rounded-full bg-violet-700 px-2 text-white"
                children={comments}
              />
              <img src={comment} role="button" alt="" />
            </>
          }
          onClick={() => {}}
        />
        <button
          children={<img src={share} role="button" alt="" />}
          onClick={openShareModal}
        />
      </div>

      <CommentSection />

      <ShareModel
        isShareOpen={isShareModelOpen}
        closeShareModal={closeShareModal}
      />
    </>
  );
}
