import type { CommentType } from "@/app/comment";
import { Article, Heading } from "@/components/shared";
import { useVote } from "../hooks/use-vote";
import { VoteBtn } from "./vote-btn";

export const Vote = ({ comment: { id } }: { comment: CommentType }) => {
  const { vote, voteLoader, upVote, downVote, voteSession } = useVote(id);
  return (
    <Article className="justify-self-start" ref={voteLoader} key={voteSession}>
      <Heading className="sr-only">Vote for this comment</Heading>
      <dl className="flex gap-4 c-purple-600 items-center background rounded-lg">
        <dt className="sr-only">Up vote</dt>
        <dd>
          <VoteBtn action={upVote} />
        </dd>
        <dt className="sr-only">Current votes</dt>
        <dd>{vote}</dd>

        <dt className="sr-only">Down vote</dt>
        <dd>
          <VoteBtn icon="dash" action={downVote} />
        </dd>
      </dl>
    </Article>
  );
};
