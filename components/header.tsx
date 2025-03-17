"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const header = document.querySelector("header")
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)"
      } else {
        header.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    }

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const isHomePage = pathname === "/"

  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Tratamentos", path: "/tratamentos" },
    { name: "Cursos", path: "/cursos" },
    { name: "Resultados", path: isHomePage ? "#resultados" : "/#resultados" },
    { name: "Feedbacks", path: isHomePage ? "#feedbacks" : "/#feedbacks" },
    { name: "Contato", path: isHomePage ? "#contato" : "/#contato" },
  ]

  const handleMenuItemClick = (e, path) => {
    if (isHomePage && path.startsWith("#")) {
      e.preventDefault()
      document.querySelector(path)?.scrollIntoView({
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        {isMobile ? (
          // Mobile Header
          <div className="py-4 flex justify-between items-center">
            <Link href="/" className="z-20">
              <Image
                src="/brunomarqueslogo.png?height=500&width=500&text=Logo"
                alt="Instituto Bruno Marques"
                width={50}
                height={50}
                className="w-10 h-10"
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-20 p-2 rounded-full bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-95 z-10 flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="text-white text-xl hover:text-gold transition-colors duration-300 font-semibold"
                      onClick={(e) => handleMenuItemClick(e, item.path)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        ) : (
          // Desktop Header
          <nav className="flex justify-center py-6">
            <ul className="flex space-x-8 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] rounded-full px-8 py-3 shadow-md">
              <li>
                <Link href="/" className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold">
                  <span className="relative z-10">Início</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamentos"
                  className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                >
                  <span className="relative z-10">Tratamentos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos"
                  className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                >
                  <span className="relative z-10">Cursos</span>
                </Link>
              </li>
              {isHomePage ? (
                <>
                  <li>
                    <Link
                      href="#resultados"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#resultados")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }}
                    >
                      <span className="relative z-10">Resultados</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#feedbacks"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#feedbacks")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }}
                    >
                      <span className="relative z-10">Feedbacks</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contato"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("#contato")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }}
                    >
                      <span className="relative z-10">Contato</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/#resultados"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                    >
                      <span className="relative z-10">Resultados</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#feedbacks"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                    >
                      <span className="relative z-10">Feedbacks</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contato"
                      className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                    >
                      <span className="relative z-10">Contato</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}