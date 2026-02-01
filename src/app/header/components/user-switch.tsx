import { useCurrentSession, User } from "@/app/user";
import { Icon } from "@/components/shared";
import { joinClasses } from "@/libs";
import { useAccountSwitch } from "../hooks/use-account-switch";

export const UserSwitch = ({ open }: { open: boolean }) => {
  const { accounts } = useAccountSwitch();
  const { setSession, session } = useCurrentSession();
  return (
    <ul
      className={joinClasses([
        "absolute top-[calc(100%+var(--spacing)*4)] right-0 white shadow-2xl z-10 p-4 flex flex-col gap-4 rounded-lg",
        !open && "hidden",
      ])}
    >
      {accounts?.map(({ id }) => (
        <li key={id}>
          <button
            onClick={() => setSession(id)}
            className={joinClasses([
              session === id && "outline-2 out-purple-600 outline-dashed",
              "active-button outline-0 w-full p-2 rounded-lg",
            ])}
            type="button"
          >
            <User id={id} showName />
          </button>
        </li>
      ))}

      <li>
        <button
          className="active-button purple-600 c-background p-2 rounded-lg self-center w-full"
          type="button"
        >
          {" "}
          <Icon name="person-add" /> Add account
        </button>
      </li>
    </ul>
  );
};
