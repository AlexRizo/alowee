import { Mail, MessageCircle } from "lucide-react"

export const Footer = ({ hidden = true }: { hidden: boolean }) => {
  return (
    <footer
      className="bg-black border-t border-gray-800 py-6 flex justify-evenly items-center absolute bottom-0 w-full transition-opacity"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <a href="/">
        <img src="img/alowee-logo-morado.webp" className="w-23 h-auto"/>
      </a>
      <p className="text-gray-400">©2025 Hecho con ♥ por Alowee Interactive</p>
      <div className="flex gap-4">
        <MessageCircle className="size-6 text-gray-400" />
        <Mail className="size-6 text-gray-400" />
      </div>
    </footer>
  )
}