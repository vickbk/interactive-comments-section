import { getMemoItem, getRandomElement, setMemoItem } from "@/libs";
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

export async function getCurrentSession() {
  const session = getMemoItem<UserType["id"]>("session");
  if (session) return session;
  const users = await loadUsers();
  setSession(getRandomElement(users).id);
  return getMemoItem<UserType["id"]>("session");
}

export async function setSession(id: UserType["id"]) {
  setMemoItem("session", id);
  return null;
}
