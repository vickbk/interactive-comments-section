import { User } from "@/app/user/components/user";
import { ActionButtons } from "./action-buttons";
import { TimeDisplay } from "./time-display";
import { Vote } from "./vote";

export const Comment = () => {
  return (
    <div>
      <User /> <TimeDisplay /> <ActionButtons />
      Comment
      <Vote />
    </div>
  );
};
