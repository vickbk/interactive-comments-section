import { SROnly } from "@/components/shared";

export const User = () => {
  return (
    <dl>
      <dt>
        <SROnly>User</SROnly>
      </dt>
      <dd>
        <img src="./vite.svg" alt="user name" />
        <span>User</span>
      </dd>
    </dl>
  );
};
