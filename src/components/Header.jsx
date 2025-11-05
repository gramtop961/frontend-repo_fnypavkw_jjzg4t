import { Lotus } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-pink-50 to-blue-100/60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5">
            <Lotus className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Yoga: History and Advantages
            </h1>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-600">
              Instantly generate a polished 10-slide presentation covering yoga’s origins, evolution, and real-world benefits for body and mind.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
