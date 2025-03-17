"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { SpecialistsSection } from "@/components/specialists-section"
import TreatmentsCarousel from "@/components/treatments-carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const heroPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))
  const aboutPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))

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

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-white`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center py-6">
            <ul className="flex space-x-8 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] rounded-full px-8 py-3 shadow-md">
              {["Sobre", "Tratamentos", "Cursos", "Resultados", "Feedbacks", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-100 transition-colors duration-300 font-semibold"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }}
                  >
                    <span className="relative z-10">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/IMG_3608.jpg" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white opacity-100" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            backgroundColor: "white",
          }}
        >
          <Image src="/IMG_3608.jpg" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold">Instituto Bruno Marques</h1>
          <p className="text-xl md:text-2xl">Rejuvenescimento Facial e Corporal</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
            onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
          >
            Agende sua Consulta
          </Button>
        </div>
      </section>
      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre o Instituto</h2>
              <p className="text-gray-600 mb-6">
                O Instituto Bruno Marques é referência em tratamentos estéticos avançados, oferecendo soluções
                personalizadas para rejuvenescimento facial e corporal. Nossa equipe de especialistas utiliza as mais
                modernas técnicas e tecnologias para garantir resultados excepcionais e naturais.
              </p>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] border-none"
                onClick={() => {
                  document.querySelector("#tratamentos")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Conheça nossos tratamentos
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/FullSizeRender.jpg?height=400&width=600"
                alt="Instituto Bruno Marques"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Treatments Section */}
      <section id="tratamentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nossos Tratamentos</h2>
          <div className="relative">
            {(() => {
              const { carouselContent, scrollPrev, scrollNext } = TreatmentsCarousel()
              return (
                <>
                  {carouselContent}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )
            })()}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Cursos e Mentorias</h2>
          <div className="relative">
            <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {[
                  "Toxina Botulínica",
                  "Bioestimuladores",
                  "Endolaser (corporal e facial)",
                  "Temporal face lifting",
                  "Preenchedores (facial e corporal)",
                  "Bioplastia íntima masculina (aumento peniano)",
                  "Bioremodeladores (Pdrn, Exossomos e profhilo)",
                ].map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="w-20 h-20 rounded-full bg-gold mb-4 flex items-center justify-center">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{course}</h3>
                        <p className="text-center text-gray-600">Aprenda com os melhores especialistas do mercado.</p>
                        <Button className="mt-4 bg-transparent border border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white transition-colors duration-300">
                          Saiba Mais
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
              <CarouselNext className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Resultados</h2>
          <div className="relative">
            <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {[
                  { before: "/IMG_9576.png", after: "/IMG_4598.png" },
                  {
                    before: "/placeholder.svg?height=300&width=400&text=Antes+2",
                    after: "/placeholder.svg?height=300&width=400&text=Depois+2",
                  },
                  {
                    before: "/placeholder.svg?height=300&width=400&text=Antes+3",
                    after: "/placeholder.svg?height=300&width=400&text=Depois+3",
                  },
                  {
                    before: "/placeholder.svg?height=300&width=400&text=Antes+4",
                    after: "/placeholder.svg?height=300&width=400&text=Depois+4",
                  },
                  {
                    before: "/placeholder.svg?height=300&width=400&text=Antes+5",
                    after: "/placeholder.svg?height=300&width=400&text=Depois+5",
                  },
                ].map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative h-64">
                          <Image
                            src={item.before || "/placeholder.svg"}
                            alt={`Resultado ${index + 1} Antes`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="relative h-64">
                          <Image
                            src={item.after || "/placeholder.svg"}
                            alt={`Resultado ${index + 1} Depois`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2">Tratamento Realizado</h3>
                          <p className="text-gray-600">Descrição breve do procedimento e resultados obtidos.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
              <CarouselNext className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id="feedbacks" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">O que nossos clientes dizem</h2>
          <div className="relative">
            <Carousel className="max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {[
                  {
                    name: "Maria Silva",
                    feedback:
                      "Excelente atendimento e resultados incríveis! Recomendo o Instituto Bruno Marques para todos que buscam tratamentos estéticos de qualidade.",
                  },
                  {
                    name: "João Santos",
                    feedback:
                      "Fiquei impressionado com a atenção aos detalhes e o profissionalismo da equipe. Os resultados superaram minhas expectativas!",
                  },
                  {
                    name: "Ana Oliveira",
                    feedback:
                      "O Dr. Bruno e sua equipe são verdadeiros artistas. Minha autoestima melhorou significativamente após os tratamentos.",
                  },
                  {
                    name: "Carlos Ferreira",
                    feedback:
                      "Ambiente acolhedor e tecnologia de ponta. Me senti seguro e bem cuidado durante todo o processo.",
                  },
                ].map((feedback, index) => (
                  <CarouselItem key={index}>
                    <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <svg
                            className="w-12 h-12 mx-auto text-gold"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 mb-4">{feedback.feedback}</p>
                        <p className="font-semibold">{feedback.name}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
              <CarouselNext className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <SpecialistsSection />

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/brunomarqueslogo.png?height=500&width=500&text=Instituto+Bruno+Marques"
                alt="Instituto Bruno Marques Logo"
                width={120}
                height={120}
                className="w-100 h-100"
              />
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white">&copy; 2025 Instituto Bruno Marques. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

