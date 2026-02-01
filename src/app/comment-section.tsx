import { Comments } from "./comment";
import { Editor } from "./editor";
import { Header } from "./header";
import { useCurrentSession } from "./user";

export const CommentSection = () => {
  const { pageSession } = useCurrentSession();
  return (
    <>
      <Header />
      <Comments key={pageSession} />
      <div className="sticky bottom-4 mt-4">
        <Editor />
      </div>
    </>
  );
};
