import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'

export default function GeneratePPTX({ slides, topic }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate_pptx`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, slides })
      })
      if (!res.ok) throw new Error('Failed to generate presentation')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${topic.replaceAll(' ', '_')}.pptx`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl bg-white/80 backdrop-blur p-6 ring-1 ring-black/5 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ready to export?</h3>
            <p className="text-sm text-gray-600">One click to download a .pptx file you can open in PowerPoint, Keynote, or Google Slides.</p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow hover:bg-purple-700 disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {loading ? 'Generating…' : 'Download .pptx'}
          </button>
        </div>
      </div>
    </section>
  )
}
