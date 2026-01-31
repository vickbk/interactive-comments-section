import type { SeedUser } from "@/app/user";

export type CommentType = {
  id: string;
  text: string;
  replies: string[];
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
