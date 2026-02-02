import { render, screen } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("should render correctly", async () => {
    render(<App />);

    expect(await screen.findByText(/switch user/i)).toBeVisible();

    expect(await screen.findByPlaceholderText(/Add a comment/i)).toBeVisible();

    expect((await screen.findAllByText(/a comment by/i)).length).not.toBe(0);

    expect((await screen.findAllByText(/a reply by/i)).length).not.toBe(0);
  });

  test("should switch users from the user switch", async () => {
    render(<App />);
    const switcher = await screen.findByText(/switch user/i);
    expect(switcher).toBeVisible();
    await userEvent.click(switcher);
    const lis = await screen.findAllByText(/switch to/i);
    expect(lis).not.toBeNull();
    expect(lis.length).not.toBe(0);

    const userJulius = await screen.findByRole("button", {
      name: /juliusomo/i,
    });
    expect(userJulius).toBeVisible();
    await userEvent.click(userJulius);
    expect(
      await screen.findByRole("heading", { name: /logged in as.*juliusomo/s }),
    );

    const userAmy = await screen.findByRole("button", {
      name: /amyrobson/i,
    });
    await userEvent.click(userAmy);
    expect(
      await screen.findByRole("heading", { name: /logged in as.*amyrobson/s }),
    );
  });

  test("should add new comment", async () => {
    render(<App />);

    const oldCount = (await screen.findAllByText(/a comment by/i)).length;
    const commentAdder = await screen.findByPlaceholderText(/Add a comment/i);
    await userEvent.type(commentAdder, "This is a new comment");

    const commentForm = commentAdder.closest("form");
    expect(commentForm).toBeVisible();

    const submitBtn = commentForm?.querySelector("button");
    expect(submitBtn).toBeVisible();

    await userEvent.click(submitBtn!);

    expect(
      (await screen.findAllByText(/a comment by/i)).length,
    ).toBeGreaterThan(oldCount);
  });

  test("should add a reply", async () => {
    render(<App />);

    const countReplies = (await screen.findAllByText(/a reply by/i)).length;

    expect(countReplies).not.toBe(0);

    const [replyOpener] = await screen.findAllByRole("button", {
      name: /reply.*to post/i,
    });
    await userEvent.click(replyOpener);

    const replyInput = await screen.findByPlaceholderText(/add a reply/i);
    await userEvent.type(replyInput, "some good reply");

    const replyForm = replyInput?.closest("form");
    expect(replyForm).toBeVisible();

    await userEvent.click(replyForm!.querySelector("button")!);

    expect((await screen.findAllByText(/a reply by/i)).length).toBeGreaterThan(
      countReplies,
    );
  });

  test("should delete a comment", async () => {
    render(<App />);
    const allDeleteBtns = await screen.findAllByRole("button", {
      name: /delete/i,
    });

    const { length: oldCount } = allDeleteBtns;
    const [deleteBtn] = allDeleteBtns;
    await userEvent.click(deleteBtn);

    const confirmDelete = await screen.findByRole("button", {
      name: /yes, delete/i,
    });
    await userEvent.click(confirmDelete);
    const { length: newCount } = await screen.queryAllByRole("button", {
      name: /delete/i,
    });

    expect(newCount).toBeLessThan(oldCount);
  });
});
