import { Heading, Section, SROnly } from "@/components/shared";
import { User } from "../user/components/user";

export const Editor = () => {
  return (
    <Section>
      <Heading>
        <SROnly>Comment as</SROnly>
        <User />
      </Heading>
      <form>
        <label>
          <textarea name="comment" placeholder="Your comment here"></textarea>
        </label>
        <button type="submit">Comment</button>
      </form>
    </Section>
  );
};
