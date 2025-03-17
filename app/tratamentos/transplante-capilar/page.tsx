import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TransplanteCapilar() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600&text=Transplante+Capilar"
          alt="Transplante Capilar"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transplante Capilar</h1>
          <p className="text-xl md:text-2xl mb-8">Solução definitiva para a calvície e rarefação capilar</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Transplante Capilar?</h2>
              <p className="text-gray-600 mb-6">
                O Transplante Capilar é um procedimento cirúrgico minimamente invasivo que consiste na transferência de
                folículos capilares de áreas com maior densidade para regiões com calvície ou rarefação. Esta técnica
                oferece resultados naturais e duradouros para homens e mulheres que sofrem com a perda de cabelo.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Resultados naturais e permanentes",
                  "Aumento da densidade capilar",
                  "Melhoria na aparência e autoestima",
                  "Procedimento minimamente invasivo",
                  "Recuperação rápida",
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
                src="/placeholder.svg?height=400&width=600&text=Transplante+Capilar"
                alt="Transplante Capilar"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas de Transplante */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Técnicas de Transplante Capilar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "FUE (Follicular Unit Extraction)",
                description: "Extração individual de folículos capilares, minimizando cicatrizes.",
              },
              {
                title: "FUT (Follicular Unit Transplantation)",
                description: "Remoção de uma faixa de couro cabeludo para obtenção de folículos.",
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
              <AccordionTrigger>Quanto tempo leva para ver os resultados?</AccordionTrigger>
              <AccordionContent>
                Os resultados iniciais começam a ser visíveis após 3 a 4 meses, com resultados completos geralmente
                observados entre 12 a 18 meses após o procedimento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O procedimento é doloroso?</AccordionTrigger>
              <AccordionContent>
                O transplante capilar é realizado sob anestesia local, minimizando o desconforto durante o procedimento.
                Após a cirurgia, pode haver um leve desconforto que é facilmente controlado com medicação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Os resultados são permanentes?</AccordionTrigger>
              <AccordionContent>
                Sim, os folículos transplantados são geneticamente resistentes à queda e continuarão a crescer por toda
                a vida. No entanto, é importante notar que o processo natural de envelhecimento pode afetar os cabelos
                não transplantados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para recuperar seus cabelos?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Transplante Capilar hoje mesmo!</p>
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

