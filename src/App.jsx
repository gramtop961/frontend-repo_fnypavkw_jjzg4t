import Header from './components/Header'
import SlidesPreview from './components/SlidesPreview'
import GeneratePPTX from './components/GeneratePPTX'
import Footer from './components/Footer'

const topic = 'Yoga - History and Advantages'

const slides = [
  {
    title: 'What Is Yoga?',
    bullets: [
      'A holistic practice uniting body, mind, and breath',
      'Combines postures (asanas), breathwork (pranayama), and meditation',
      'Rooted in ancient Indian philosophy',
      'Beyond fitness: a pathway to balance and self-awareness'
    ],
  },
  {
    title: 'Origins and Early Roots',
    bullets: [
      'Archaeological hints from Indus Valley (c. 2500–1500 BCE)',
      'Early concepts in Vedas and Upanishads',
      'Aim: discipline of mind and senses',
      'Spiritual context: contemplation and liberation (moksha)'
    ],
  },
  {
    title: 'Classical Yoga — Patanjali',
    bullets: [
      'Yoga Sutras (c. 2nd century BCE–4th century CE)',
      'Eight Limbs (Ashtanga): ethical living, practice, and absorption',
      'Emphasis on concentration and meditation',
      'Foundation for many schools of practice today'
    ],
  },
  {
    title: 'Medieval and Hatha Traditions',
    bullets: [
      'Emergence of Hatha Yoga texts and techniques',
      'Focus on the body as a tool for transformation',
      'Kriyas, bandhas, mudras, pranayama refined',
      'Bridged spiritual aims with practical methods'
    ],
  },
  {
    title: 'Modern Revival and Global Spread',
    bullets: [
      'Teachers like T. Krishnamacharya, B.K.S. Iyengar, Pattabhi Jois',
      '20th-century popularization through classes and media',
      'Adapted for wellness, sport, and therapy',
      'Now practiced by millions worldwide'
    ],
  },
  {
    title: 'Physical Advantages',
    bullets: [
      'Improves flexibility, mobility, and posture',
      'Builds functional strength and joint stability',
      'Supports balance and coordination',
      'May reduce risk of injury and chronic pain'
    ],
  },
  {
    title: 'Mental and Emotional Benefits',
    bullets: [
      'Downregulates stress response; calms the nervous system',
      'Boosts focus, clarity, and emotional resilience',
      'Mindfulness practices reduce rumination',
      'Better sleep and overall mood'
    ],
  },
  {
    title: 'Breath and Nervous System',
    bullets: [
      'Pranayama balances sympathetic/parasympathetic activity',
      'Breath as a bridge between body and mind',
      'Technique variety: lengthening, ratios, retention',
      'Helps manage anxiety and energy levels'
    ],
  },
  {
    title: 'Lifestyle and Community',
    bullets: [
      'Ethical precepts encourage compassion and discipline',
      'Cultivates self-care habits and mindful living',
      'Supportive communities enhance adherence',
      'Accessible modifications for all bodies'
    ],
  },
  {
    title: 'Getting Started Safely',
    bullets: [
      'Begin gradually; focus on alignment and breath',
      'Consult a professional if you have conditions',
      'Choose a style and teacher that suits your needs',
      'Consistency matters more than intensity'
    ],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900">
      <Header />
      <SlidesPreview slides={slides} />
      <GeneratePPTX slides={slides} topic={topic} />
      <Footer />
    </div>
  )
}

export default App
