import { Icon, SROnly } from "@/components/shared";

export const VoteBtn = () => {
  return (
    <button type="button">
      <SROnly>Up vote</SROnly>
      <Icon name="plus" />
    </button>
  );
};
