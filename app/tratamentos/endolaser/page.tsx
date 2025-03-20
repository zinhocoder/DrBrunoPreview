import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Endolaser() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/IMG_6621.jpg?height=400&width=600&text=Endolaser"
          alt="Endolaser"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Endolaser</h1>
          <p className="text-xl md:text-2xl mb-8">Tratamento a laser para rejuvenescimento facial e corporal</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Endolaser?</h2>
              <p className="text-gray-600 mb-6">
                O Endolaser é um tratamento avançado que utiliza tecnologia a laser para rejuvenescimento facial e
                corporal. Este procedimento minimamente invasivo é eficaz para tratar flacidez, rugas finas e melhorar a
                textura geral da pele, proporcionando resultados notáveis com tempo de recuperação mínimo.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Rejuvenescimento facial e corporal",
                  "Redução de flacidez e rugas finas",
                  "Melhoria na textura e tonalidade da pele",
                  "Estimulação da produção de colágeno",
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
                src="/IMG_6621.jpg?height=400&width=600&text=Endolaser"
                alt="Endolaser"
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
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona o Endolaser</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aplicação do Laser",
                description: "O laser é aplicado de forma precisa nas áreas a serem tratadas.",
              },
              {
                title: "Estimulação Térmica",
                description: "O calor gerado pelo laser estimula a produção de colágeno e elastina.",
              },
              {
                title: "Regeneração Celular",
                description:
                  "O processo de regeneração celular é acelerado, resultando em uma pele mais jovem e firme.",
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
                O Endolaser é geralmente bem tolerado. Os pacientes podem sentir uma sensação de calor durante o
                procedimento, mas anestesia local pode ser aplicada para garantir o conforto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quantas sessões são necessárias?</AccordionTrigger>
              <AccordionContent>
                O número de sessões varia de acordo com as necessidades individuais e a área tratada. Geralmente, de 1 a
                3 sessões são recomendadas para resultados ótimos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Qual é o tempo de recuperação?</AccordionTrigger>
              <AccordionContent>
                O tempo de recuperação é mínimo. A maioria dos pacientes pode retornar às suas atividades normais
                imediatamente após o tratamento, com apenas uma leve vermelhidão que desaparece em poucos dias.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para renovar sua pele?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Endolaser hoje mesmo!</p>
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

