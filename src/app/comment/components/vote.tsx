import { Article, Heading } from "@/components/shared";
import { VoteBtn } from "./vote-btn";

export const Vote = () => {
  return (
    <Article>
      <Heading className="sr-only">Vote for this post</Heading>
      <VoteBtn />
      <span>12</span>
      <VoteBtn />
    </Article>
  );
};
