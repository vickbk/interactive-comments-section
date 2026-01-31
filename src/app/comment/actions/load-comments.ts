import { getMemoItem } from "@/libs";
import type { CommentType } from "../types/comment";

export async function loadComments() {
  return await new Promise((resolve) => {
    const comments = getMemoItem<CommentType[]>("comments");
    resolve(comments);
  });
}
