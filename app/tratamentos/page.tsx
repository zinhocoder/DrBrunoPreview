"use client"

import Layout from "@/components/layout"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
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
    image: "blog20230526.jpg",
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
    image: "/IMG_6621.jpg?height=300&width=400&text=Endolaser",
    link: "/tratamentos/endolaser",
  },
  {
    name: "Preenchedores Corporais",
    description: "Modelagem e definição corporal com preenchedores.",
    image: "/Nutrologia-Goiania-Preenchedor-gluteo-com-acido-hialuronico-X-PMMA.png?height=300&width=400&text=Preenchedores+Corporais",
    link: "/tratamentos/preenchedores-corporais",
  },
  {
    name: "Bioplastia Íntima Masculina",
    description: "Procedimento para aumento e modelagem peniana.",
    image: "/photo_2023-05-12_15-13-08.png?height=300&width=400&text=Bioplastia+Íntima+Masculina",
    link: "/tratamentos/bioplastia-intima-masculina",
  },
  {
    name: "Transplante Capilar",
    description: "Solução definitiva para a calvície e rarefação capilar.",
    image: "/transplante-capilar-implante-capilar-bio-renew-medicina-estetica.png?height=300&width=400&text=Transplante+Capilar",
    link: "/tratamentos/transplante-capilar",
  },
  {
    name: "Limpeza de Pele",
    description: "Tratamento profundo para uma pele limpa e radiante.",
    image: "/serv_facial_limp_pele_peeling_cristal.jpg.png?height=300&width=400&text=Limpeza+de+Pele",
    link: "/tratamentos/limpeza-de-pele",
  },
  {
    name: "Temporal Facelifting",
    description: "Técnica inovadora para lifting facial não cirúrgico.",
    image: "/lifting-facial-não-cirúrgico.jpeg?height=300&width=400&text=Temporal+Facelifting",
    link: "/tratamentos/temporal-facelifting",
  },
]

export default function Treatments() {
  return (
    <Layout>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Nossos Tratamentos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{treatment.name}</h2>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <Link href={treatment.link} passHref>
                  <Button className="w-full bg-gold hover:bg-[#D4AF37] text-white">Saiba Mais</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

