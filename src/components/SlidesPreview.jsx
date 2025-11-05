function SlideCard({ index, title, bullets }) {
  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 hover:shadow-md transition overflow-hidden">
      <div className="border-b border-gray-100 px-5 py-3 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest text-purple-600/80">SLIDE {index + 1}</span>
        <span className="text-[10px] uppercase text-gray-400">Preview</span>
      </div>
      <div className="px-5 py-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
          {bullets.slice(0, 4).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SlidesPreview({ slides }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Slide Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((s, idx) => (
            <SlideCard key={idx} index={idx} title={s.title} bullets={s.bullets} />)
          )}
        </div>
      </div>
    </section>
  )
}
