import { useCallback, useEffect, useState } from "react";
import { getCurrentSession, setSession } from "../actions/manage-users";
import type { UserType } from "../types/user";

export function useSession() {
  const [session, setThisSession] = useState<UserType["id"] | null>(null);
  const [pageSession, setPageSession] = useState("");

  const updateSession = useCallback((id: UserType["id"]) => {
    setThisSession(id);
    setSession(id);
  }, []);

  const updatePageSession = useCallback(() => {
    setPageSession(crypto.randomUUID());
  }, []);

  useEffect(() => {
    (async () => {
      setThisSession(await getCurrentSession());
    })();
  }, []);
  return { session, setSession: updateSession, pageSession, updatePageSession };
}
