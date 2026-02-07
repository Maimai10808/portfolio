// useHorizontalWheel.ts
import { useEffect, useRef } from "react";

type Options = {
  speed?: number; // 横向滚动速度倍率
};

export function useHorizontalWheel<T extends HTMLElement>(opts: Options = {}) {
  const { speed = 1 } = opts;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // 触控板横向滚动时 deltaX 可能本来就有值，优先使用它
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // 只有在“确实可以横向滚动”的时候才拦截，避免影响页面正常滚动
      const canScrollLeft = el.scrollLeft > 0;
      const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth;

      // dx > 0 表示向右滚；dx < 0 表示向左滚
      const goingRight = dx > 0;

      if ((goingRight && canScrollRight) || (!goingRight && canScrollLeft)) {
        e.preventDefault();
        el.scrollLeft += dx * speed;
      }
    };

    // 注意：需要 passive: false 才能 preventDefault
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, [speed]);

  return ref;
}
