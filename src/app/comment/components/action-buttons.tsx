import { ActionBtn } from "./btn";

export const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 font-semibold">
      <ActionBtn color="c-pink-400" text="Delete" icon="trash-fill" />
      <ActionBtn color="c-purple-600" text="Edit" icon="pencil-fill" />
      <ActionBtn
        color="c-purple-600"
        text="Reply"
        srText="to post"
        icon="reply-fill"
      />
    </div>
  );
};
