import { render, screen } from "@testing-library/react";
import { Editor } from "./editor";

describe("Editor", () => {
  test("Renders editor with default type set to comment", async () => {
    render(<Editor />);
    expect(screen.findByText(/send/)).toBeVisible();
  });
});
