import { render, screen } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";
import { Header } from "./header";

describe("Header", () => {
  test("should close the menue if lost focus", async () => {
    render(<Header />);
    const switcher = await screen.findByText(/switch user/i);
    expect(switcher).toBeInTheDocument();
    await userEvent.click(switcher);
    expect(await screen.findByText(/add account/i)).toBeVisible();
    // await userEvent.click(document.body);
    // expect(await screen.queryByText(/add account/i)).not.toBeVisible();
  });
});
