import type { CommentType } from "@/app/comment";
import { useCallback, useState } from "react";
import { calculateVotes, vote } from "../actions/manage-vote";

export function useVote(id: CommentType["id"]) {
  const [voteCount, setVote] = useState(0);
  const [voteSession, setVoteSession] = useState("");
  const voteLoader = useCallback(
    (node: HTMLElement | null) => {
      if (node)
        calculateVotes(id).then((v) => {
          setVote(v);
          console.log(v);
        });
    },
    [id],
  );
  const upVote = useCallback(() => {
    vote({ id }).then(() => setVoteSession(crypto.randomUUID()));
  }, [id]);

  const downVote = useCallback(() => {
    vote({ id, up: false }).then(() => setVoteSession(crypto.randomUUID()));
  }, [id]);
  return { vote: voteCount, voteLoader, upVote, downVote, voteSession };
}
