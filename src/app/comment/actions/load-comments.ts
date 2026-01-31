import { getMemoItem } from "@/libs";
import type { CommentType } from "../types/comment";
import { seedComments } from "./seed-comments";

export async function loadComments() {
  const comments =
    getMemoItem<CommentType[]>("comments") || (await seedComments());
  return comments;
}
