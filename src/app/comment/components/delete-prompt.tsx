import { CustomDialog, Heading } from "@/components/shared";
import { joinClasses } from "@/libs";
import type { CommentType } from "../types/comment";

export const DeletePrompt = ({
  onClose,
}: {
  comment: CommentType;
  onClose: () => void;
}) => {
  return (
    <CustomDialog
      isOpen
      onClose={onClose}
      className="m-auto white p-8 grid gap-y-4 c-grey-500 rounded-2xl"
    >
      <Heading className="text-3xl font-semibold c-grey-800">
        Delete Comment
      </Heading>
      <p>
        Are you sure you want to delete this comment? This will remove it and
        the action cannot be undone.
      </p>
      <div className="flex gap-4">
        {[
          { color: "grey-500", text: "No, Cancel", click: onClose },
          { text: "Yes, Delete", color: "pink-400", click: () => {} },
        ].map(({ text, color, click }) => (
          <button
            key={text}
            className={joinClasses([
              color,
              "grow py-4 rounded-lg c-white active-button",
            ])}
            type="button"
            onClick={click}
          >
            {text}
          </button>
        ))}
      </div>
    </CustomDialog>
  );
};
