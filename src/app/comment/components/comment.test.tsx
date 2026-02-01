import { getCurrentSession } from "@/app/user";
import { render, screen } from "@testing-library/react";
import { loadComments } from "../actions/load-comments";
import { Comment } from "./comment";

describe("Comment component", () => {
  test("should show you badge if current user", async () => {
    const session = await getCurrentSession();
    expect(session).toBeTruthy();
    const [comment] = (await loadComments()).filter(
      ({ uId }) => session === uId,
    );
    expect(comment).not.toBeNull();
    render(<Comment comment={{ ...comment, replies: null }} />);
    expect(await screen.findByText(/this is you/i)).toBeVisible();
  });

  test("should present correctly a comment to screen readers", async () => {
    const comments = await loadComments();
    const comment = comments.find(({ isReply }) => !isReply)!;
    render(<Comment comment={{ ...comment, replies: null }} />);
    expect(await screen.findByText(/a comment by/i)).toBeVisible();
  });

  test("should present correctly a reply to screen readers", async () => {
    const comments = await loadComments();
    const comment = comments.find(({ isReply }) => isReply)!;
    render(<Comment comment={{ ...comment, replies: null }} />);
    expect(await screen.findByText(/a reply by/i)).toBeVisible();
  });
});
