import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Skinbooster() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Skinbooster</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/images.jpeg" alt="Skinbooster" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que é Skinbooster?</h2>
            <p className="text-gray-700 mb-6">
              Skinbooster é um tratamento de hidratação profunda da pele que utiliza ácido hialurônico de baixo peso
              molecular. Ele melhora a qualidade da pele, proporcionando hidratação, luminosidade e elasticidade,
              resultando em uma aparência mais jovem e saudável.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Hidratação profunda da pele</li>
              <li>Melhora da textura e elasticidade</li>
              <li>Redução de linhas finas</li>
              <li>Aumento da luminosidade da pele</li>
              <li>Estimulação da produção de colágeno</li>
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

