import { saveComment, saveCommentUpdate, saveReply } from "@/app/comment";
import type { ActionParams } from "../types/editor";

export async function saveAction({ comment }: ActionParams) {
  await saveComment(comment);
}

export async function updateAction({ comment, reference }: ActionParams) {
  await saveCommentUpdate({ comment, reference: reference! });
}

export async function replyAction({ comment, reference }: ActionParams) {
  await saveReply({ comment, reference: reference! });
}
