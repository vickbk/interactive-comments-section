import { loadUsers, type UserType } from "@/app/user";
import { useEffect, useState } from "react";

export function useAccountSwitch() {
  const [accounts, setAccounts] = useState<UserType[]>();
  useEffect(() => {
    (async () => {
      setAccounts(await loadUsers());
    })();
  }, []);
  return { accounts };
}
