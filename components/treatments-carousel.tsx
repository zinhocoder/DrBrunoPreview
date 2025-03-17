"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const treatments = [
  {
    name: "Harmonização Facial",
    description: "Técnicas avançadas para equilibrar e realçar os traços faciais.",
    image: "conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg",
    link: "/tratamentos/harmonizacao-facial",
  },
  {
    name: "Preenchimento Labial",
    description: "Aumento e definição dos lábios para um sorriso mais harmonioso.",
    image: "preenchimento_labial_tratamento.jpg",
    link: "/tratamentos/preenchimento-labial",
  },
  {
    name: "Botox",
    description: "Suavização de rugas e linhas de expressão para uma aparência mais jovem.",
    image: "botox.png",
    link: "/tratamentos/botox",
  },
  {
    name: "Skinbooster",
    description: "Hidratação profunda e revitalização da pele para um brilho natural.",
    image: "images.jpeg",
    link: "/tratamentos/skinbooster",
  },
  {
    name: "Bioestimuladores de Colágeno",
    description: "Estímulo natural da produção de colágeno para uma pele mais firme.",
    image: "Bioestimulador-de-Colageno-1-1024x768.jpg",
    link: "/tratamentos/bioestimuladores-de-colageno",
  },
  {
    name: "Fios de PDO",
    description: "Lifting não cirúrgico para um efeito rejuvenescedor imediato.",
    image: "unnamed_(1).png",
    link: "/tratamentos/fios-de-pdo",
  },
  {
    name: "Ultrassom Microfocado",
    description: "Tecnologia avançada para lifting e firmeza da pele.",
    image: "/720x720-7.jpg?height=300&width=400&text=Ultrassom+Microfocado",
    link: "/tratamentos/ultrassom-microfocado",
  },
  {
    name: "Endolaser",
    description: "Tratamento a laser para rejuvenescimento facial e corporal.",
    image: "/IMG_6621,jpg?height=300&width=400&text=Endolaser",
    link: "/tratamentos/endolaser",
  },
  {
    name: "Preenchedores Corporais",
    description: "Modelagem e definição corporal com preenchedores.",
    image: "/placeholder.svg?height=300&width=400&text=Preenchedores+Corporais",
    link: "/tratamentos/preenchedores-corporais",
  },
  {
    name: "Bioplastia Íntima Masculina",
    description: "Procedimento para aumento e modelagem peniana.",
    image: "/placeholder.svg?height=300&width=400&text=Bioplastia+Íntima+Masculina",
    link: "/tratamentos/bioplastia-intima-masculina",
  },
  {
    name: "Transplante Capilar",
    description: "Solução definitiva para a calvície e rarefação capilar.",
    image: "/placeholder.svg?height=300&width=400&text=Transplante+Capilar",
    link: "/tratamentos/transplante-capilar",
  },
  {
    name: "Limpeza de Pele",
    description: "Tratamento profundo para uma pele limpa e radiante.",
    image: "/placeholder.svg?height=300&width=400&text=Limpeza+de+Pele",
    link: "/tratamentos/limpeza-de-pele",
  },
  {
    name: "Temporal Facelifting",
    description: "Técnica inovadora para lifting facial não cirúrgico.",
    image: "/placeholder.svg?height=300&width=400&text=Temporal+Facelifting",
    link: "/tratamentos/temporal-facelifting",
  },
]

const TreatmentsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return {
    carouselContent: (
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`relative flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%] mx-2 md:mx-4 transition-all duration-300 ease-in-out ${
                index === selectedIndex ? "scale-100 opacity-100" : "scale-90 opacity-60"
              }`}
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent ${
                  index === selectedIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{treatment.name}</h3>
                <p className="text-sm text-white mb-4">{treatment.description}</p>
                <Link href={treatment.link} passHref>
                  <Button className="mt-4 bg-transparent border border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white transition-colors duration-300">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    scrollPrev,
    scrollNext,
    isMobile,
  }
}

export default TreatmentsCarousel

