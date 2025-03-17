import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Botox() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Botox</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/botox.png" alt="Botox" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que é Botox?</h2>
            <p className="text-gray-700 mb-6">
              O Botox, ou toxina botulínica, é um tratamento estético não cirúrgico que suaviza linhas de expressão e
              rugas, proporcionando uma aparência mais jovem e descansada. É amplamente utilizado para tratar rugas na
              testa, entre as sobrancelhas e ao redor dos olhos.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Redução de rugas e linhas de expressão</li>
              <li>Prevenção do surgimento de novas rugas</li>
              <li>Rejuvenescimento facial</li>
              <li>Resultados rápidos e duradouros</li>
              <li>Procedimento minimamente invasivo</li>
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

