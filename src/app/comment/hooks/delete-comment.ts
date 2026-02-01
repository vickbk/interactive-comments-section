import { useCurrentSession } from "@/app/user";
import { startTransition, useActionState, useCallback, useEffect } from "react";
import { deleteComment } from "../actions/save-comments";
import type { CommentType } from "../types/comment";

export default function useDeleteComment({ id }: CommentType) {
  const [responce, action, status] = useActionState(
    async (_: unknown, id: CommentType["id"]) => {
      try {
        await deleteComment(id);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    null,
  );

  const deleteAction = useCallback(() => {
    startTransition(() => action(id));
  }, [action, id]);

  const { updatePageSession } = useCurrentSession();

  useEffect(() => {
    if (!status && responce) updatePageSession();
  }, [responce, status, updatePageSession]);
  return deleteAction;
}
