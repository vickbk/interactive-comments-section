import { useCallback, useEffect, useRef, useState } from "react";
import type { ToggleTrigger } from "./types/toggle";

/**
 * Controls the opening and closing state of an element
 * also alowing to close the element if it lost focus
 * @returns [open state(boolean), openTrigger, a reference for the target element]
 */
export function useToggle(inital = false) {
  const [open, setOpen] = useState(inital);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    function closeOnBlur({ target }: PointerEvent) {
      if (node && !node.contains(target as Node)) setOpen(false);
    }
    window.addEventListener("click", closeOnBlur);
    return () => window.removeEventListener("click", closeOnBlur);
  }, []);

  const toggleTrigger: ToggleTrigger = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return [open, toggleTrigger, elementRef] as const;
}
