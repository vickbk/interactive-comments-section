import { CurrentSession, useSession } from "@/app/user";
import { HeadingCtx } from "./HeadingCtx";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = useSession();
  return (
    <HeadingCtx value={0}>
      <CurrentSession value={session}>{children}</CurrentSession>
    </HeadingCtx>
  );
};
