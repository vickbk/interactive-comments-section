import { Icon, SROnly } from "@/components/shared";

export const ActionBtn = ({
  text,
  icon,
  color,
  srText = "post",
  action,
}: {
  color: string;
  text: string;
  icon: string;
  srText?: string;
  action: () => void;
}) => {
  return (
    <button onClick={action} type="button" className={color}>
      <Icon name={icon} /> {text} <SROnly>{srText}</SROnly>
    </button>
  );
};
