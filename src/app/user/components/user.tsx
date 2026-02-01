import { SROnly } from "@/components/shared";
import { joinClasses } from "@/libs";
import { useUser } from "../hooks/use-user";
import type { UserType } from "../types/user";

export const User = ({
  showName = false,
  id,
}: {
  id: UserType["id"];
  showName?: boolean;
}) => {
  const user = useUser(id);
  return (
    <dl>
      <dt>
        <SROnly>User</SROnly>
      </dt>
      <dd className="flex items-center gap-4">
        <img
          className="rounded-full max-w-12"
          src={user?.image}
          alt="user avatar"
        />
        <span
          className={joinClasses([
            !showName && "sr-only",
            "c-grey-800 font-semibold",
          ])}
        >
          {user?.name ?? "user"}
        </span>
      </dd>
    </dl>
  );
};
