import { createContext, useContext } from "react";

export const CurrentSession = createContext<{
  session: string | null;
  setSession: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export function useCurrentSession() {
  const theSession = useContext(CurrentSession);
  return theSession!;
}
