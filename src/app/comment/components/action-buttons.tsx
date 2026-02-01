import type { ToggleTrigger } from "@/hooks/types/toggle";
import { ActionBtn } from "./btn";

export const ActionButtons = ({
  isCurrentUser,
  actions: { toggleReply, toggleUpdate, toggleDelete },
}: {
  isCurrentUser: boolean;
  actions: Record<
    "toggleUpdate" | "toggleReply" | "toggleDelete",
    ToggleTrigger
  >;
}) => {
  return (
    <div className="flex flex-wrap gap-2 font-semibold justify-end">
      {isCurrentUser ? (
        <>
          <ActionBtn
            action={toggleDelete}
            color="c-pink-400 active-c-pink-200"
            text="Delete"
            icon="trash-fill"
          />
          <ActionBtn
            action={() => {
              toggleUpdate();
            }}
            color="c-purple-600 active-c-purple-200"
            text="Edit"
            icon="pencil-fill"
          />
        </>
      ) : (
        <ActionBtn
          action={() => {
            toggleReply();
          }}
          color="c-purple-600 active-c-purple-200"
          text="Reply"
          srText="to post"
          icon="reply-fill"
        />
      )}
    </div>
  );
};
