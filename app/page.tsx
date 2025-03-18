"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { SpecialistsSection } from "@/components/specialists-section"
import TreatmentsCarousel from "@/components/treatments-carousel"
import { InstagramFeed } from "@/components/instagram-feed"
import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Layout from "@/components/layout"
import Header from "@/components/header"

export default function Home() {
  const heroPlugin = useRef(null)
  const aboutPlugin = useRef(null)
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
    <Layout>
      <div className={`min-h-screen bg-white`}>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/IMG_3608.jpg" alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
          <div className="relative z-10 space-y-8 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Instituto Bruno Marques</h1>
            <p className="text-lg md:text-xl lg:text-2xl">Rejuvenescimento Facial e Corporal</p>
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
              <div className="relative h-[300px] md:h-[400px]">
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
                const { carouselContent, scrollPrev, scrollNext, isMobile } = TreatmentsCarousel()
                return (
                  <>
                    {carouselContent}
                    {isMobile ? (
                      <div className="flex justify-center mt-6 space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] rounded-full"
                          onClick={scrollPrev}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] rounded-full"
                          onClick={scrollNext}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    ) : (
                      <>
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
                    )}
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
                    { name: "Toxina Botulínica", link: "/cursos/toxina-botulinica" },
                    { name: "Bioestimuladores", link: "/cursos/bioestimuladores" },
                    { name: "Endolaser (corporal e facial)", link: "/cursos/endolaser" },
                    { name: "Temporal face lifting", link: "/cursos/temporal-face-lifting" },
                    { name: "Preenchedores (facial e corporal)", link: "/cursos/preenchedores" },
                    {
                      name: "Bioplastia íntima masculina (aumento peniano)",
                      link: "/cursos/bioplastia-intima-masculina",
                    },
                    { name: "Bioremodeladores (Pdrn, Exossomos e profhilo)", link: "/cursos/bioremodeladores" },
                  ].map((course, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                      <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center p-6">
                          <div className="w-20 h-20 rounded-full bg-gold mb-4 flex items-center justify-center">
                            <Users className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-center">{course.name}</h3>
                          <p className="text-center text-gray-600">Aprenda com os melhores especialistas do mercado.</p>
                          <Link href={course.link} passHref>
                            <Button className="mt-4 bg-transparent border border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white transition-colors duration-300">
                              Saiba Mais
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className={isMobile ? "flex justify-center mt-6 space-x-4" : ""}>
                  <CarouselPrevious
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                  <CarouselNext
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                </div>
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
                      before: "/IMG_0539.jpg?height=300&width=400&text=Antes+2",
                      after: "/IMG_0538.jpg?height=300&width=400&text=Depois+2",
                    },
                    {
                      before: "/IMG_0288.jpg?height=300&width=400&text=Antes+3",
                      after: "/IMG_0286.jpg?height=300&width=400&text=Depois+3",
                    },
                    {
                      before: "/ANTES-PACIENTE-1-1.jpg?height=300&width=400&text=Antes+4",
                      after: "/DEPOIS-PACIENTE-1-1.jpg?height=300&width=400&text=Depois+4",
                    },
                    {
                      before: "/IMG_0404.jpg?height=300&width=400&text=Antes+5",
                      after: "/IMG_2275.jpg?height=300&width=400&text=Depois+5",
                    },
                  ].map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                      <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="relative h-48 md:h-64">
                            <Image
                              src={item.before || "/placeholder.svg"}
                              alt={`Resultado ${index + 1} Antes`}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="relative h-48 md:h-64">
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
                <div className={isMobile ? "flex justify-center mt-6 space-x-4" : ""}>
                  <CarouselPrevious
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                  <CarouselNext
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                </div>
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
                              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                            </svg>
                          </div>
                          <p className="text-gray-600 mb-4">{feedback.feedback}</p>
                          <p className="font-semibold">{feedback.name}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className={isMobile ? "flex justify-center mt-6 space-x-4" : ""}>
                  <CarouselPrevious
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                  <CarouselNext
                    className={`${isMobile ? "static translate-y-0 mx-2" : ""} bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]`}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <SpecialistsSection />

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
              <div className="relative h-[300px] md:h-[400px]">
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
         {/* Instagram Feed / Blog Section */}
         <InstagramFeed />
      </div>
    </Layout>
  )
}

