import { useComment } from "../hooks/comment";
import type { CommentType } from "../types/comment";
import { Comment } from "./comment";
import { CommentPlaceHolder } from "./comment-placeholder";

export const Comments = ({ replies }: { replies?: CommentType["replies"] }) => {
  const { comments } = useComment(replies);
  return (
    <div className="grid gap-4">
      {!comments
        ? [null, null, null].map((_, key) => <CommentPlaceHolder key={key} />)
        : comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
    </div>
  );
};
