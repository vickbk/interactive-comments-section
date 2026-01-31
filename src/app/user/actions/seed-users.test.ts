import { seedUsers } from "./seed-users";

describe("Seed Users", () => {
  test("should seed users in the local storage", async () => {
    const seeded = await seedUsers();
    expect(seeded?.length).not.toBe(0);
    expect(typeof seeded[0]).toBe("object");
    expect(seeded[0].id).not.toBe("");
  });

  test("should not duplicate seed data if called multiple times", async () => {
    const firstSeed = await seedUsers();
    const secondSeed = await seedUsers();
    expect(firstSeed.length).toBe(secondSeed.length);
  });
});
