import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CursoBioestimuladores() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Curso de Bioestimuladores</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Bioestimulador-de-Colageno-1-1024x768.jpg"
              alt="Curso de Bioestimuladores"
              layout="fill"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre o Curso</h2>
            <p className="text-gray-700 mb-6">
              Nosso curso de Bioestimuladores oferece uma formação completa sobre o uso destes poderosos agentes de
              rejuvenescimento. Aprenda as técnicas mais avançadas para estimular a produção de colágeno e melhorar a
              qualidade da pele de seus pacientes.
            </p>
            <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Tipos de bioestimuladores e suas indicações</li>
              <li>Anatomia facial e pontos de aplicação</li>
              <li>Técnicas de aplicação seguras e eficazes</li>
              <li>Protocolos de tratamento personalizados</li>
              <li>Combinação com outros procedimentos estéticos</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Informações do Curso:</h3>
            <ul className="list-none text-gray-700 mb-6">
              <li>
                <strong>Duração:</strong> 16 horas
              </li>
              <li>
                <strong>Modalidade:</strong> Presencial
              </li>
              <li>
                <strong>Certificação:</strong> Certificado de conclusão emitido pelo Instituto Bruno Marques
              </li>
            </ul>
            <Button
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
              onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
            >
              Inscreva-se Agora
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

