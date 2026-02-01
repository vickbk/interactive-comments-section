import { Article, Heading, SROnly } from "@/components/shared";
import { VoteBtn } from "./vote-btn";

export const Vote = () => {
  return (
    <Article className="justify-self-start">
      <Heading className="sr-only">Vote for this comment</Heading>
      <dl className="flex gap-4 c-purple-600 items-center background rounded-lg">
        <dt className="sr-only">Up vote</dt>
        <dd>
          <VoteBtn />
        </dd>
        <dt className="sr-only">Votes</dt>
        <dd>
          <span>
            <SROnly>Current votes:</SROnly>12
          </span>
        </dd>

        <dt className="sr-only">Down vote</dt>
        <dd>
          <VoteBtn icon="dash" />
        </dd>
      </dl>
    </Article>
  );
};
