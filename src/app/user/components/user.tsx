import { SROnly } from "@/components/shared";
import { joinClasses } from "@/libs";

export const User = ({ showName = false }: { showName?: boolean }) => {
  return (
    <dl>
      <dt>
        <SROnly>User</SROnly>
      </dt>
      <dd className="flex items-center gap-4">
        <img className="rounded-full" src="./vite.svg" alt="user name" />
        <span
          className={joinClasses([
            !showName && "sr-only",
            "c-grey-800 font-semibold",
          ])}
        >
          User
        </span>
      </dd>
    </dl>
  );
};
