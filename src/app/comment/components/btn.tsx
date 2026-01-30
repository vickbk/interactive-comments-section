import { Icon, SROnly } from "@/components/shared";

export const ActionBtn = ({
  text,
  icon,
  color,
  srText = "post",
}: {
  color: string;
  text: string;
  icon: string;
  srText?: string;
}) => {
  return (
    <button type="button" className={color}>
      <Icon name={icon} /> {text} <SROnly>{srText}</SROnly>
    </button>
  );
};
