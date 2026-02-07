import { useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      // 手感参数（你可以后面再调）
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
