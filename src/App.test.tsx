import { render, screen } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("should render correctly", async () => {
    render(<App />);
    const switcher = await screen.findByText(/switch user/i);
    expect(switcher).toBeVisible();
    await userEvent.click(switcher);
    const lis = await screen.getAllByRole("list");
    expect(lis).not.toBeNull();
    expect(lis.length).not.toBe(0);
  });
});
