import { ContactForm } from "@components/react/ContactForm";
import NavbarMenu from "@components/react/NavbarMenu";
import { Mail, Menu } from "lucide-react";

export const Header = ({
  hidden = true,
  menuOpen = false,
  setMenuOpen,
}: {
  hidden: boolean;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}) => {
  return (
    <header
      className="w-full bg-gradient-to-b from-[#230D28] to-[#44234D] absolute z-5 transition-opacity hidden lg:block"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <nav className="flex items-center justify-between container mx-auto py-4 lg:px-0 px-4 max-h-20">
        <NavbarMenu setMenuOpen={setMenuOpen}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
        </NavbarMenu>
        <a href="/">
          <img
            src="/icons/alowee-icon.svg"
            alt="Alowee Interactive"
            className="lg:h-full h-6"
          />
        </a>

        <ContactForm className="font-space-grotesk font-bold text-xl lg:block hidden cursor-pointer">
          CONTACT
          <span className="inline-flex flex-col">
            O
            <hr className="-translate-y-1 border-1 rounded-full w-full ml-auto"></hr>
          </span>
          <Mail className="lg:hidden block" />
        </ContactForm>
      </nav>
      <div className="h-0.5 bg-gradient-to-r from-[#252237] via-[#6A7C88] to-[#252237]"></div>
    </header>
  );
};
