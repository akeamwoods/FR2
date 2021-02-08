import { useEffect } from "react";

// Found here: https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661, modified to TS

export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
