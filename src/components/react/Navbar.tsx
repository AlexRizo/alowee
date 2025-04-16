import NavbarMenu from "./NavbarMenu.tsx";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="py-10 z-20 relative">
        <div
          role="menubar"
          className="flex items-center justify-between max-w-7xl mx-auto"
        >
          <img
            src="./icons/alowee-icon.svg"
            alt="Alowee Interactive"
            width={120}
            height={70}
          />
          <button
            className="bg-neutral-300 py-3 px-6 border-2 border-neutral-600 rounded-md text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            MENÚ
          </button>
        </div>
      </header>

      {isMenuOpen && <NavbarMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
