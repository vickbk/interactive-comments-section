import type { SeedUser, UserType } from "@/app/user";

export type CommentType = {
  id: string | number;
  text: string;
  replies?: CommentType["id"][] | null;
  createdAt: EpochTimeStamp;
  upVotes?: UserType["id"][];
  downVotes?: UserType["id"][];
  uId: UserType["id"];
  isReply: boolean;
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
  isReply: boolean;
};
