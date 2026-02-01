import type { CommentType } from "@/app/comment";
import { useCurrentSession, User } from "@/app/user";
import { Heading, SROnly } from "@/components/shared";
import { joinClasses } from "@/libs";
import { useSaveComment } from "../hooks/use-save-comment";
import type { EditorType } from "../types/editor";

export const Editor = ({
  type = "comment",
  comment,
}: {
  type?: EditorType;
  comment?: CommentType;
}) => {
  const { session } = useCurrentSession();

  const [placeholder, name] = {
    comment: ["Add a comment", "send"],
    reply: ["Add a reply", "reply"],
    update: ["Update your comment", "update"],
  }[type];

  const [action, status] = useSaveComment({ type, comment });
  return (
    <form
      action={action}
      className="white p-4 md:p-6 grid grid-cols-2 sm:grid-cols-[auto_1fr_auto] gap-4 md:gap-6 rounded-lg"
    >
      {type !== "update" ? (
        <Heading>
          <SROnly>{name} as</SROnly>
          <User id={session!} />
        </Heading>
      ) : (
        <div></div>
      )}
      <label
        className={joinClasses([
          "col-span-full row-start-1",
          type !== "update" && "sm:col-start-2 sm:col-end-3",
        ])}
      >
        <textarea
          className="w-full resize-none outline p-4 rounded-lg out-grey-100 active-out-purple-600"
          name="comment"
          placeholder={placeholder + "..."}
          rows={4}
          defaultValue={type === "update" ? comment?.text : ""}
        />
      </label>
      <button
        className={joinClasses([
          "purple-600 c-white p-2 px-4 uppercase active-button rounded-lg place-self-end",
          type !== "update" ? "sm:place-self-start" : "sm:col-start-3",
        ])}
        type="submit"
        disabled={status}
      >
        {name}
      </button>
    </form>
  );
};
