import { Editor } from "@/app/editor";
import { useCurrentSession, User } from "@/app/user";
import { Vote } from "@/app/vote";
import { Article, Heading, SROnly } from "@/components/shared";
import { useToggle } from "@/hooks";
import { useCallback } from "react";
import type { CommentType } from "../types/comment";
import { ActionButtons } from "./action-buttons";
import { Comments } from "./comments";
import { DeletePrompt } from "./delete-prompt";
import { TimeDisplay } from "./time-display";

export const Comment = ({ comment }: { comment: CommentType }) => {
  const { text, uId, replies, isReply } = comment;
  const [openReply, toggleReply, replayRef] = useToggle();
  const [openUpdate, toggleUpdate, updateRef] = useToggle();
  const [showDelete, toggleDelete] = useToggle();

  const combinedRefs = useCallback(
    (node: HTMLElement | null) => {
      replayRef.current = node;
      updateRef.current = node;
    },
    [replayRef, updateRef],
  );

  const { session } = useCurrentSession();
  const isCurrentUser = session === uId;

  return (
    <section className="grid gap-4 background">
      <Article
        className="white p-4 rounded-lg grid grid-cols-2 gap-4 items-center"
        ref={combinedRefs}
      >
        <Heading className="flex flex-wrap gap-4 col-span-full items-center">
          <SROnly>A {isReply ? "reply" : "comment"} by </SROnly>
          <User id={uId} showName />
          {isCurrentUser && (
            <span className="purple-600 c-background px-2 self-center">
              <SROnly>This is</SROnly> you
            </span>
          )}
          <TimeDisplay />
        </Heading>
        {!openUpdate && (
          <>
            <p className="col-span-full">{text}</p>
            <Vote comment={comment} />
          </>
        )}
        <div className={openUpdate ? "col-span-full" : ""}>
          <ActionButtons
            isCurrentUser={isCurrentUser}
            actions={{ toggleReply, toggleUpdate, toggleDelete }}
          />
        </div>
        <div className="col-span-full">
          {isCurrentUser
            ? openUpdate && <Editor type="update" comment={comment} />
            : openReply && <Editor type="reply" comment={comment} />}
        </div>
      </Article>
      {replies && replies.length !== 0 && (
        <section className="pl-4 border-l b-grey-100 grid gap-4">
          <Comments {...{ replies }} />
        </section>
      )}
      {showDelete && <DeletePrompt onClose={toggleDelete} comment={comment} />}
    </section>
  );
};
