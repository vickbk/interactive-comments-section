import { render, screen } from "@testing-library/react";
import { ActionButtons } from "./action-buttons";

describe("Action Button tests", () => {
  test("should show reply button if not current user", async () => {
    render(<ActionButtons isCurrentUser={false} />);
    expect(await screen.findByText(/reply/i)).toBeVisible();
  });

  test("should show delete and update buttons if current user", async () => {
    render(<ActionButtons isCurrentUser />);
    expect(await screen.getAllByText(/delete|edit/i).length).toBe(2);
  });
});
