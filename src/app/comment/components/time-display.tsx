import { SROnly } from "@/components/shared";
import { Fragment } from "react/jsx-runtime";
import { useTime } from "../hooks/use-time";

export const TimeDisplay = ({ time }: { time: EpochTimeStamp }) => {
  const { refreshKey, display } = useTime(time);
  return (
    <Fragment key={refreshKey}>
      <SROnly>Comment posted </SROnly>
      <time>{display}</time>
    </Fragment>
  );
};
