import { loadCommentById, loadComments, type CommentType } from "@/app/comment";
import { getCurrentSession } from "@/app/user";
import { setMemoItem } from "@/libs";

export async function getVotes(id: CommentType["id"]) {
  const comment = await loadCommentById(id);
  if (!comment) return null;
  return { downVotes: comment.downVotes, upVotes: comment.upVotes };
}

export async function calculateVotes(id: CommentType["id"]) {
  const votes = await getVotes(id);
  if (!votes) return 0;
  const { upVotes, downVotes } = votes;
  return (upVotes?.length ?? 0) - (downVotes?.length ?? 0);
}

export async function vote({
  id,
  up = true,
}: {
  id: CommentType["id"];
  up?: boolean;
}) {
  const session = await getCurrentSession();
  setMemoItem(
    "comments",
    (await loadComments()).map((comment) => {
      let { upVotes = [], downVotes = [] } = comment;
      if (comment.id === id) {
        if (up && !upVotes.includes(session)) {
          if (downVotes.includes(session))
            downVotes = downVotes.filter((s) => s !== session);
          upVotes.push(session);
        } else if (!up && !downVotes.includes(session)) {
          if (upVotes.includes(session))
            upVotes = upVotes.filter((s) => s !== session);
          downVotes.push(session);
        }
      }
      return comment.id === id ? { ...comment, upVotes, downVotes } : comment;
    }),
  );
}
