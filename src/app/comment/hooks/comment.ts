import { useEffect, useState } from "react";
import { loadCommentsOnly, loadReplies } from "../actions/load-comments";
import type { CommentType } from "../types/comment";

export function useComment(replies?: CommentType["replies"]) {
  const [comments, setComments] = useState<CommentType[] | null>(null);

  useEffect(() => {
    (async function () {
      if (!replies) return setComments(await loadCommentsOnly());
      setComments(await loadReplies(replies));
    })();
  }, [replies]);

  return { comments };
}
