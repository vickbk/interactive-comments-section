import { useEffect, useState } from "react";
import { getUserById } from "../actions/load-users";
import type { UserType } from "../types/user";

export function useUser(id: UserType["id"]) {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    (async () => {
      setUser(await getUserById(id));
    })();
  }, [id]);
  return user;
}
