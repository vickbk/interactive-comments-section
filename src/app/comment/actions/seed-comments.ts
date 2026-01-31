import { getUserByName } from "@/app/user/actions/load-users";
import { default as data } from "@/assets/data.json";
import { getMemoItem, getRandomInt, setMemoItem } from "@/libs";
import type {
  CommentType,
  FlattenSeedComment,
  SeedComment,
} from "../types/comment";

const TIME_DIFF = 30 * 24 * 60 * 60 * 1000;

export async function seedComments() {
  const saved = getMemoItem<CommentType[]>("comments");
  if (saved) return saved;
  const { comments } = data;
  const flatten: CommentType[] = await Promise.all(
    flatComments(comments).map(async ({ user, id, content: text, replies }) => {
      const current = new Date().getTime();
      return {
        id,
        text,
        replies,
        createdAt: getRandomInt(current - TIME_DIFF, current),
        uId: (await getUserByName(user!.username))!.id,
      };
    }),
  );
  setMemoItem("comments", flatten);
  return getMemoItem<CommentType[]>("comments");
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
