import { t } from "i18next";
import { InteractionBar, PostHeader } from "../ui";
import PostTime from "../postTime/PostTime";
import "./PreviewSinglePost.scss";

import { data, user } from "/public/fakeData";

export default function PreviewSinglePost(
  {
    // data, user
  }
) {
  return (
    <div className="singlePost" key={data.post_id}>
      <PostHeader user={user} />

      <div className="singlePost__body">
        {data[14].post_data.post_text && (
          <p className="singlePost__body--text">
            {t(data[14].post_data.post_text)}
          </p>
        )}

        {data[14].post_data?.post_images.length > 0 &&
          data[14].post_data?.post_images.map((image, index) => (
            <img className="my-3 rounded-2xl" key={index} src={image} alt="" />
          ))}

        <PostTime />
        <InteractionBar />
      </div>
    </div>
  );
}
