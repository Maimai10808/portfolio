import { Element } from "react-scroll";
import con from "@/assets/contact.png";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Element name="contact" className="min-h-screen flex">
      <div className="w-[50%] flex justify-center items-center">
        <img src={con} alt="" className="w-[50%]" />
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <ContactForm />
      </div>
    </Element>
  );
}
