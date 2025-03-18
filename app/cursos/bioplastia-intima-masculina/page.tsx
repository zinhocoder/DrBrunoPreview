"use client"

import Layout from "@/components/layout"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  Calendar,
  Users,
  Award,
  Star,
  Play,
  Clock,
  Shield,
  BookOpen,
  GraduationCap,
  Beaker,
  PenTool,
  ClipboardCheck,
  ShieldAlert,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function CursoBioplastiaIntimaMasculina() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <Layout>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_2978.png?height=800&width=1600&text=Curso+de+Bioplastia+Íntima+Masculina"
            alt="Curso de Bioplastia Íntima Masculina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Curso de Bioplastia Íntima Masculina</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Domine as técnicas avançadas de aumento peniano e transforme sua carreira
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
              onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
            >
              Inscreva-se Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white text-lg px-8"
              onClick={() => {
                document.querySelector("#video")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Assista ao Vídeo
            </Button>
          </div>
        </div>
      </section>

      {/* VSL Video Section */}
      <section id="video" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Descubra Como Dominar a Técnica Mais Lucrativa da Atualidade</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Assista ao vídeo e entenda por que a Bioplastia Íntima Masculina é o procedimento mais procurado e como
              você pode se tornar referência nesta especialidade
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-gold">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=720&width=1280&text=Vídeo+do+Curso"
                    alt="Thumbnail do vídeo do curso"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <Button
                    className="relative z-10 w-20 h-20 rounded-full bg-gold hover:bg-[#D4AF37] flex items-center justify-center"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="w-10 h-10 text-white" fill="white" />
                  </Button>
                  <div className="relative z-10 mt-6 text-center">
                    <p className="text-2xl font-bold">Clique para assistir</p>
                    <p className="text-lg text-gray-300">Duração: 15 minutos</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="/placeholder.svg?height=720&width=1280&text=Vídeo+em+Reprodução"
                    title="Vídeo do Curso de Bioplastia Íntima Masculina"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
                onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
              >
                Quero Me Inscrever Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que fazer este curso?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os benefícios de se especializar em uma das técnicas mais rentáveis do mercado estético
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12 text-gold" />,
                title: "Conhecimento Exclusivo",
                description:
                  "Aprenda técnicas avançadas diretamente com o Dr. Bruno Marques, referência nacional em bioplastia íntima.",
              },
              {
                icon: <Award className="w-12 h-12 text-gold" />,
                title: "Diferencial no Mercado",
                description:
                  "Destaque-se da concorrência oferecendo um procedimento de alta demanda e poucos especialistas qualificados.",
              },
              {
                icon: <Shield className="w-12 h-12 text-gold" />,
                title: "Segurança e Eficácia",
                description:
                  "Domine protocolos seguros e eficazes, minimizando riscos e garantindo resultados excepcionais.",
              },
              {
                icon: <Users className="w-12 h-12 text-gold" />,
                title: "Networking Estratégico",
                description: "Conecte-se com profissionais de elite e amplie sua rede de contatos no mercado estético.",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-gold" />,
                title: "Material Completo",
                description:
                  "Receba apostilas detalhadas, vídeos complementares e acesso a uma plataforma exclusiva de aprendizado.",
              },
              {
                icon: <Clock className="w-12 h-12 text-gold" />,
                title: "Retorno Imediato",
                description: "Comece a aplicar as técnicas e obter retorno financeiro logo após a conclusão do curso.",
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

      {/* Conteúdo do Curso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que você vai aprender</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo completo e prático para dominar a técnica de Bioplastia Íntima Masculina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div>
              <Image
                src="/IMG_2978.png?height=600&width=800&text=Conteúdo+do+Curso"
                alt="Conteúdo do Curso de Bioplastia Íntima Masculina"
                width={500}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: <BookOpen className="w-8 h-8 text-gold" />,
                    title: "Módulo 1: Anatomia Aplicada",
                    description:
                      "Estudo detalhado da anatomia da região genital masculina, com foco nas estruturas relevantes para o procedimento.",
                  },
                  {
                    icon: <Beaker className="w-8 h-8 text-gold" />,
                    title: "Módulo 2: Materiais e Produtos",
                    description:
                      "Análise comparativa dos diferentes preenchedores e materiais utilizados, suas indicações e contraindicações.",
                  },
                  {
                    icon: <PenTool className="w-8 h-8 text-gold" />,
                    title: "Módulo 3: Técnicas de Aplicação",
                    description:
                      "Demonstração passo a passo das técnicas de aplicação, incluindo posicionamento, profundidade e volumes ideais.",
                  },
                  {
                    icon: <ClipboardCheck className="w-8 h-8 text-gold" />,
                    title: "Módulo 4: Avaliação e Seleção de Pacientes",
                    description:
                      "Critérios para avaliação e seleção adequada de pacientes, incluindo aspectos físicos e psicológicos.",
                  },
                  {
                    icon: <ShieldAlert className="w-8 h-8 text-gold" />,
                    title: "Módulo 5: Manejo de Complicações",
                    description: "Identificação, prevenção e tratamento de possíveis complicações e efeitos adversos.",
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-gold" />,
                    title: "Módulo 6: Marketing e Gestão",
                    description:
                      "Estratégias de marketing ético e gestão de pacientes para este nicho específico de mercado.",
                  },
                ].map((module, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-gray-50 p-3 rounded-full">{module.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Curso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Informações do Curso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo o que você precisa saber para participar desta formação exclusiva
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12 text-gold" />,
                title: "Data e Duração",
                description:
                  "Curso intensivo de 20 horas, distribuídas em 2 dias. Próxima turma: Consulte disponibilidade.",
              },
              {
                icon: <Users className="w-12 h-12 text-gold" />,
                title: "Público-Alvo",
                description:
                  "Médicos com registro no CRM. Recomendado para dermatologistas, cirurgiões plásticos e médicos estéticos.",
              },
              {
                icon: <Award className="w-12 h-12 text-gold" />,
                title: "Certificação",
                description:
                  "Certificado reconhecido pelo Instituto Bruno Marques, referência nacional em procedimentos estéticos avançados.",
              },
            ].map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Investimento</h3>
                <p className="text-gray-600 mb-4">
                  Valor do curso: <span className="line-through">R$ 12.000,00</span>
                </p>
                <p className="text-3xl font-bold text-gold mb-4">R$ 9.997,00</p>
                <p className="text-gray-600 mb-6">Parcelamento em até 12x no cartão de crédito</p>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700 font-semibold">O investimento inclui:</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600">Material didático completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600">Coffee break e almoço nos dias do curso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600">Acesso à plataforma online por 1 ano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600">Grupo exclusivo de suporte pós-curso</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
                  onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
                >
                  Garantir Minha Vaga
                </Button>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-4 text-center">Vagas Limitadas</h4>
                  <p className="text-gray-600 mb-4 text-center">
                    Para garantir a qualidade do ensino e atenção personalizada, o curso possui número limitado de
                    vagas.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-center font-semibold">Próxima Turma:</p>
                    <p className="text-center text-gray-600">Consulte disponibilidade</p>
                  </div>
                  <p className="text-sm text-gray-500 text-center">*As vagas são preenchidas por ordem de inscrição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Bruno Marques Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dr. Bruno Marques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Referência nacional em Bioplastia Íntima Masculina e seu mentor neste curso exclusivo
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
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Seu Mentor e Especialista</h3>
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
                "Meu objetivo é compartilhar todo o conhecimento que adquiri ao longo dos anos, formando profissionais
                de excelência que possam oferecer resultados excepcionais e seguros aos seus pacientes."
              </p>

              <Button
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
                onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
              >
                Aprenda com Dr. Bruno Marques
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que dizem nossos alunos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos de profissionais que já realizaram o curso e transformaram sua carreira
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Carlos M.",
                specialty: "Cirurgião Plástico",
                testimonial:
                  "O curso superou todas as minhas expectativas. A didática do Dr. Bruno é excepcional e as técnicas ensinadas são realmente diferenciadas. Implementei o procedimento em minha clínica e os resultados têm sido extraordinários.",
                rating: 5,
              },
              {
                name: "Dra. Patrícia S.",
                specialty: "Dermatologista",
                testimonial:
                  "Investir neste curso foi a melhor decisão que tomei para minha carreira. O Dr. Bruno compartilha conhecimentos que não encontramos em nenhum outro lugar. Já recuperei o investimento em menos de um mês após o curso.",
                rating: 5,
              },
              {
                name: "Dr. Ricardo A.",
                specialty: "Médico Estético",
                testimonial:
                  "A parte prática do curso é sensacional! Saí com total confiança para aplicar as técnicas. O suporte pós-curso também é um diferencial importante. Recomendo a todos os colegas que desejam se destacar no mercado.",
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
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.specialty}</p>
                    </div>
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
              Tire suas dúvidas sobre o Curso de Bioplastia Íntima Masculina
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Quem pode participar do curso?",
                  answer:
                    "O curso é destinado exclusivamente a médicos com registro ativo no CRM. É especialmente recomendado para dermatologistas, cirurgiões plásticos e médicos estéticos que desejam ampliar seu portfólio de procedimentos.",
                },
                {
                  question: "O curso inclui prática hands-on?",
                  answer:
                    "Sim, o curso possui uma parte teórica e uma parte prática. Na parte prática, os alunos terão a oportunidade de treinar em modelos anatômicos sob supervisão direta do Dr. Bruno Marques.",
                },
                {
                  question: "Receberei certificado ao final do curso?",
                  answer:
                    "Sim, todos os participantes que completarem o curso receberão um certificado emitido pelo Instituto Bruno Marques, reconhecido no mercado de medicina estética.",
                },
                {
                  question: "Existe suporte pós-curso?",
                  answer:
                    "Sim, todos os alunos têm acesso a um grupo exclusivo de suporte por 1 ano após o curso, onde podem tirar dúvidas diretamente com o Dr. Bruno Marques e sua equipe.",
                },
                {
                  question: "Qual o retorno financeiro esperado após o curso?",
                  answer:
                    "O retorno financeiro varia de acordo com a região de atuação e o público-alvo do profissional. No entanto, a Bioplastia Íntima Masculina é um dos procedimentos mais rentáveis do mercado estético atual, com potencial de retorno do investimento do curso em poucos atendimentos.",
                },
                {
                  question: "Posso parcelar o valor do curso?",
                  answer:
                    "Sim, oferecemos parcelamento em até 12x no cartão de crédito. Também há opções de pagamento à vista com desconto especial.",
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

      {/* Final CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-3">Transforme sua carreira agora</h2>
          <p className="text-2xl font-semibold text-gold mb-6">Vagas limitadas para a próxima turma!</p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de aprender com o maior especialista em Bioplastia Íntima Masculina do Brasil
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
            onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
          >
            Garantir Minha Vaga
          </Button>
        </div>
      </section>
    </Layout>
  )
}

