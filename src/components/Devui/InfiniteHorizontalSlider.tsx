import React, { useEffect, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  step?: number;
  className?: string;
  trackClassName?: string;
};

export default function InfiniteHorizontalSlider({
  children,
  step = 360,
  className = "",
  trackClassName = "",
}: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null); // 单份内容宽度用它来测量
  const isAdjustingRef = useRef(false);

  const items = useMemo(() => React.Children.toArray(children), [children]);

  const scrollBy = (dx: number) => {
    viewportRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  // 初始化：跳到中间那份（第二份 A）
  useEffect(() => {
    const viewport = viewportRef.current;
    const setEl = setRef.current;
    if (!viewport || !setEl) return;

    const w = setEl.scrollWidth; // 一份 A 的宽度
    viewport.scrollLeft = w; // 让视口从中间那份开始
  }, [items.length]);

  // 循环关键：滚到边界就“无感跳转”
  const onScroll = () => {
    const viewport = viewportRef.current;
    const setEl = setRef.current;
    if (!viewport || !setEl) return;
    if (isAdjustingRef.current) return;

    const w = setEl.scrollWidth;
    const x = viewport.scrollLeft;

    // 经验阈值：离边界近一点就跳，避免刚好卡边
    const threshold = 40;

    // 左侧接近第一份 A 的起点：+w 跳回中间
    if (x <= threshold) {
      isAdjustingRef.current = true;
      viewport.scrollLeft = x + w;
      requestAnimationFrame(() => (isAdjustingRef.current = false));
      return;
    }

    // 右侧接近第三份 A 的终点：-w 跳回中间
    // 三份总宽约 3w，接近 2w 以后再往右就是第三份末尾
    if (x >= w * 2 - threshold) {
      isAdjustingRef.current = true;
      viewport.scrollLeft = x - w;
      requestAnimationFrame(() => (isAdjustingRef.current = false));
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => scrollBy(-step)}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2
                   h-10 w-10 rounded-full bg-black/30 text-white
                   hover:bg-black/40 active:scale-95 transition"
        aria-label="Scroll left"
      >
        <ChevronLeft className="mx-auto" />
      </button>

      <button
        type="button"
        onClick={() => scrollBy(step)}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2
                   h-10 w-10 rounded-full bg-black/30 text-white
                   hover:bg-black/40 active:scale-95 transition"
        aria-label="Scroll right"
      >
        <ChevronRight className="mx-auto" />
      </button>

      <div
        ref={viewportRef}
        onScroll={onScroll}
        className={`overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth ${trackClassName}`}
      >
        {/* 3 份：A | A | A */}
        <div className="flex gap-10">
          <div className="flex gap-10">{items}</div>
          <div ref={setRef} className="flex gap-10">
            {items}
          </div>
          <div className="flex gap-10">{items}</div>
        </div>
      </div>
    </div>
  );
}
