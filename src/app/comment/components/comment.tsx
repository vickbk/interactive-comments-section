import { Editor } from "@/app/editor";
import { User } from "@/app/user/components/user";
import { Article, Heading, SROnly } from "@/components/shared";
import { ActionButtons } from "./action-buttons";
import { TimeDisplay } from "./time-display";
import { Vote } from "./vote";

export const Comment = () => {
  return (
    <>
      <Article>
        <Heading>
          <SROnly>A comment by </SROnly>
          <User />
        </Heading>
        <TimeDisplay /> <ActionButtons />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit quia
        reiciendis quaerat repellat! Corrupti soluta enim doloremque. Fugiat
        commodi quasi optio, hic aliquid nulla doloremque quas ea repellat sunt.{" "}
        <Editor />
        <Vote />
      </Article>
      <Editor />
    </>
  );
};
