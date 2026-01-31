import { getUserByName, loadUsers } from "./load-users";

describe("Load users", () => {
  test("should load an array of users", async () => {
    const users = await loadUsers();
    expect(typeof users).toBe("object");
    expect(users instanceof Array).toBe(true);
  });

  test("should load user by name", async () => {
    const user = await getUserByName("maxblagun");
    expect(user).not.toBeNull();
    expect(typeof user).toBe("object");
    expect(user?.name).toBe("maxblagun");
  });

  test("should return null if name does not exist", async () => {
    const user = await getUserByName("does-not-exist");
    expect(user).toBeNull();
  });
});
