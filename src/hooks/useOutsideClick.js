import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing); // Event Capture

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing); // Event Capture
    },
    [handler, listenCapturing]
  );

  return ref;
}
