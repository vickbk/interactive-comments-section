import { getRandomElement } from "@/libs";
import { ActionBtn } from "./btn";

export const ActionButtons = () => {
  const isCurrentUser = getRandomElement([true, false]);
  return (
    <div className="flex flex-wrap gap-2 font-semibold justify-end">
      {isCurrentUser ? (
        <>
          <ActionBtn
            color="c-pink-400 active-c-pink-200"
            text="Delete"
            icon="trash-fill"
          />
          <ActionBtn
            color="c-purple-600 active-c-purple-200"
            text="Edit"
            icon="pencil-fill"
          />
        </>
      ) : (
        <ActionBtn
          color="c-purple-600 active-c-purple-200"
          text="Reply"
          srText="to post"
          icon="reply-fill"
        />
      )}
    </div>
  );
};
