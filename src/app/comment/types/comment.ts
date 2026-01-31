import type { SeedUser, UserType } from "@/app/user";

export type CommentType = {
  id: string | number;
  text: string;
  replies?: CommentType["id"][] | null;
  createdAt: EpochTimeStamp;
  uId: UserType["id"];
};

export type SeedComment = {
  id: number;
  content: string;
  createdAt: string;
  score?: number;
  user?: SeedUser;
  replies?: SeedComment[] | null;
};

export type FlattenSeedComment = Omit<SeedComment, "replies"> & {
  replies: number[] | null;
};
