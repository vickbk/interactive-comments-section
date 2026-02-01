import { loadComments } from "./load-comments";
import { saveComment, saveReply } from "./save-comments";

describe("Save Comments", () => {
  test("should save a comment", async () => {
    const oldComments = await loadComments();
    await saveComment("sample comment");
    const newComments = await loadComments();
    expect(oldComments.length).toBe(newComments.length - 1);
  });

  test("should save a reply", async () => {
    const oldComments = await loadComments();
    await saveReply({
      comment: "sample comment",
      reference: oldComments[0].id,
    });
    const newComments = await loadComments();
    expect(oldComments.length).toBe(newComments.length - 1);
    expect(oldComments[0]).not.toEqual(newComments[0]);
    expect(oldComments[0].replies?.length ?? 0).toEqual(
      newComments[0].replies!.length - 1,
    );
  });
});
