import { useCurrentSession, User } from "@/app/user";
import {
  Header as HeaderElement,
  Heading,
  Icon,
  SROnly,
} from "@/components/shared";
import { useToggle } from "@/hooks";
import { UserSwitch } from "./user-switch";

export const Header = () => {
  const [open, setOpen, outsideClose] = useToggle();
  const { session } = useCurrentSession();
  return (
    <HeaderElement
      ref={outsideClose}
      className="white flex justify-between p-4 sticky top-4 mb-8 items-center rounded-lg"
    >
      <Heading>
        <SROnly>Currently logged in as </SROnly>
        <User id={session!} />
      </Heading>
      <button
        className="active-button p-2 c-purple-600 rounded-lg"
        type="button"
        onClick={setOpen}
      >
        Switch user <Icon name="arrow-left-right" />
      </button>
      <UserSwitch {...{ open }} />
    </HeaderElement>
  );
};
