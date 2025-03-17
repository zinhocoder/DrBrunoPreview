import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PreenchedoresCorporais() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600&text=Preenchedores+Corporais"
          alt="Preenchedores Corporais"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Preenchedores Corporais</h1>
          <p className="text-xl md:text-2xl mb-8">Modelagem e definição corporal com preenchedores</p>
          <Link href="#agendamento" passHref>
            <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
              Agende sua Consulta
            </Button>
          </Link>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O que são Preenchedores Corporais?</h2>
              <p className="text-gray-600 mb-6">
                Os Preenchedores Corporais são substâncias injetáveis utilizadas para modelar e definir diferentes áreas
                do corpo. Eles são eficazes para aumentar o volume, corrigir assimetrias e melhorar o contorno corporal,
                proporcionando resultados naturais e duradouros.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Aumento de volume em áreas específicas",
                  "Correção de assimetrias corporais",
                  "Melhoria do contorno e definição",
                  "Resultados imediatos e duradouros",
                  "Procedimento minimamente invasivo",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gold mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Preenchedores+Corporais"
                alt="Preenchedores Corporais"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Tratamento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Tratamento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Glúteos",
                description: "Aumento e modelagem para glúteos mais definidos e volumosos.",
              },
              {
                title: "Panturrilhas",
                description: "Definição e aumento de volume para pernas mais torneadas.",
              },
              {
                title: "Braços",
                description: "Correção de assimetrias e melhoria do contorno dos braços.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Os resultados são permanentes?</AccordionTrigger>
              <AccordionContent>
                Os resultados dos preenchedores corporais são duradouros, mas não permanentes. Dependendo do tipo de
                preenchedor utilizado e da área tratada, os resultados podem durar de 1 a 2 anos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O procedimento é doloroso?</AccordionTrigger>
              <AccordionContent>
                O desconforto durante o procedimento é mínimo. Utilizamos anestésicos locais para garantir o conforto do
                paciente durante a aplicação dos preenchedores.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quanto tempo leva para ver os resultados?</AccordionTrigger>
              <AccordionContent>
                Os resultados são visíveis imediatamente após o procedimento. No entanto, o resultado final pode ser
                observado após algumas semanas, quando o inchaço diminui completamente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu corpo?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Preenchedores Corporais hoje mesmo!</p>
          <Link href="https://wa.me/5547992865256" passHref>
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

