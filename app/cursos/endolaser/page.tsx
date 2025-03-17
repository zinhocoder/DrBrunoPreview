import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CursoEndolaser() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600&text=Endolaser"
          alt="Curso de Endolaser"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curso de Endolaser (Corporal e Facial)</h1>
          <p className="text-xl md:text-2xl mb-8">Domine a tecnologia avançada para tratamentos corporais e faciais</p>
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
                title: "Tecnologia de Ponta",
                description: "Aprenda a utilizar o que há de mais moderno em tratamentos a laser",
              },
              {
                icon: Clock,
                title: "Versatilidade",
                description: "Domine técnicas para tratamentos faciais e corporais",
              },
              {
                icon: Users,
                title: "Alta Demanda",
                description: "Atenda a uma crescente procura por procedimentos não invasivos",
              },
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
                  "Princípios do Endolaser e sua aplicação em estética",
                  "Protocolos para tratamentos corporais e faciais",
                  "Técnicas de aplicação seguras e eficazes",
                  "Cuidados pré e pós-procedimento",
                  "Combinação com outros tratamentos estéticos",
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
                src="/placeholder.svg?height=400&width=600&text=Endolaser"
                alt="Aplicação de Endolaser"
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
              { icon: Clock, title: "Duração", description: "20 horas" },
              { icon: Calendar, title: "Modalidade", description: "Presencial com prática supervisionada" },
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
              src="/placeholder.svg?height=200&width=200&text=Dr.+André+Silva"
              alt="Dr. André Silva"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Dr. André Silva</h3>
              <p className="text-gray-600 mb-4">
                Especialista em Medicina Estética e Laserterapia, o Dr. André Silva é pioneiro no uso do Endolaser no
                Brasil. Com mais de 12 anos de experiência, ele traz para o curso as técnicas mais inovadoras e seguras
                do mercado.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Membro da Sociedade Brasileira de Laser em Medicina e Cirurgia</li>
                <li>Palestrante internacional em congressos de estética avançada</li>
                <li>Desenvolvedor de protocolos exclusivos de Endolaser</li>
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
                name: "Dra. Juliana Mendes",
                testimonial: "O curso de Endolaser superou minhas expectativas. A didática do Dr. André é excepcional!",
              },
              {
                name: "Dr. Ricardo Almeida",
                testimonial: "Aprendi técnicas que revolucionaram minha prática clínica. Recomendo a todos os colegas!",
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
              <AccordionTrigger>Quais são as principais aplicações do Endolaser?</AccordionTrigger>
              <AccordionContent>
                O Endolaser é utilizado principalmente para tratamentos de flacidez cutânea, redução de gordura
                localizada, tratamento de celulite e rejuvenescimento facial.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O curso inclui prática com equipamentos de Endolaser?</AccordionTrigger>
              <AccordionContent>
                Sim, o curso inclui sessões práticas onde os alunos podem utilizar equipamentos de Endolaser em modelos
                anatômicos, sob supervisão dos instrutores.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>É necessário ter experiência prévia com lasers?</AccordionTrigger>
              <AccordionContent>
                Embora a experiência prévia com lasers seja benéfica, não é um pré-requisito. O curso é estruturado para
                atender tanto iniciantes quanto profissionais experientes na área de estética.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscricao" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para dominar o Endolaser?</h2>
          <p className="text-xl mb-8">Inscreva-se agora e revolucione seus tratamentos estéticos!</p>
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

