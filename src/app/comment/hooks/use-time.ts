import { useEffect, useRef, useState } from "react";

const TIMESLOTS = [
  [1, 60, "sec"],
  [60, 3_600, "min"],
  [3_600, 86_400, "hour"],
  [86_400, 604_800, "day"],
  [604_800, 2_592_000, "week"],
  [2_592_000, 31_536_000, "month"],
  [31_536_000, Infinity, "year"],
] as const;

export function useTime(time: EpochTimeStamp) {
  const [refreshKey, setRefreshKey] = useState("");
  const timeoutKey = useRef(0);
  const [display, setDisplay] = useState("A moment ago");

  setTimeout(() => {
    setRefreshKey(crypto.randomUUID());
  }, 10);
  useEffect(() => {
    const difference = (new Date().getTime() - time) / 1_000;
    const [min, , text] = TIMESLOTS.find(
      ([min, max]) => difference >= min && difference < max,
    ) || [1, 60, "sec"];

    (() => {
      const fraction = difference / min;
      setDisplay(`${fraction.toFixed()} ${text}${fraction > 1 ? "s" : ""} ago`);
    })();

    timeoutKey.current = setTimeout(() => {
      setRefreshKey(crypto.randomUUID());
    }, min * 1000);
    return () => clearTimeout(timeoutKey.current);
  }, [time, refreshKey]);
  return { refreshKey, display };
}
