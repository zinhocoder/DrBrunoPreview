"use client"

import Layout from "@/components/layout"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ChevronRight, Clock, Shield, Award, ThumbsUp, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function BioplastiaIntimaMasculina() {
  const [showResults, setShowResults] = useState(false)

  return (
    <Layout>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/photo_2023-05-12_15-13-08.png?height=800&width=1600&text=Bioplastia+Íntima+Masculina"
            alt="Bioplastia Íntima Masculina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Bioplastia Íntima Masculina</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Aumento peniano seguro e eficaz com técnicas avançadas e resultados comprovados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
              onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
            >
              Agende sua Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white text-lg px-8"
              onClick={() => {
                document.querySelector("#beneficios")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios da Bioplastia Íntima Masculina</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens deste procedimento minimamente invasivo que pode transformar sua vida íntima e
              autoestima
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ThumbsUp className="w-12 h-12 text-gold" />,
                title: "Aumento do Diâmetro",
                description:
                  "Ganho significativo de medidas penianas, proporcionando maior satisfação durante as relações.",
              },
              {
                icon: <Shield className="w-12 h-12 text-gold" />,
                title: "Procedimento Seguro",
                description:
                  "Técnica minimamente invasiva realizada com produtos biocompatíveis e aprovados pela ANVISA.",
              },
              {
                icon: <Clock className="w-12 h-12 text-gold" />,
                title: "Recuperação Rápida",
                description: "Retorno às atividades normais em poucos dias, com resultados imediatos e duradouros.",
              },
              {
                icon: <Award className="w-12 h-12 text-gold" />,
                title: "Resultados Naturais",
                description: "Aparência e sensação completamente naturais, sem comprometer a funcionalidade.",
              },
              {
                icon: <Star className="w-12 h-12 text-gold" />,
                title: "Aumento da Autoestima",
                description: "Maior confiança e satisfação na vida íntima, melhorando a qualidade de vida.",
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-gold" />,
                title: "Sem Internação",
                description: "Procedimento ambulatorial que não requer hospitalização ou anestesia geral.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona o Procedimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda o passo a passo da Bioplastia Íntima Masculina realizada no Instituto Bruno Marques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div>
              <Image
                src="/IMG_2979.png?height=600&width=800&text=Procedimento+Bioplastia+Íntima"
                alt="Procedimento de Bioplastia Íntima Masculina"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Avaliação Inicial",
                    description:
                      "Consulta detalhada para entender suas expectativas e avaliar a viabilidade do procedimento para o seu caso específico.",
                  },
                  {
                    number: "02",
                    title: "Planejamento Personalizado",
                    description:
                      "Desenvolvimento de um plano de tratamento individualizado, considerando suas características anatômicas e objetivos desejados.",
                  },
                  {
                    number: "03",
                    title: "Procedimento",
                    description:
                      "Aplicação de preenchedores para aumento peniano, destravamento peniano e espessamento dérmico, além da redução de gordura localizada. Procedimento seguro, minimamente invasivo.",
                  },
                  {
                    number: "04",
                    title: "Recuperação",
                    description:
                      "Período de recuperação rápido, com orientações específicas para garantir os melhores resultados e minimizar desconfortos.",
                  },
                  {
                    number: "05",
                    title: "Acompanhamento",
                    description:
                      "Consultas de acompanhamento para monitorar os resultados e garantir sua satisfação com o procedimento.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Antes e Depois</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira resultados que só o Instituto Bruno Marques garante com técnicas avançadas e os melhores produtos
              do mercado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden">
              {!showResults ? (
                <div className="relative">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src="/aumento-peniano-beneficios-harmonizacao-intima.jpg?height=600&width=1000&text=Resultados+Bioplastia+Íntima"
                      alt="Resultados Bioplastia Íntima Masculina (Imagem borrada)"
                      fill
                      className="object-cover blur-lg"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black bg-opacity-50">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Clique no botão abaixo se quiser conferir nossos resultados e ter acesso ao antes e depois.
                    </h3>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
                      onClick={() => setShowResults(true)}
                    >
                      Ver Resultados
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-center">Antes</h3>
                    <Image
                      src="/placeholder.svg?height=400&width=500&text=Antes"
                      alt="Antes do procedimento"
                      width={500}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-center">Depois</h3>
                    <Image
                      src="/placeholder.svg?height=400&width=500&text=Depois"
                      alt="Depois do procedimento"
                      width={500}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 mb-6">
                Confira alguns exemplos de casos que atendemos e obtiveram resultados incríveis!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
                onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
              >
                Agende sua Avaliação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos pacientes dizem sobre sua experiência e resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "R.S., 24 anos",
                testimonial:
                  "Sempre tive insegurança com relação ao tamanho. Após a bioplastia, minha autoconfiança aumentou significativamente e minha vida íntima melhorou muito.",
                rating: 5,
              },
              {
                name: "M.A., 35 anos",
                testimonial:
                  "Procedimento sem dor e sem cortes, com resultados imediatos. O Dr. Bruno e sua equipe garantem total profissionalismo e discrição em cada etapa do tratamento.",
                rating: 5,
              },
              {
                name: "J.P., 48 anos",
                testimonial:
                  "Após pesquisar muito, escolhi o Instituto Bruno Marques e não me arrependo. Os resultados superaram minhas expectativas e a recuperação foi rápida.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.testimonial}"</p>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre a Bioplastia Íntima Masculina
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "O procedimento é doloroso?",
                  answer:
                    "O procedimento é realizado com anestesia local, o que minimiza significativamente o desconforto. A maioria dos pacientes relata apenas um leve incômodo durante e após o procedimento, que pode ser facilmente controlado com medicação.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer:
                    "Os resultados da Bioplastia Íntima Masculina são duradouros, podendo permanecer por vários anos. No entanto, a longevidade dos resultados varia de acordo com cada corpo, metabolismo e estilo de vida. Para manter os efeitos desejados, o ideal é realizar manutenções periódicas, sendo recomendado um intervalo de aproximadamente 12 meses.",
                },
                {
                  question: "O procedimento afeta a função sexual?",
                  answer:
                    "A Bioplastia Íntima Masculina não afeta negativamente a função sexual. Na verdade, muitos pacientes relatam maior confiança e satisfação após o procedimento, o que pode contribuir para uma vida sexual mais prazerosa.",
                },
                {
                  question: "Quanto tempo leva para recuperação?",
                  answer:
                    "A recuperação é relativamente rápida. A maioria dos pacientes pode retornar às atividades normais em 2-3 dias, evitando apenas atividades físicas intensas. Em relação à atividade sexual, recomenda-se uma abstinência de 13 a 15 dias, conforme orientação médica.",
                },
                {
                  question: "Quais são os riscos do procedimento?",
                  answer:
                    "Como qualquer procedimento médico, existem riscos, embora sejam mínimos quando realizado por profissionais qualificados. Possíveis efeitos colaterais incluem inchaço temporário e hematomas. Complicações mais sérias são raras quando o procedimento é realizado por especialistas experientes.",
                },
                {
                  question: "Quem pode realizar o procedimento?",
                  answer:
                    "Homens adultos saudáveis que desejam aumentar o diâmetro peniano são candidatos potenciais. Uma avaliação médica prévia é essencial para determinar se o procedimento é adequado para cada caso específico.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 from-[#C4A052] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transforme sua vida íntima hoje mesmo</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma consulta de avaliação com nossos especialistas e descubra como a Bioplastia Íntima Masculina pode
            aumentar sua autoconfiança e satisfação
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
            onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
          >
            Agende sua Consulta
          </Button>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o Instituto Bruno Marques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os diferenciais que fazem do Instituto Bruno Marques referência em Bioplastia Íntima Masculina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Equipe Especializada",
                  description:
                    "Profissionais altamente qualificados e com vasta experiência em procedimentos íntimos masculinos.",
                },
                {
                  title: "Tecnologia de Ponta",
                  description:
                    "Utilizamos os mais avançados materiais e técnicas disponíveis no mercado para garantir resultados superiores.",
                },
                {
                  title: "Ambiente Discreto",
                  description:
                    "Privacidade e confidencialidade total durante todo o processo, desde a consulta até o pós-procedimento.",
                },
                {
                  title: "Atendimento Personalizado",
                  description:
                    "Cada paciente recebe um plano de tratamento individualizado, adaptado às suas necessidades específicas.",
                },
              ].map((differential, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{differential.title}</h3>
                    <p className="text-gray-600">{differential.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="/FullSizeRender.png?height=600&width=800&text=Instituto+Bruno+Marques"
                alt="Instituto Bruno Marques"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conheça o Especialista</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Bruno Marques é referência nacional em Bioplastia Íntima Masculina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8749-_1_.png-iS12ReMrJtba5Nihnhs3b5hU1iBnr2.jpeg"
                alt="Dr. Bruno Marques"
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Dr. Bruno Marques</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Especialista em Medicina Estética Avançada e pioneiro em técnicas de Bioplastia Íntima Masculina no
                Brasil, o Dr. Bruno Marques traz sua vasta experiência e conhecimento para oferecer os melhores
                resultados aos seus pacientes. Ele é médico e fisioterapeuta formado, especializado em estética
                corporal e facial, além de ser especialista em harmonização íntima masculina.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span className="text-gray-700">Mais de 15 anos de experiência em procedimentos estéticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span className="text-gray-700">Formação internacional em técnicas avançadas de bioplastia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span className="text-gray-700">Milhares de procedimentos realizados com sucesso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span className="text-gray-700">
                    Palestrante e instrutor em congressos nacionais e internacionais
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span className="text-gray-700">Desenvolvedor de técnicas exclusivas para resultados superiores</span>
                </div>
              </div>

              <p className="text-gray-600 italic mb-6">
                "Meu compromisso é proporcionar aos meus pacientes não apenas resultados estéticos excepcionais, mas
                também devolver a autoconfiança e melhorar sua qualidade de vida."
              </p>

              <Button
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
                onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
              >
                Agende uma Consulta com Dr. Bruno
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-3">Insatisfeito com o que vê?</h2>
          <p className="text-2xl font-semibold text-gold mb-6">A solução que você procura está aqui!</p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos transformar sua confiança e satisfação
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
            onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
          >
            Agende sua Consulta
          </Button>
        </div>
      </section>
    </Layout>
  )
}

