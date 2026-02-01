import { render, screen } from "@testing-library/react";
import { TimeDisplay } from "./time-display";

describe("Time Display", () => {
  test("should show past mins", async () => {
    render(<TimeDisplay time={new Date().getTime() - 180_000} />);
    expect(await screen.findByText(/3 mins ago/i)).toBeVisible();
  });
});
