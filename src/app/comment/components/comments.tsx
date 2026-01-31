import { useComment } from "../hooks/comment";
import { Comment } from "./comment";
import { CommentPlaceHolder } from "./comment-placeholder";

export const Comments = () => {
  const { comments } = useComment();
  return (
    <div className="grid gap-4 mb-8">
      {!comments
        ? [null, null, null].map((_, key) => <CommentPlaceHolder key={key} />)
        : comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
    </div>
  );
};
