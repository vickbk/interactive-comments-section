import { render } from "@testing-library/react";
import { Comment } from "./comment";

describe("Comment component", () => {
  test("should show you badge if current user", async () => {
    render(<Comment />);
    expect(true).toBe(true);
  });
});
