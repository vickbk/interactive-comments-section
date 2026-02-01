import type { CommentType } from "@/app/comment";
import { useActionState } from "react";
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

  return useActionState(async (_: unknown, data: FormData) => {
    try {
      return await action({
        comment: Object.fromEntries(data).comment as string,
        reference: comment?.id,
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  }, null);
}
