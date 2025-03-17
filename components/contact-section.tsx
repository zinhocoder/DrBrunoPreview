import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
            <p className="text-gray-600">Agende sua avaliação e descubra o tratamento ideal para você.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#C4A052]" />
                <span>(47) 98916-8040</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[#C4A052]" />
                <span>Rua 242 n°344 Sala 01, Itapema - Meia Praia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-[#C4A052]" />
                <span>Segunda a Sexta: 9h às 18h</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
              onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
            >
              Agende sua Consulta
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/IMG_4431.jpg?height=400&width=400"
              alt="Nossa Clínica"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

