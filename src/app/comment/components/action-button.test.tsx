import { render, screen } from "@testing-library/react";
import { ActionButtons } from "./action-buttons";

describe("Action Button tests", () => {
  test("should show reply button if not current user", () => {
    render(<ActionButtons isCurrentUser={false} />);
    expect(screen.findByText(/reply/)).toBeVisible();
  });

  test("should show delete and update buttons if current user", () => {
    render(<ActionButtons isCurrentUser />);
    expect(screen.getAllByText(/delete|update/).length).toBe(2);
  });
});
