import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HarmonizacaoFacial() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Harmonização Facial</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
              alt="Harmonização Facial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que é Harmonização Facial?</h2>
            <p className="text-gray-700 mb-6">
              A harmonização facial é um conjunto de procedimentos estéticos que visa equilibrar e realçar os traços do
              rosto, proporcionando uma aparência mais harmoniosa e jovial. Utilizamos técnicas avançadas e produtos de
              alta qualidade para garantir resultados naturais e duradouros.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Correção de assimetrias faciais</li>
              <li>Suavização de linhas de expressão</li>
              <li>Aumento de volume em áreas específicas</li>
              <li>Melhora do contorno facial</li>
              <li>Rejuvenescimento da aparência</li>
            </ul>
            <Button
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
              onClick={() => window.open("https://wa.me/5547992865256", "_blank")}
            >
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

