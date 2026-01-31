import { Editor } from "@/app/editor";
import { User } from "@/app/user/components/user";
import { Article, Heading, SROnly } from "@/components/shared";
import { useToggle } from "@/hooks";
import { getRandomElement } from "@/libs";
import { useCallback } from "react";
import type { CommentType } from "../types/comment";
import { ActionButtons } from "./action-buttons";
import { TimeDisplay } from "./time-display";
import { Vote } from "./vote";

export const Comment = ({
  comment: { text, uId },
}: {
  comment: CommentType;
}) => {
  const [openReply, toggleReply, replayRef] = useToggle();
  const [openUpdate, toggleUpdate, updateRef] = useToggle();
  const combinedRefs = useCallback(
    (node: HTMLElement | null) => {
      replayRef.current = node;
      updateRef.current = node;
    },
    [replayRef, updateRef],
  );

  const isCurrentUser = getRandomElement([true, false]);

  return (
    <section className="grid gap-4 background">
      <Article
        className="white p-4 rounded-lg grid grid-cols-2 gap-4 items-center"
        ref={combinedRefs}
      >
        <Heading className="flex gap-4 col-span-full items-center">
          <SROnly>A comment by </SROnly>
          <User id={uId} showName />
          <TimeDisplay />
        </Heading>
        {!openUpdate && (
          <>
            <p className="col-span-full">{text}</p>
            <Vote />
          </>
        )}
        <div className={openUpdate ? "col-span-full" : ""}>
          <ActionButtons
            isCurrentUser={isCurrentUser}
            actions={{ toggleReply, toggleUpdate }}
          />
        </div>
        <div className="col-span-full">
          {isCurrentUser
            ? openUpdate && <Editor type="update" />
            : openReply && <Editor type="reply" />}
        </div>
      </Article>
      {/* {hasReplies && (
        <section className="pl-4 border-l b-grey-100 grid gap-4">
          <Comment hasReplies={false} />
          <Comment hasReplies={false} />
        </section>
      )} */}
    </section>
  );
};
