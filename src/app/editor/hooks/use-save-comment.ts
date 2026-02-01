import type { CommentType } from "@/app/comment";
import { useCurrentSession } from "@/app/user";
import { useActionState, useEffect } from "react";
import { replyAction, saveAction, updateAction } from "../actions/save-actions";
import type { EditorType } from "../types/editor";

export function useSaveComment({
  type,
  comment,
}: {
  type: EditorType;
  comment?: CommentType;
}) {
  const action = {
    comment: saveAction,
    reply: replyAction,
    update: updateAction,
  }[type];

  const { updatePageSession } = useCurrentSession();
  const [message, actionOptions, status] = useActionState(
    async (_: unknown, data: FormData) => {
      try {
        await action({
          comment: Object.fromEntries(data).comment as string,
          reference: comment?.id,
        });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    null,
  );

  useEffect(() => {
    if (!status && message) updatePageSession();
  }, [message, updatePageSession, status]);

  return [actionOptions, status] as const;
}
