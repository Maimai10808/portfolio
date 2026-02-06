import { useEffect, useState } from "react";

export function useBlinkCursor(interval = 500) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => setVisible((v) => !v), interval);
    return () => window.clearInterval(id);
  }, [interval]);

  return visible ? "|" : " ";
}
