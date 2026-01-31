import { useEffect, useState } from "react";
import { loadCommentsOnly } from "../actions/load-comments";
import type { CommentType } from "../types/comment";

export function useComment() {
  const [comments, setComments] = useState<CommentType[] | null>(null);
  useEffect(() => {
    (async function () {
      const allComments = await loadCommentsOnly();
      setComments(allComments);
    })();
  }, []);
  return { comments };
}
