import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Botox() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/botox.png" alt="Botox" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Botox</h1>
          <p className="text-xl md:text-2xl mb-8">Suavize linhas de expressão e rejuvenesça sua pele</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Botox?</h2>
              <p className="text-gray-600 mb-6">
                O Botox, ou toxina botulínica, é um tratamento estético não cirúrgico que suaviza linhas de expressão e
                rugas, proporcionando uma aparência mais jovem e descansada. É amplamente utilizado para tratar rugas na
                testa, entre as sobrancelhas e ao redor dos olhos.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Redução de rugas e linhas de expressão",
                  "Prevenção do surgimento de novas rugas",
                  "Rejuvenescimento facial",
                  "Resultados rápidos e duradouros",
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
              <Image src="/botox.png" alt="Botox" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Impressionantes</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src={`/placeholder.svg?height=200&width=200&text=Antes+${item}`}
                            alt={`Antes ${item}`}
                            width={200}
                            height={200}
                            className="rounded-lg"
                          />
                          <Image
                            src={`/placeholder.svg?height=200&width=200&text=Depois+${item}`}
                            alt={`Depois ${item}`}
                            width={200}
                            height={200}
                            className="rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Mendes",
                comment: "O tratamento com Botox mudou minha vida! Minha pele está mais jovem e radiante.",
              },
              {
                name: "Roberto Alves",
                comment: "Resultados incríveis e naturais. A equipe do Dr. Bruno Marques é excepcional!",
              },
              {
                name: "Patrícia Lima",
                comment: "Adorei o resultado! As rugas sumiram e minha autoestima melhorou muito.",
              },
            ].map((feedback, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold" fill="#C4A052" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{feedback.comment}"</p>
                  <p className="font-semibold">{feedback.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fotos do Espaço */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nosso Espaço</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Image
                key={item}
                src={`/placeholder.svg?height=300&width=400&text=Espaço+${item}`}
                alt={`Espaço ${item}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso tratamento com Botox?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experiência Comprovada",
                description: "Anos de experiência em aplicações de Botox.",
              },
              {
                title: "Produtos de Qualidade",
                description: "Utilizamos apenas Botox de marcas reconhecidas e aprovadas.",
              },
              {
                title: "Técnica Avançada",
                description: "Aplicação precisa para resultados naturais.",
              },
              {
                title: "Consulta Personalizada",
                description: "Avaliação individual para atender suas necessidades específicas.",
              },
              {
                title: "Ambiente Seguro",
                description: "Clínica equipada com as mais recentes tecnologias.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte contínuo para garantir sua satisfação.",
              },
            ].map((vantagem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                  <p className="text-gray-600">{vantagem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para rejuvenescer sua pele?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Botox hoje mesmo!</p>
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

