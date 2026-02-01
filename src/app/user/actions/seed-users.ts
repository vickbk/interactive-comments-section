import { flatComments } from "@/app/comment";
import { default as data } from "@/assets/data.json";
import { getMemoItem, setMemoItem } from "@/libs";
import type { UserType } from "../types/user";

export async function seedUsers() {
  return await new Promise<UserType[]>((resolve) => {
    const saved = getMemoItem<UserType[]>("users");
    if (saved) return resolve(saved);
    const { comments } = data;
    const users = flatComments(comments).map(
      ({ user = { username: "", image: { png: "", webp: "" } } }) => {
        const {
          username: name,
          image: { png: image },
        } = user;
        return { id: crypto.randomUUID(), name, image };
      },
    );
    setMemoItem("users", users);
    resolve(getMemoItem<UserType[]>("users"));
  });
}
