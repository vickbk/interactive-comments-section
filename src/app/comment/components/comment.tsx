import { Editor } from "@/app/editor";
import { useCurrentSession, User } from "@/app/user";
import { Vote } from "@/app/vote";
import { Article, Heading, SROnly } from "@/components/shared";
import { useToggle } from "@/hooks";
import { joinClasses } from "@/libs";
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
    <section className="grid gap-4 md:gap-6 background">
      <Article
        className="white p-4 md:p-6 rounded-lg grid grid-cols-2 sm:grid-cols-[auto_auto_1fr] sm:grid-rows-[auto_auto] gap-4 md:gap-6 items-center"
        ref={combinedRefs}
      >
        <Heading className="flex flex-wrap gap-4 col-span-full sm:col-start-2 sm:col-end-3 items-center">
          <SROnly>A {isReply ? "reply" : "comment"} by </SROnly>
          <User id={uId} showName />
          {isCurrentUser && (
            <span className="purple-600 c-background px-2 self-center">
              <SROnly>This is</SROnly> you
            </span>
          )}
          <TimeDisplay time={comment.createdAt} />
        </Heading>
        {!openUpdate && (
          <>
            <p className="col-span-full sm:col-start-2">{text}</p>
            <Vote comment={comment} />
          </>
        )}
        <div
          className={joinClasses([
            openUpdate && "col-span-full",
            "sm:col-start-3 sm:row-start-1",
          ])}
        >
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
        <section className="pl-4 sm:pl-8 sm:ml-8 border-l-2 b-grey-100 grid gap-4">
          <Comments {...{ replies }} />
        </section>
      )}
      {showDelete && <DeletePrompt onClose={toggleDelete} comment={comment} />}
    </section>
  );
};
