import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterOptions = {
  typingSpeed?: number; // 打字每个字符间隔(ms)
  deletingSpeed?: number; // 删字每个字符间隔(ms)
  pauseBeforeDelete?: number; // 打完后停顿(ms)
  pauseBeforeType?: number; // 删完后停顿(ms)
  loop?: boolean; // 是否循环
  startIndex?: number; // 从第几条开始
};

type TypewriterState = {
  text: string; // 当前展示的文本
  fullText: string; // 当前目标完整句子
  index: number; // 当前句子下标
  isTyping: boolean; // 正在打字（否则在删字）
  isDeleting: boolean;
  isFinished: boolean; // 不循环时：是否全部完成
};

export function useTypewriter(
  words: string[],
  opts: TypewriterOptions = {},
): TypewriterState {
  const {
    typingSpeed = 60,
    deletingSpeed = 35,
    pauseBeforeDelete = 1200,
    pauseBeforeType = 400,
    loop = true,
    startIndex = 0,
  } = opts;

  const safeWords = useMemo(
    () => (Array.isArray(words) ? words.filter(Boolean) : []),
    [words],
  );

  const [index, setIndex] = useState(() =>
    Math.min(Math.max(startIndex, 0), Math.max(safeWords.length - 1, 0)),
  );
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef<number | null>(null);

  const fullText = safeWords[index] ?? "";
  const text = fullText.slice(0, subIndex);

  useEffect(() => {
    // 清理上一个 timer
    if (timerRef.current) window.clearTimeout(timerRef.current);

    if (safeWords.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFinished(true);
      return;
    }

    // 不循环且已经最后一条、最后一个字也打完了：结束
    if (
      !loop &&
      index === safeWords.length - 1 &&
      subIndex === fullText.length &&
      !isDeleting
    ) {
      setIsFinished(true);
      return;
    }

    const doneTyping = subIndex === fullText.length && !isDeleting;
    const doneDeleting = subIndex === 0 && isDeleting;

    if (doneTyping) {
      timerRef.current = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
      return;
    }

    if (doneDeleting) {
      timerRef.current = window.setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => {
          const next = prev + 1;
          if (next >= safeWords.length) return loop ? 0 : prev; // 不循环就停在最后一条
          return next;
        });
      }, pauseBeforeType);
      return;
    }

    timerRef.current = window.setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [
    safeWords.length,
    fullText,
    subIndex,
    isDeleting,
    index,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeType,
  ]);

  return {
    text,
    fullText,
    index,
    isTyping: !isDeleting,
    isDeleting,
    isFinished,
  };
}
