import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PreenchimentoLabial() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Preenchimento Labial</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/preenchimento_labial_tratamento.jpg"
              alt="Preenchimento Labial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que é Preenchimento Labial?</h2>
            <p className="text-gray-700 mb-6">
              O preenchimento labial é um procedimento estético que visa aumentar o volume e definir o contorno dos
              lábios, proporcionando um sorriso mais harmonioso e atraente. Utilizamos produtos seguros e técnicas
              modernas para garantir resultados naturais e personalizados.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Aumento do volume labial</li>
              <li>Correção de assimetrias</li>
              <li>Definição do contorno dos lábios</li>
              <li>Suavização de linhas ao redor da boca</li>
              <li>Hidratação e rejuvenescimento dos lábios</li>
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

