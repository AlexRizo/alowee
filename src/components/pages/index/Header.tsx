import NavbarMenu from "@components/react/NavbarMenu";
import { Menu } from "lucide-react";

export const Header = ({ hidden = true, menuOpen = false, setMenuOpen }: { hidden: boolean, menuOpen: boolean, setMenuOpen: (menuOpen: boolean) => void }) => {

  return (
    <header
      className="w-full bg-gradient-to-b from-[#230D28] to-[#44234D] absolute z-5 transition-opacity"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <nav className="flex items-center justify-between container mx-auto py-4 max-h-20">
        <NavbarMenu setMenuOpen={setMenuOpen}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
        </NavbarMenu>
        <a href="/">
          <img
            src="./icons/alowee-icon.svg"
            alt="Alowee Interactive"
            className="h-full"
          />
        </a>

        <a href="/contacto" className="font-space-grotesk font-bold text-xl">
          CONTACTO
        </a>
      </nav>
      <div className="h-0.5 bg-gradient-to-r from-[#252237] via-[#6A7C88] to-[#252237]"></div>
    </header>
  );
};
