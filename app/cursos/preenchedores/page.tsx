import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CursoPreenchedores() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600&text=Preenchedores"
          alt="Curso de Preenchedores"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curso de Preenchedores (Facial e Corporal)</h1>
          <p className="text-xl md:text-2xl mb-8">
            Domine as técnicas avançadas de preenchimento para resultados naturais e duradouros
          </p>
          <Link href="#inscricao" passHref>
            <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
              Inscreva-se Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que fazer este curso?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Técnicas Avançadas",
                description: "Aprenda as mais recentes técnicas de preenchimento",
              },
              {
                icon: Clock,
                title: "Resultados Duradouros",
                description: "Ofereça tratamentos com efeitos prolongados",
              },
              { icon: Users, title: "Versatilidade", description: "Domine aplicações faciais e corporais" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes do Curso Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que você vai aprender</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  "Tipos de preenchedores e suas indicações",
                  "Anatomia facial e corporal aplicada",
                  "Técnicas de aplicação seguras e eficazes",
                  "Protocolos para diferentes áreas de tratamento",
                  "Manejo de complicações e efeitos adversos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-gold mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Preenchedores"
                alt="Aplicação de Preenchedores"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Curso Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informações do Curso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Duração", description: "24 horas" },
              { icon: Calendar, title: "Modalidade", description: "Presencial com prática em modelos" },
              { icon: Users, title: "Vagas Limitadas", description: "Turmas reduzidas" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instrutor Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça a Instrutora</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/placeholder.svg?height=200&width=200&text=Dra.+Ana+Paula+Silva"
              alt="Dra. Ana Paula Silva"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Dra. Ana Paula Silva</h3>
              <p className="text-gray-600 mb-4">
                Especialista em Dermatologia e Medicina Estética, a Dra. Ana Paula Silva é referência nacional em
                técnicas de preenchimento. Com mais de 15 anos de experiência, ela traz para o curso as abordagens mais
                modernas e seguras do mercado.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Membro da Sociedade Brasileira de Dermatologia</li>
                <li>Professora convidada em congressos internacionais</li>
                <li>Desenvolvedora de protocolos exclusivos de preenchimento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos alunos dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Marcelo Rodrigues",
                testimonial:
                  "O curso superou todas as minhas expectativas. A Dra. Ana Paula é uma excelente instrutora!",
              },
              {
                name: "Dra. Fernanda Lima",
                testimonial: "Aprendi técnicas que revolucionaram minha prática clínica. Altamente recomendado!",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{item.testimonial}"</p>
                  <p className="font-semibold text-gold">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quais tipos de preenchedores são abordados no curso?</AccordionTrigger>
              <AccordionContent>
                O curso aborda uma ampla gama de preenchedores, incluindo ácido hialurônico, hidroxiapatita de cálcio e
                ácido poli-L-láctico. Você aprenderá sobre as características específicas de cada tipo e suas aplicações
                ideais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O curso inclui prática em pacientes reais?</AccordionTrigger>
              <AccordionContent>
                O curso inclui demonstrações ao vivo e prática em modelos anatômicos. Por questões éticas e legais, não
                realizamos procedimentos em pacientes reais durante o treinamento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Qual é a duração média dos resultados dos preenchedores?</AccordionTrigger>
              <AccordionContent>
                A duração dos resultados varia dependendo do tipo de preenchedor utilizado, da área tratada e do
                metabolismo individual do paciente. Em geral, os resultados podem durar de 6 meses a 2 anos. Durante o
                curso, você aprenderá sobre as expectativas de duração para cada tipo de preenchedor e área de
                tratamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscricao" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para se tornar um expert em preenchedores?</h2>
          <p className="text-xl mb-8">Inscreva-se agora e eleve sua prática clínica a outro nível!</p>
          <Link href="https://wa.me/5547992865256" passHref>
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
              Garantir Minha Vaga
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

