import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CursoEndolaser() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Curso de Endolaser (Corporal e Facial)</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Curso de Endolaser"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre o Curso</h2>
            <p className="text-gray-700 mb-6">
              O curso de Endolaser oferece uma formação abrangente sobre o uso desta tecnologia avançada para
              tratamentos corporais e faciais. Aprenda a utilizar o laser de forma segura e eficaz para proporcionar
              resultados excepcionais aos seus pacientes.
            </p>
            <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Princípios do Endolaser e sua aplicação em estética</li>
              <li>Protocolos para tratamentos corporais e faciais</li>
              <li>Técnicas de aplicação seguras e eficazes</li>
              <li>Cuidados pré e pós-procedimento</li>
              <li>Combinação com outros tratamentos estéticos</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Informações do Curso:</h3>
            <ul className="list-none text-gray-700 mb-6">
              <li>
                <strong>Duração:</strong> 20 horas
              </li>
              <li>
                <strong>Modalidade:</strong> Presencial com prática supervisionada
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

