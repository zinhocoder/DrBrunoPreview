"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-16">
        <div className="container mx-auto px-4">
          {isMobile ? (
            // Mobile Footer
            <div className="flex flex-col items-center text-center">
              {/* Logo centralizada */}
              <div className="mb-8">
                <Image
                  src="/brunomarqueslogo.png?height=500&width=500&text=Instituto+Bruno+Marques"
                  alt="Instituto Bruno Marques Logo"
                  width={120}
                  height={120}
                  className="w-100 h-100"
                />
                <p className="text-gray-300 mt-4 text-sm max-w-xs mx-auto">
                  Referência em tratamentos estéticos avançados e cursos especializados.
                </p>
              </div>

              {/* Contato Compacto */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gold">Contato</h3>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-gold" />
                    <span>(47) 98916-8040</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Rua 242 n°344 Sala 01, Itapema</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="https://wa.me/5547992865256" passHref>
                    <Button className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]">
                      Agendar Consulta
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Links Compactos */}
              <div className="grid grid-cols-2 gap-8 w-full mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gold">Tratamentos</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/tratamentos" className="text-gray-300 hover:text-gold transition-colors text-sm">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gold">Cursos</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/cursos" className="text-gray-300 hover:text-gold transition-colors text-sm">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Redes Sociais e Copyright */}
              <div className="border-t border-gray-800 pt-6 w-full text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-400 text-sm">&copy; 2025 Instituto Bruno Marques</p>
              </div>
            </div>
          ) : (
            // Desktop Footer (original)
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo e Descrição */}
                <div className="space-y-4">
                  <Image
                    src="/brunomarqueslogo.png?height=500&width=500&text=Instituto+Bruno+Marques"
                    alt="Instituto Bruno Marques Logo"
                    width={120}
                    height={120}
                    className="w-100 h-100"
                  />
                  <p className="text-gray-300 mt-4 text-sm">
                    Referência em tratamentos estéticos avançados e cursos especializados para profissionais da área da
                    saúde.
                  </p>
                </div>

                {/* Tratamentos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Tratamentos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/tratamentos/bioplastia-intima-masculina"
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        Bioplastia Íntima Masculina
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/botox" className="text-gray-300 hover:text-gold transition-colors">
                        Botox
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tratamentos/preenchimento-labial"
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        Preenchimento Labial
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos/skinbooster" className="text-gray-300 hover:text-gold transition-colors">
                        Skinbooster
                      </Link>
                    </li>
                    <li>
                      <Link href="/tratamentos" className="text-gold hover:text-white transition-colors">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Cursos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Cursos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/cursos/bioplastia-intima-masculina"
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        Bioplastia Íntima Masculina
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/bioestimuladores" className="text-gray-300 hover:text-gold transition-colors">
                        Bioestimuladores
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/preenchedores" className="text-gray-300 hover:text-gold transition-colors">
                        Preenchedores
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos/endolaser" className="text-gray-300 hover:text-gold transition-colors">
                        Endolaser
                      </Link>
                    </li>
                    <li>
                      <Link href="/cursos" className="text-gold hover:text-white transition-colors">
                        Ver todos →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contato */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Contato</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5 text-gold" />
                      <span>(47) 98916-8040</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span>Rua 242 n°344 Sala 01, Itapema - Meia Praia</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span>Segunda a Sexta: 9h às 18h</span>
                    </li>
                    <li className="mt-4">
                      <Link href="https://wa.me/5547992865256" passHref>
                        <Button className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]">
                          Agendar Consulta
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Redes Sociais e Copyright */}
              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">&copy; 2025 Instituto Bruno Marques. Todos os direitos reservados.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  )
}

