import { loadComments } from "./load-comments";

describe("Comments loading", () => {
  test("should return an array of comments", async () => {
    const comments = await loadComments();
    expect(typeof comments).toBe("object");
    expect(comments instanceof Array).toBe(true);
  });
});
