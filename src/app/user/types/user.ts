export type UserType = {
  id: string;
  name: string;
  image?: string;
};

export type SeedUser = {
  username: string;
  image: Record<"png" | "webp", string>;
};
