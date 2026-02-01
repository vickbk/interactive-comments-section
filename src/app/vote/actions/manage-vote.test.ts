import { loadComments } from "@/app/comment";
import { getCurrentSession } from "@/app/user";
import { calculateVotes, getVotes, vote } from "./manage-vote";

describe("Votes", () => {
  test("should return votes by comment id", async () => {
    const [comment] = await loadComments();
    expect(comment).toBeTruthy();
    const votes = await getVotes(comment.id);
    expect(typeof votes).toBe("object");
    expect(Object.keys(votes!)).toEqual(["downVotes", "upVotes"]);
  });

  test("should return null for unknown id", async () => {
    expect(await getVotes("unknown id")).toBeNull();
  });

  test("should return number", async () => {
    expect(await calculateVotes("some unknown id")).toBe(0);
    const [{ id }] = await loadComments();
    expect(typeof (await calculateVotes(id))).toBe("number");
  });

  test("should increase the number of votes by 1", async () => {
    const [{ id }] = await loadComments();
    const previousCount = await calculateVotes(id);
    await vote({ id });
    const thenCount = await calculateVotes(id);
    expect(previousCount).toBeLessThan(thenCount);
    await vote({ id });
    await vote({ id });
    await vote({ id });
    const nowCount = await calculateVotes(id);
    expect(nowCount - previousCount).toBe(1);
  });

  test("should not upvote and down vote", async () => {
    const [{ id }] = await loadComments();
    await vote({ id });
    await vote({ id, up: false });
    const { upVotes, downVotes } = (await getVotes(id))!;
    const session = await getCurrentSession();
    expect(
      upVotes?.includes(session) && downVotes?.includes(session),
    ).toBeFalsy();
  });
});
