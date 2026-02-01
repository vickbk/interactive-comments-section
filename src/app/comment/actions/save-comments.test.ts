import { loadCommentById, loadComments } from "./load-comments";
import {
  deleteComment,
  saveComment,
  saveCommentUpdate,
  saveReply,
} from "./save-comments";

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

  test("should save modifications to a comment", async () => {
    const [comment] = await loadComments();
    expect(comment).toBeTruthy();
    await saveCommentUpdate({
      reference: comment.id,
      comment: comment.text + "some new text",
    });
    const updated = await loadCommentById(comment.id);
    expect(updated).toBeTruthy();
    expect(comment.text).not.toEqual(updated!.text);
  });

  test("should delete a comment", async () => {
    const oldComments = await loadComments();
    const { id } = oldComments.at(-1)!;
    await deleteComment(id);

    expect(await loadCommentById(id)).toBeUndefined();
  });

  test("should delete a reply with all its references", async () => {
    const oldComments = await loadComments();
    const { id } = oldComments.reverse().find((r) => r.isReply)!;
    expect(id).toBeTruthy();
    await deleteComment(id);
    const references = (await loadComments()).filter((comment) =>
      comment.replies?.includes(id),
    );
    expect(references.length).toBe(0);
  });
});
