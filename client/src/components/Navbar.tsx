import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-secondary font-bold">KG</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">KG Beauty</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary transition">
              Início
            </Link>
            <a href="#procedimentos" className="hover:text-primary transition">
              Procedimentos
            </a>
            <a href="#contato" className="hover:text-primary transition">
              Contato
            </a>
            <Link to="/admin" className="hover:text-primary transition">
              Admin
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-primary transition py-2">
              Início
            </Link>
            <a href="#procedimentos" className="block hover:text-primary transition py-2">
              Procedimentos
            </a>
            <a href="#contato" className="block hover:text-primary transition py-2">
              Contato
            </a>
            <Link to="/admin" className="block hover:text-primary transition py-2">
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
