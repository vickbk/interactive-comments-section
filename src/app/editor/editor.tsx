import { Heading, SROnly } from "@/components/shared";
import type { ToggleRef } from "@/hooks";
import { useCurrentSession } from "../user";
import { User } from "../user/components/user";

export const Editor = ({
  type = "comment",
  reference,
}: {
  type?: "comment" | "reply" | "update";
  reference?: ToggleRef<HTMLFormElement>;
}) => {
  const { session } = useCurrentSession();

  const [placeholder, name] = {
    comment: ["Add a comment", "send"],
    reply: ["Add a reply", "reply"],
    update: ["Update your comment", "update"],
  }[type];

  return (
    <form
      className="white p-4 grid grid-cols-2 gap-4 rounded-lg"
      ref={reference}
    >
      {type !== "update" ? (
        <Heading>
          <SROnly>{name} as</SROnly>
          <User id={session!} />
        </Heading>
      ) : (
        <div></div>
      )}
      <label className="col-span-full row-start-1">
        <textarea
          className="w-full resize-none outline p-4 rounded-lg out-grey-100 active-out-purple-600"
          name="comment"
          placeholder={placeholder + "..."}
          rows={4}
        ></textarea>
      </label>
      <button
        className="purple-600 c-white p-2 px-4 uppercase active-button rounded-lg place-self-end"
        type="submit"
      >
        {name}
      </button>
    </form>
  );
};
