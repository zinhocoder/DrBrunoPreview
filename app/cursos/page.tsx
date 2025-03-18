"use client"

import Layout from "@/components/layout"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    name: "Bioplastia Íntima Masculina",
    description: "Aprenda procedimentos de aumento peniano e modelagem íntima masculina.",
    link: "/cursos/bioplastia-intima-masculina",
  },
  {
    name: "Toxina Botulínica",
    description: "Aprenda técnicas avançadas de aplicação de toxina botulínica.",
    link: "/cursos/toxina-botulinica",
  },
  {
    name: "Endolaser",
    description: "Aprenda a utilizar o Endolaser para tratamentos corporais e faciais.",
    link: "/cursos/endolaser",
  },
  {
    name: "Temporal Face Lifting",
    description: "Técnicas avançadas de lifting facial não cirúrgico.",
    link: "/cursos/temporal-face-lifting",
  },
  {
    name: "Preenchedores",
    description: "Domine as técnicas de preenchimento facial e corporal.",
    link: "/cursos/preenchedores",
  },
  {
    name: "Bioestimuladores",
    description: "Domine o uso de bioestimuladores para rejuvenescimento da pele.",
    link: "/cursos/bioestimuladores",
  },
  {
    name: "Bioremodeladores",
    description: "Técnicas avançadas com PDRN, Exossomos e Profhilo.",
    link: "/cursos/bioremodeladores",
  },
]

export default function Courses() {
  return (
    <Layout>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Nossos Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-center">{course.name}</h2>
                <p className="text-gray-600 mb-4 text-center">{course.description}</p>
                <Link href={course.link} passHref>
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

