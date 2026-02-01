import { render, screen } from "@testing-library/react";
import { loadComments } from "../../comment";
import { Editor } from "./editor";

describe("Editor", () => {
  test("Renders editor with default type set to comment", async () => {
    render(<Editor />);
    expect(await screen.findByPlaceholderText(/a comment/)).toBeVisible();
  });

  test("should render without the user icon if type set to update", async () => {
    render(<Editor type="update" />);
    expect(await screen.queryByText(/update as/i)).toBeNull();
  });

  test("should initialize the editor with the current comment as default value", async () => {
    const [comment] = await loadComments();
    expect(comment).toBeTruthy();
    render(<Editor type="update" comment={comment} />);
    const txtArea =
      await screen.findByPlaceholderText<HTMLTextAreaElement>(/update/i);
    expect(txtArea).toBeVisible();
    expect(txtArea.value).toEqual(comment.text);
  });
});
