"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

// Dados simulados de postagens do Instagram
const instagramPosts = [
  {
    id: "post1",
    imageUrl: "/11 Promocoes.jpg?height=400&width=400&text=Antes+e+Depois",
    caption:
      "✨ Adeus, rugas! Olá, pele lisa! ✨ 📅 Vagas limitadas! Reserve já. #BelezaSemRugas #ToxinaBotulínica #PeleRenovada",
    date: "2 dias atrás",
  },
  {
    id: "post2",
    imageUrl: "/11 Promocoes4.jpg?height=400&width=400&text=Curso+Toxina",
    caption:
      "💋 Lábios mais volumosos e harmoniosos! 💋 📅 Agende seu horário! #LábiosPerfeitos #PreenchimentoLabial #BelezaNatural",
    date: "4 dias atrás",
  },
  {
    id: "post3",
    imageUrl: "/11 Promocoes7.jpg?height=400&width=400&text=Dica+Skincare",
    caption:
      "🔥 Adeus flacidez, olá firmeza! 🔥 📅 Agende sua avaliação! #PeleFirme #Endolaser #BelezaSemCirurgia",
    date: "1 semana atrás",
  },
]

export function InstagramFeed() {
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
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Últimas do Instagram</h2>
            <p className="text-gray-600">Acompanhe nossas novidades, resultados, dicas e promoções</p>
          </div>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-2 text-gold hover:text-[#D4AF37] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@institutobrunomarques</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-800 hover:bg-gold hover:text-white border-none"
                    >
                      Ver mais
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-3">
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500 hover:scale-110 transition-transform cursor-pointer" />
                    <MessageCircle className="w-6 h-6 text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
                    <Share2 className="w-6 h-6 text-green-500 hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 text-gold hover:fill-gold hover:scale-110 transition-all cursor-pointer" />
                </div>
                <p className="text-gray-700 text-sm line-clamp-2 mb-2">{post.caption}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] px-8">
              <Instagram className="w-5 h-5 mr-2" />
              Ver mais no Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}