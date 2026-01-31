import { loadComments, loadCommentsOnly, loadReplies } from "./load-comments";

describe("Comments loading", () => {
  test("should return an array of comments", async () => {
    const comments = await loadComments();
    expect(typeof comments).toBe("object");
    expect(comments instanceof Array).toBe(true);
  });

  test("should return only comments, not replies", async () => {
    const comments = await loadCommentsOnly();
    expect(comments.every(({ isReply }) => !isReply)).toBe(true);
  });

  test("should return related comments only", async () => {
    const replies = await loadReplies([1, 2, 3]);
    expect(replies?.length).toBe(3);
  });
});
