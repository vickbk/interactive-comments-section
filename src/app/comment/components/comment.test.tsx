import { getCurrentSession } from "@/app/user";
import { render, screen } from "@testing-library/react";
import { loadComments } from "../actions/load-comments";
import { Comment } from "./comment";

describe("Comment component", () => {
  test("should show you badge if current user", async () => {
    const session = await getCurrentSession();
    expect(session).toBeTruthy();
    const comments = (await loadComments()).filter(
      ({ uId }) => uId === session,
    );
    expect(comments.length).not.toBe(0);
    render(<Comment comment={comments[0]} />);
    expect(await screen.findByText(/this is you/i)).toBeVisible();
  });
});
