import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CursoTemporalFaceLifting() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600&text=Temporal+Face+Lifting"
          alt="Curso de Temporal Face Lifting"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curso de Temporal Face Lifting</h1>
          <p className="text-xl md:text-2xl mb-8">
            Aprenda técnicas avançadas de rejuvenescimento facial não cirúrgico
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
                title: "Técnica Inovadora",
                description: "Aprenda uma abordagem única para lifting facial",
              },
              {
                icon: Clock,
                title: "Resultados Imediatos",
                description: "Ofereça tratamentos com efeitos visíveis rapidamente",
              },
              { icon: Users, title: "Diferencial no Mercado", description: "Destaque-se com uma técnica exclusiva" },
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
                  "Anatomia da região temporal e facial",
                  "Técnica de Temporal Face Lifting passo a passo",
                  "Seleção de pacientes e indicações",
                  "Cuidados pré e pós-procedimento",
                  "Combinação com outros tratamentos de rejuvenescimento",
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
                src="/placeholder.svg?height=400&width=600&text=Temporal+Face+Lifting"
                alt="Temporal Face Lifting"
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
              { icon: Clock, title: "Duração", description: "16 horas" },
              { icon: Calendar, title: "Modalidade", description: "Presencial com demonstração prática" },
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
          <h2 className="text-3xl font-bold text-center mb-12">Conheça o Instrutor</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/placeholder.svg?height=200&width=200&text=Dr.+Bruno+Marques"
              alt="Dr. Bruno Marques"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Dr. Bruno Marques</h3>
              <p className="text-gray-600 mb-4">
                Especialista em Medicina Estética e pioneiro na técnica de Temporal Face Lifting no Brasil, o Dr. Bruno
                Marques traz sua vasta experiência e conhecimento para este curso exclusivo.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Mais de 15 anos de experiência em rejuvenescimento facial</li>
                <li>Desenvolvedor de técnicas inovadoras em lifting não cirúrgico</li>
                <li>Palestrante internacional em congressos de estética avançada</li>
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
                name: "Dra. Carla Mendonça",
                testimonial:
                  "O curso de Temporal Face Lifting mudou completamente minha abordagem em rejuvenescimento facial. Resultados incríveis!",
              },
              {
                name: "Dr. Rafael Souza",
                testimonial:
                  "A expertise do Dr. Bruno e a prática hands-on fizeram toda a diferença. Recomendo a todos os profissionais da área.",
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
              <AccordionTrigger>Qual é a duração do efeito do Temporal Face Lifting?</AccordionTrigger>
              <AccordionContent>
                Os resultados do Temporal Face Lifting podem durar de 12 a 18 meses, dependendo da idade do paciente,
                qualidade da pele e estilo de vida.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O curso inclui prática em modelos reais?</AccordionTrigger>
              <AccordionContent>
                O curso inclui demonstrações ao vivo e prática em modelos anatômicos. Por questões éticas, não
                realizamos procedimentos em modelos reais durante o treinamento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quais são os pré-requisitos para participar do curso?</AccordionTrigger>
              <AccordionContent>
                O curso é destinado a médicos com especialização em dermatologia, cirurgia plástica ou medicina
                estética. Experiência prévia com procedimentos injetáveis é recomendada, mas não obrigatória.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscricao" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar seus tratamentos de rejuvenescimento?</h2>
          <p className="text-xl mb-8">Inscreva-se agora e domine a técnica de Temporal Face Lifting!</p>
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

