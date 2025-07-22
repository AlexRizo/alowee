import { Mail, MessageCircle } from "lucide-react"

export const Footer = ({ hidden = true }: { hidden: boolean }) => {
  return (
    <footer
      className="bg-black border-t border-gray-800 py-6 flex lg:flex-row flex-col lg:gap-0 gap-1 justify-evenly items-center absolute bottom-0 w-full transition-opacity"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <a href="/" className="lg:order-none order-1">
        <img src="/img/alowee-logo-morado.webp" className="w-23 h-auto"/>
      </a>
      <p className="text-gray-400 lg:order-none order-3">©2025 Hecho con ♥ por Alowee Interactive</p>
      <div className="flex gap-4 lg:order-none order-2">
        <MessageCircle className="size-6 text-gray-400" />
        <Mail className="size-6 text-gray-400" />
        <small className="text-gray-400">34°38° ´N</small>
      </div>
    </footer>
  )
}