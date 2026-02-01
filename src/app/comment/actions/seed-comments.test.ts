import { flatComments, seedComments } from "./seed-comments";

describe("Seed Comments", () => {
  test("should return an array of comments", async () => {
    const comments = await seedComments();
    expect(comments instanceof Array).toBe(true);
  });

  test("should not duplicate data if called multiple times", async () => {
    const firstSeed = await seedComments();
    const secondSeed = await seedComments();
    expect(firstSeed).toEqual(secondSeed);
  });
});

describe("flat comments", () => {
  test("should put replies in the same array as main comments", () => {
    const comments = flatComments([
      { id: 1, content: "", createdAt: "", replies: null },
      {
        id: 2,
        content: "",
        createdAt: "",
        replies: [{ id: 3, content: "", createdAt: "", replies: null }],
      },
    ]);
    expect(comments.length).toBe(3);
    expect(comments[1].replies?.[0]).toBe(3);
  });
});
