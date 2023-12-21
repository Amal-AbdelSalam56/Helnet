import SinglePost from "../singlePost/SinglePost";

export default function Posts({ data }) {
  return (
    <div className="grid gap-3 w-100 d-flex align-items-center flex-column">
      {data
        ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
        : ""}
    </div>
  );
}
