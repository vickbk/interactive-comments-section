import { getCurrentSession } from "@/app/user";
import { setMemoItem } from "@/libs";
import type { CommentType } from "../types/comment";
import { loadComments } from "./load-comments";

export async function saveComment(comment: string) {
  if (!comment) return;
  const comments = await loadComments();
  comments.push({
    id: crypto.randomUUID(),
    uId: await getCurrentSession(),
    text: comment,
    createdAt: new Date().getTime(),
    isReply: false,
  });
  setMemoItem("comments", comments);
  return null;
}

export async function saveReply({
  reference,
  comment,
}: {
  reference: CommentType["id"];
  comment: string;
}) {
  const id = crypto.randomUUID();
  const comments = (await loadComments()).map((comment) =>
    comment.id === reference
      ? { ...comment, replies: [...(comment?.replies ?? []), id] }
      : comment,
  );
  comments.push({
    id,
    uId: await getCurrentSession(),
    text: comment,
    createdAt: new Date().getTime(),
    isReply: true,
  });
  setMemoItem("comments", comments);
  return null;
}

export async function saveCommentUpdate({
  comment: text,
  reference,
}: {
  comment: string;
  reference: CommentType["id"];
}) {
  setMemoItem(
    "comments",
    (await loadComments()).map((comment) =>
      comment.id === reference ? { ...comment, text } : comment,
    ),
  );
  return null;
}

export async function deleteComment(id: CommentType["id"]) {
  setMemoItem(
    "comments",
    (await loadComments()).filter((comment) => comment.id !== id),
  );
}
