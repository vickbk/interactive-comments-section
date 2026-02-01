import type { CommentType } from "@/app/comment";

export type EditorType = "comment" | "reply" | "update";

export type ActionParams = { comment: string; reference?: CommentType["id"] };
