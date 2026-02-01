import { Icon, SROnly } from "@/components/shared";

export const VoteBtn = ({
  icon = "plus",
  action,
}: {
  icon?: "plus" | "dash";
  action: () => void;
}) => {
  return (
    <button
      className="p-2 c-purple-200 active-c-purple-600 active-button rounded-lg"
      type="button"
      onClick={action}
    >
      <SROnly>{icon === "plus" ? "Up" : "Down"} vote</SROnly>
      <Icon name={icon} />
    </button>
  );
};
