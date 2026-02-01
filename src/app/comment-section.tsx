import { Comments } from "./comment";
import { Editor } from "./editor";
import { Header } from "./header";
import { useCurrentSession } from "./user";

export const CommentSection = () => {
  const { pageSession } = useCurrentSession();
  return (
    <section className="mx-auto">
      <Header />
      <Comments key={pageSession} />
      <div className="sticky sm:relative bottom-4 mt-8">
        <Editor />
      </div>
    </section>
  );
};
