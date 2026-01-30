import { CurrentUser, User } from "@/app/user";
import { Article, Heading, SROnly } from "@/components/shared";

export const Header = () => {
  return (
    <Article>
      <Heading>
        <SROnly>Currently logged in as </SROnly>
        <CurrentUser />
      </Heading>
      <button type="button">Switch user account</button>
      <ul>
        <li>
          <User />
        </li>
        <li>
          <User />
        </li>
        <li>
          <User />
        </li>
        <li>
          <button type="button">Add a custom account</button>
        </li>
      </ul>
    </Article>
  );
};
