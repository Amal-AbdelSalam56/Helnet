import SingleComment from "../ui/singleComment/SingleComment";
import { PFP, verified } from "../../assets/images";
import { CreateComment } from "../ui";

export default function CommentSection() {
  const comments = [
    // {
    //   user: {
    //     id: 1,
    //     name: "username",
    //     image: PFP,
    //     type: verified,
    //   },
    //   likes: 0,
    //   time: "time",
    //   text: "text",
    //   isReplay: false,
    //   id: 1,
    // },
    // {
    //   user: {
    //     id: 1,
    //     name: "username",
    //     image: PFP,
    //     type: verified,
    //   },
    //   likes: 0,
    //   time: "time",
    //   text: "text",
    //   isReplay: true,
    //   id: 2,
    // },
  ];

  return (
    <>
      <CreateComment />

      {comments &&
        comments.map((comment) => (
          <SingleComment key={comment.id} data={comment} />
        ))}
    </>
  );
}
