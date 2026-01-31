import { Editor } from "@/app/editor";
import { User } from "@/app/user/components/user";
import { Article, Heading, SROnly } from "@/components/shared";
import { getRandomElement } from "@/libs";
import { ActionButtons } from "./action-buttons";
import { TimeDisplay } from "./time-display";
import { Vote } from "./vote";

export const Comment = ({ hasReplies = true }: { hasReplies?: boolean }) => {
  const isCurrentUser = getRandomElement([true, false]);
  return (
    <section className="grid gap-4 background">
      <Article className="white p-4 rounded-lg grid grid-cols-2 gap-4 items-center">
        <Heading className="flex gap-4 col-span-full items-center">
          <SROnly>A comment by </SROnly>
          <User showName />
          <TimeDisplay />
        </Heading>
        <p className="col-span-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit
          quia reiciendis quaerat repellat! Corrupti soluta enim doloremque.
          Fugiat commodi quasi optio, hic aliquid nulla doloremque quas ea
          repellat sunt.
        </p>
        <Vote />
        <ActionButtons isCurrentUser={isCurrentUser} />
        <div className="col-span-full">
          <Editor type="update" />
        </div>
      </Article>
      <Editor type="reply" />
      {hasReplies && (
        <section className="pl-4 border-l b-grey-100">
          <Comment hasReplies={false} />
          <Comment hasReplies={false} />
        </section>
      )}
    </section>
  );
};
