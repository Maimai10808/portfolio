import { Element } from "react-scroll";
import man from "../assets/man.png";

export default function Home() {
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
          <div className="text-[1em]">WEB DEVELOPER</div>
        </div>
      </div>

      {/* Right_Home */}
      <div className="w-[50%] h-screen flex justify-center items-center">
        <img src={man} alt="" className="w-[60%] drop-shadow-2xl" />
      </div>
    </Element>
  );
}
