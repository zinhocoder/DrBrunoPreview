import Layout from "@/components/layout"
import { CourseHeader } from "@/components/course-header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function CursoBioremodeladores() {
  return (
    <Layout>
      <CourseHeader
        title="Curso de Bioremodeladores (PDRN, Exossomos e Profhilo)"
        subtitle="Domine as técnicas mais avançadas em rejuvenescimento e remodelação da pele"
        imageUrl="/placeholder.svg?height=400&width=600&text=Bioremodeladores"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Descrição do Curso */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre o Curso</h2>
            <p className="text-gray-700 mb-6">
              O curso de Bioremodeladores oferece uma formação avançada sobre o uso de PDRN, Exossomos e Profhilo para
              rejuvenescimento e remodelação da pele. Aprenda as técnicas mais inovadoras para melhorar a qualidade da
              pele e proporcionar resultados naturais aos seus pacientes.
            </p>
            <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Princípios dos bioremodeladores e seus mecanismos de ação</li>
              <li>Indicações e contraindicações de cada produto</li>
              <li>Técnicas de aplicação para diferentes áreas do rosto e corpo</li>
              <li>Protocolos de tratamento personalizados</li>
              <li>Combinação com outros procedimentos estéticos</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Informações do Curso:</h3>
            <ul className="list-none text-gray-700 mb-6">
              <li>
                <strong>Duração:</strong> 16 horas
              </li>
              <li>
                <strong>Modalidade:</strong> Presencial com demonstração prática
              </li>
              <li>
                <strong>Certificação:</strong> Certificado de conclusão emitido pelo Instituto Bruno Marques
              </li>
            </ul>
            <Link href="https://wa.me/5547992865256" passHref>
              <Button className="bg-gold text-white hover:bg-[#D4AF37] transition-colors duration-300 text-lg px-8 py-3">
                Inscreva-se Agora
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600&text=Bioremodeladores"
              alt="Curso de Bioremodeladores"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Informações sobre o Instrutor */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Conheça o Instrutor</h2>
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center p-6">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Dra.+Luciana+Costa"
                alt="Dra. Luciana Costa"
                width={200}
                height={200}
                className="rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Dra. Luciana Costa</h3>
                <p className="text-gray-700 mb-4">
                  Especialista em Dermatologia e Medicina Estética, a Dra. Luciana Costa é pioneira no uso de
                  bioremodeladores no Brasil. Com mais de 15 anos de experiência, ela traz para o curso as técnicas mais
                  inovadoras e eficazes do mercado.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Membro da Sociedade Brasileira de Dermatologia</li>
                  <li>Palestrante internacional em congressos de medicina estética</li>
                  <li>Pesquisadora em novos protocolos de rejuvenescimento</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Depoimentos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">O que nossos alunos dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dra. Mariana Silva",
                testimonial:
                  "O curso da Dra. Luciana abriu meus olhos para o potencial dos bioremodeladores. As técnicas aprendidas revolucionaram minha prática clínica!",
              },
              {
                name: "Dr. André Oliveira",
                testimonial: "Excelente conteúdo e abordagem prática. A Dra. Luciana é uma instrutora excepcional!",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{item.testimonial}"</p>
                  <p className="font-semibold text-gold">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual é a diferença entre PDRN, Exossomos e Profhilo?</AccordionTrigger>
              <AccordionContent>
                PDRN, Exossomos e Profhilo são diferentes tipos de bioremodeladores com mecanismos de ação distintos.
                PDRN estimula a regeneração celular, Exossomos atuam na comunicação intercelular, e Profhilo é um
                complexo de ácido hialurônico que promove bioestimulação e hidratação profunda. O curso abordará
                detalhadamente as características e aplicações de cada um.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais são os resultados esperados com o uso de bioremodeladores?</AccordionTrigger>
              <AccordionContent>
                Os bioremodeladores podem proporcionar melhora na qualidade da pele, aumento da hidratação, estimulação
                da produção de colágeno e elastina, e um efeito geral de rejuvenescimento. Os resultados variam de
                acordo com o produto utilizado e as características individuais do paciente. Durante o curso, você
                aprenderá a avaliar e prever os resultados para cada tipo de tratamento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>O curso inclui prática hands-on?</AccordionTrigger>
              <AccordionContent>
                Sim, o curso inclui demonstrações práticas e oportunidades para os participantes praticarem as técnicas
                de aplicação em modelos anatômicos sob supervisão. Isso permite que você ganhe confiança e habilidade
                nas técnicas antes de aplicá-las em pacientes reais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Pronto para dominar as técnicas de bioremodelação?</h2>
          <p className="text-xl text-gray-600 mb-8">Inscreva-se agora e transforme sua prática em medicina estética!</p>
          <Link href="https://wa.me/5547992865256" passHref>
            <Button className="bg-gold text-white hover:bg-[#D4AF37] transition-colors duration-300 text-lg px-12 py-4">
              Garantir Minha Vaga
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

