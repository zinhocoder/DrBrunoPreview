import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UltrassomMicrofocado() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/720x720-7.jpg?height=400&width=600&text=Ultrassom+Microfocado"
          alt="Ultrassom Microfocado"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultrassom Microfocado</h1>
          <p className="text-xl md:text-2xl mb-8">Tecnologia avançada para lifting e firmeza da pele</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Ultrassom Microfocado?</h2>
              <p className="text-gray-600 mb-6">
                O Ultrassom Microfocado é uma tecnologia avançada não invasiva que utiliza energia ultrassônica para
                estimular a produção de colágeno e elastina nas camadas profundas da pele. Este tratamento é eficaz para
                lifting facial, redução de flacidez e melhoria geral da textura da pele.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Lifting facial não cirúrgico",
                  "Redução de flacidez na pele",
                  "Melhoria no contorno facial",
                  "Estimulação da produção de colágeno",
                  "Resultados naturais e duradouros",
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
                src="/placeholder.svg?height=400&width=600&text=Ultrassom+Microfocado"
                alt="Ultrassom Microfocado"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona o Ultrassom Microfocado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Energia Focalizada",
                description: "O dispositivo emite energia ultrassônica focalizada em camadas específicas da pele.",
              },
              {
                title: "Estimulação de Colágeno",
                description: "A energia aquece os tecidos, estimulando a produção natural de colágeno e elastina.",
              },
              {
                title: "Resultados Progressivos",
                description: "Os efeitos do tratamento continuam a melhorar ao longo de 2-3 meses após a sessão.",
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
              <AccordionTrigger>O tratamento é doloroso?</AccordionTrigger>
              <AccordionContent>
                A maioria dos pacientes relata apenas um leve desconforto durante o procedimento. Pode-se sentir uma
                sensação de calor e formigamento, mas o tratamento é geralmente bem tolerado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quantas sessões são necessárias?</AccordionTrigger>
              <AccordionContent>
                Geralmente, uma única sessão já proporciona resultados visíveis. No entanto, dependendo das necessidades
                individuais, podem ser recomendadas sessões adicionais para resultados ótimos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quanto tempo duram os resultados?</AccordionTrigger>
              <AccordionContent>
                Os resultados do Ultrassom Microfocado podem durar de 12 a 18 meses, dependendo da idade do paciente,
                qualidade da pele e estilo de vida. Tratamentos de manutenção podem prolongar os efeitos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para renovar sua pele?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Ultrassom Microfocado hoje mesmo!</p>
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

