import { Menu } from "lucide-react";
import NavbarMenu from "./NavbarMenu.tsx";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="2xl:py-10 lg:py-8 py-4 z-20 lg:relative fixed top-0 lg:bg-transparent bg-black/10 w-full">
        <div
          role="menubar"
          className="flex items-center justify-between 2xl:max-w-full xl:max-w-5xl lg:w-4xl lg:px-0 px-10 mx-auto"
        >
          <img
            src="./icons/alowee-icon.svg"
            alt="Alowee Interactive"
            className="2xl:w-30 xl:w-26 lg:w-24 w-20"
          />
          <button
            className="lg:bg-neutral-300 lg:py-3 lg:px-6 border-2 lg:border-neutral-600 border-none rounded-md cursor-pointer 2xl:text-2xl xl:text-xl lg:text-lg text-base"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="lg:block hidden">MENÚ</span>
            <Menu className="size-8 lg:hidden"/>
          </button>
        </div>
      </header>

      {isMenuOpen && <NavbarMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
