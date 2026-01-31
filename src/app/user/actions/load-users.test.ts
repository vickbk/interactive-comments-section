import { getUserById, getUserByName, loadUsers } from "./load-users";

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

  test("should return a user by his id", async () => {
    const users = await loadUsers();
    expect(users).not.toBeNull();
    expect(users.length).not.toBe(0);
    const [{ id }] = users;
    const user = await getUserById(id);
    expect(user).toBeTruthy();
    expect(user?.id).toEqual(id);
  });

  test("should return null if not found", async () => {
    const user = await getUserById("not-defined");
    expect(user).toBeNull();
  });
});
