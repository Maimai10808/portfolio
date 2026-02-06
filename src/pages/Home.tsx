import { Element } from "react-scroll";
import man from "../assets/man.png";
import { useTypewriter } from "../animation/useTypewriter";
import { useBlinkCursor } from "../animation/useBlinkCursor";

export default function Home() {
  const { text } = useTypewriter(
    ["Frontend Developer", "Web3 Builder", "Next.js + React", "DeFi Projects"],
    {
      typingSpeed: 55,
      deletingSpeed: 30,
      pauseBeforeDelete: 900,
      pauseBeforeType: 250,
      loop: true,
    },
  );

  const cursor = useBlinkCursor(450);

  return (
    <Element name="home" className="min-h-screen bg-blue-700 flex ">
      {/* Left_Home */}
      <div className="w-[50%] h-screen flex justify-center items-center">
        {/* Home_Details */}
        <div className="text-[2vmax]">
          <div className="text-[0.8em]">I'M</div>
          <div
            className="text-[2.5em] font-semibold
      bg-linear-to-br from-blue-600  to-white bg-clip-text text-transparent"
          >
            Maimai
          </div>
          <div className="text-[1em]">
            {text} <span className="opacity-80">{cursor}</span>
          </div>
        </div>
      </div>

      {/* Right_Home */}
      <div className="w-[50%] h-screen flex justify-center items-center">
        <img src={man} alt="" className="w-[60%] drop-shadow-2xl" />
      </div>
    </Element>
  );
}
