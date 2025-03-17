import Image from "next/image"

interface CourseHeaderProps {
  title: string
  subtitle: string
  imageUrl: string
}

export function CourseHeader({ title, subtitle, imageUrl }: CourseHeaderProps) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden mb-12">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 space-y-4 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  )
}

