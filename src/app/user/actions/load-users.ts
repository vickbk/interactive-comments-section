import { getMemoItem } from "@/libs";
import type { UserType } from "../types/user";
import { seedUsers } from "./seed-users";

export async function loadUsers() {
  return await new Promise<UserType[]>((resolve) => {
    const users = getMemoItem<UserType[]>("users");
    if (!users) return seedUsers().then((uz) => resolve(uz));
    resolve(users);
  });
}

export async function getUserByName(name: string) {
  return await new Promise<UserType | null>((resolve) => {
    loadUsers().then((users) =>
      resolve(users.find((user) => user.name === name) ?? null),
    );
  });
}

export async function getUserById(id: UserType["id"]) {
  return (await loadUsers()).find((user) => user.id === id) ?? null;
}
