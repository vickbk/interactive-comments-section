import { render, screen } from "@testing-library/react";
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
});
