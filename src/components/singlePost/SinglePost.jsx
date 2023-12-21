import {
  AudioPlayer,
  Gallery,
  InteractionBar,
  PostHeader,
  VideoPlayer,
} from "../ui";
import PostTime from "../postTime/PostTime";
import { user } from "/public/fakeData";
import Category from "../category/Category";
import { t } from "i18next";
import "./singlePost.scss";

export default function SinglePost({ data }) {
  return (
    <div className="singlePost" key={data.post_id}>
      <PostHeader user={user} />

      <div className="singlePost__body">
        {/* handel the text post  */}
        {data?.post_data?.post_text && (
          <p className="singlePost__body--text">
            {t(data.post_data?.post_text)}
          </p>
        )}

        {/* handel the images post  */}
        {data.post_data?.post_images.length > 0 && (
          <Gallery data={data.post_data?.post_images} target={data.post_id} />
        )}

        {/* handel the audio post  */}
        {data?.post_data?.post_audio?.length > 0 && (
          <AudioPlayer data={data.post_data?.post_audio} />
        )}

        {/* handel the video post  */}
        {data.post_data?.post_video && (
          <VideoPlayer data={data.post_data.post_video} user={user} />
        )}

        {/* handel the link post  */}
        {data?.post_data?.post_link && <p>{data.post_data?.post_link}</p>}

        {/* handel the store post  */}
        {data?.category && <Category data={data} />}

        <PostTime />

        <InteractionBar />
      </div>
    </div>
  );
}
