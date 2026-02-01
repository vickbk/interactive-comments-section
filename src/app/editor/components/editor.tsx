import { Heading, SROnly } from "@/components/shared";
import type { CommentType } from "../../comment";
import { useCurrentSession } from "../../user";
import { User } from "../../user/components/user";
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

  const [, action, status] = useSaveComment({ type, comment });
  return (
    <form
      action={action}
      className="white p-4 grid grid-cols-2 gap-4 rounded-lg"
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
        >
          {type === "update" ? comment?.text : ""}
        </textarea>
      </label>
      <button
        className="purple-600 c-white p-2 px-4 uppercase active-button rounded-lg place-self-end"
        type="submit"
        disabled={status}
      >
        {name}
      </button>
    </form>
  );
};
