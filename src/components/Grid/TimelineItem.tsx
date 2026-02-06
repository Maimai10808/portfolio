import type { ReactNode } from "react";

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  time?: string;
  children?: ReactNode;

  // 是否是最后一项：最后一项不画下面那根线
  isLast?: boolean;

  // 球大小（px），默认 18
  dotSize?: number;

  // 线宽（px），默认 2
  lineWidth?: number;
};

export function TimelineItem({
  title,
  subtitle,
  time,
  children,
  isLast = false,
  dotSize = 50,
  lineWidth = 3,
}: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      {/* 左侧：球 + 线 */}
      <div className="flex flex-col items-center">
        {/* 球 */}
        <span
          className="rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.6)]"
          style={{ width: dotSize, height: dotSize }}
        />

        {/* 线 */}
        {!isLast && (
          <span
            className="mt-2 flex-1 bg-white"
            style={{ width: lineWidth, minHeight: 120 }}
          />
        )}
      </div>

      {/* 右侧：内容 */}
      <div className="pb-8">
        <div className="flex items-baseline gap-3">
          <h3
            className="text-4xl font-semibold
            bg-linear-to-br from-rose-600 via-fuchsia-500 to-pink-200
            bg-clip-text text-transparent
            drop-shadow-sm"
          >
            {title}
          </h3>
          {time ? <span className="text-sm text-white/60">{time}</span> : null}
        </div>

        {subtitle ? <p className="mt-1 text-green-500">{subtitle}</p> : null}

        {children ? <div className="mt-3 text-white/80">{children}</div> : null}
      </div>
    </div>
  );
}
