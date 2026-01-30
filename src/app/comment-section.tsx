import { Comments } from "./comment";
import { Editor } from "./editor";
import { Header } from "./header";

export const CommentSection = () => {
  return (
    <>
      <Header />
      <Comments />
      <Editor />
    </>
  );
};
