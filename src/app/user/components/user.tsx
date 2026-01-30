import { SROnly } from "@/components/shared";
import { joinClasses } from "@/libs";

export const User = ({ showName = false }: { showName?: boolean }) => {
  return (
    <dl>
      <dt>
        <SROnly>User</SROnly>
      </dt>
      <dd className="flex items-center gap-4">
        <img src="./vite.svg" alt="user name" />
        <span className={joinClasses([!showName && "sr-only"])}>User</span>
      </dd>
    </dl>
  );
};
