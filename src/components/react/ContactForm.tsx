import { cn } from "@utils/cn";
import { useState } from "react";
import { FormInput } from "./FormInput";

const modalStyles =
  "bg-black/50 absolute top-0 left-0 w-screen h-screen z-20 flex items-center justify-center";

export const ContactForm = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={cn(className)}>
        {children}
      </button>

      <div className={`${cn(modalStyles)} ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-gradient-to-r from-purple-300 via-rose-300 to-violet-400 p-1 rounded-lg">
          <h1 className="text-white text-2xl font-bold text-center pt-4 pb-2 font-space-grotesk">
            CONTACTO
          </h1>
          <form
            action="https://formsubmit.co/dev@alowee.com"
            method="POST"
            className="bg-white p-4 rounded-lg flex flex-col gap-3"
          >
            <FormInput
              id="name"
              label="Nombre"
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
            />
            <FormInput
              id="email"
              label="Correo electrónico"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <div className="inline-block min-w-80">
              <label
                htmlFor="message"
                className="block text-black font-medium text-sm mb-0.5"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                maxLength={300}
                rows={8}
                required
                placeholder="Mensaje"
                className="w-full border border-gray-200 rounded-md p-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            <input type="hidden" name="_next" value="http://localhost:4321/gracias"></input>

            <button
              type="submit"
              className="bg-purple-400 hover:bg-purple-400/90 transition-colors p-2.5 rounded font-semibold cursor-pointer text-sm"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-black text-center bg-gray-300 hover:bg-gray-300/90 transition-colors p-2.5 rounded font-semibold cursor-pointer text-sm"
            >
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
