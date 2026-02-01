import { Icon, SROnly } from "@/components/shared";

export const VoteBtn = ({ icon = "plus" }: { icon?: "plus" | "dash" }) => {
  return (
    <button
      className="p-2 c-purple-200 active-c-purple-600 active-button rounded-lg"
      type="button"
    >
      <SROnly>{icon === "plus" ? "Up" : "Down"} vote</SROnly>
      <Icon name={icon} />
    </button>
  );
};
