import { Element } from "react-scroll";
import man from "../assets/man.png";
import { useBlinkCursor, useTypewriter } from "../animation/useTypewriter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const userName = "Maimai";

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
    <Element name="home" className="min-h-screen  flex flex-col md:flex-row  ">
      {/* Left_Home */}
      <div className="w-full md:w-[50%] h-[50vh] md:h-screen flex justify-center items-center">
        {/* Home_Details */}
        <div className="text-[2vmax] flex flex-col text-left">
          <div className="text-[0.8em] text-white">I'M</div>
          <div
            className="text-[2.5em] font-semibold
      bg-linear-to-br from-blue-600  to-white bg-clip-text text-transparent"
          >
            {userName}
          </div>
          <div className="inline-flex items-center">
            <span className="inline-block min-w-[16ch] whitespace-pre text-white">
              {text || "\u00A0"}
              <span className="opacity-80">{cursor}</span>
            </span>
          </div>

          {/* Button */}
          <Button
            size="lg"
            className="mt-7 px-10 py-2.5 text-2xl bg-blue-400 text-black
             border-2 rounded-4xl hover:bg-transparent hover:text-blue-950
             transition-all duration-500 ease-in-out  "
          >
            HIRE ME
          </Button>
        </div>
      </div>

      {/* Right_Home */}
      <div className="w-full md:w-[50%] h-[50vh] md:h-screen flex justify-center md:items-center items-end">
        <img src={man} alt="" className="w-[60%] drop-shadow-2xl" />
      </div>
    </Element>
  );
}
