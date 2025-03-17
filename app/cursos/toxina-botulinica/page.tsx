import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ToxinaBotulinica() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/botox.png"
          alt="Curso de Toxina Botulínica"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curso de Toxina Botulínica</h1>
          <p className="text-xl md:text-2xl mb-8">
            Domine as técnicas mais avançadas em aplicação de toxina botulínica
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
                description: "Aprenda as mais recentes técnicas de aplicação",
              },
              {
                icon: Clock,
                title: "Resultados Rápidos",
                description: "Ofereça resultados imediatos aos seus pacientes",
              },
              { icon: Users, title: "Networking", description: "Conecte-se com profissionais da área" },
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
                  "Anatomia facial aplicada",
                  "Mecanismo de ação da toxina botulínica",
                  "Técnicas de aplicação seguras e eficazes",
                  "Protocolos de tratamento personalizados",
                  "Manejo de possíveis complicações",
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
                src="/botox.png"
                alt="Aplicação de Toxina Botulínica"
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
              { icon: Calendar, title: "Modalidade", description: "Presencial" },
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
                Especialista em Medicina Estética com mais de 15 anos de experiência, o Dr. Bruno Marques é reconhecido
                nacionalmente por sua expertise em procedimentos minimamente invasivos e técnicas avançadas de
                rejuvenescimento facial.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Membro da Sociedade Brasileira de Medicina Estética</li>
                <li>Palestrante em congressos internacionais</li>
                <li>Autor de diversos artigos científicos na área</li>
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
                name: "Dra. Ana Paula",
                testimonial: "O curso superou todas as minhas expectativas. A didática do Dr. Bruno é excelente!",
              },
              {
                name: "Dr. Carlos Eduardo",
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
              <AccordionTrigger>O curso é indicado para iniciantes?</AccordionTrigger>
              <AccordionContent>
                Sim, o curso é adequado tanto para iniciantes quanto para profissionais que desejam aprimorar suas
                técnicas. A abordagem abrange desde os conceitos básicos até técnicas avançadas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Há prática hands-on durante o curso?</AccordionTrigger>
              <AccordionContent>
                Sim, o curso inclui sessões práticas onde os alunos podem aplicar as técnicas aprendidas em modelos
                anatômicos, sob supervisão dos instrutores.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Recebo algum material de apoio?</AccordionTrigger>
              <AccordionContent>
                Sim, todos os alunos recebem um material didático completo, incluindo apostilas, guias de procedimentos
                e acesso a uma plataforma online com conteúdo complementar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscricao" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para elevar sua carreira?</h2>
          <p className="text-xl mb-8">Inscreva-se agora e domine as técnicas de Toxina Botulínica!</p>
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

