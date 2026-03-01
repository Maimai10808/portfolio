import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full h-20 px-10
                  flex justify-between items-center
                 text-white "
    >
      <h1
        className="text-4xl font-semibold
      bg-linear-to-br from-blue-600  to-white bg-clip-text text-transparent "
      >
        PORTFOLIO
      </h1>
      <ul className="flex justify-center items-center gap-5 list-none text-[20px] ">
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
