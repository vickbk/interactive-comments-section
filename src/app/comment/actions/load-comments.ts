import { getMemoItem } from "@/libs";
import type { CommentType } from "../types/comment";
import { seedComments } from "./seed-comments";

export async function loadComments() {
  const comments =
    getMemoItem<CommentType[]>("comments") || (await seedComments());
  return comments;
}

export async function loadCommentsOnly() {
  return (await loadComments()).filter(({ isReply }) => !isReply);
}

export async function loadReplies(ids: CommentType["replies"]) {
  if (!ids) return null;
  return (await loadComments()).filter(({ id }) => ids.includes(id));
}

export async function loadCommentById(id: CommentType["id"]) {
  return (await loadComments()).find((comment) => comment.id === id);
}
