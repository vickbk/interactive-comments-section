import { default as data } from "@/assets/data.json";
import { getMemoItem } from "@/libs";
import type {
  CommentType,
  FlattenSeedComment,
  SeedComment,
} from "../types/comment";

export async function seedComments() {
  return await new Promise((resolve) => {
    const saved = getMemoItem<CommentType[]>("comments");
    if (saved) return resolve(saved);
    const { comments } = data;
    const flatten = flatComments(comments);
    resolve([]);
  });
}

export function flatComments(comments?: SeedComment[] | null) {
  if (!comments) return [];
  const flatten: FlattenSeedComment[] = [];
  comments.forEach(({ replies, ...comment }) => {
    flatten.push(
      {
        ...comment,
        replies: replies?.map(({ id }) => id) ?? null,
      },
      ...flatComments(replies),
    );
  });
  return flatten;
}
