import { CurrentUser, User } from "@/app/user";
import {
  Header as HeaderElement,
  Heading,
  Icon,
  SROnly,
} from "@/components/shared";
import { joinClasses } from "@/libs";
import { useCallback, useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const outsideClose = useCallback((node: HTMLElement | null) => {
    function closeOnBlur({ target }: PointerEvent) {
      if (!node?.contains(target as Node)) setOpen(false);
    }
    window.addEventListener("click", closeOnBlur);
    return () => window.addEventListener("click", closeOnBlur);
  }, []);
  return (
    <HeaderElement
      ref={outsideClose}
      className="white flex justify-between p-4 sticky top-4 mb-4 items-center rounded-lg"
    >
      <Heading>
        <SROnly>Currently logged in as </SROnly>
        <CurrentUser />
      </Heading>
      <button
        className="active-button p-2 c-purple-600 rounded-lg"
        type="button"
        onClick={() => setOpen(!open)}
      >
        Switch user <Icon name="arrow-left-right" />
      </button>
      <ul
        className={joinClasses([
          "absolute top-[calc(100%+var(--spacing)*4)] right-0 white p-4 flex flex-col gap-4 rounded-lg",
          !open && "hidden",
        ])}
      >
        <li>
          <User showName />
        </li>
        <li>
          <User showName />
        </li>
        <li>
          <User showName />
        </li>
        <li>
          <button
            className="purple-600 c-background p-2 rounded-lg self-center"
            type="button"
          >
            {" "}
            <Icon name="person-add" /> Add account
          </button>
        </li>
      </ul>
    </HeaderElement>
  );
};
