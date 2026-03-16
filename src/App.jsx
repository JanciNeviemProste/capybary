import { useState } from 'react'

const facts = [
  {
    id: 1,
    emoji: '🌊',
    title: 'Milujú vodu',
    text: 'Kapibare sú vynikajúci plavci a potápači. Môžu zostať pod vodou až 5 minút! Ich nohy sú čiastočne plávkové.',
    color: 'from-blue-100 to-cyan-100',
    border: 'border-blue-200',
  },
  {
    id: 2,
    emoji: '🌿',
    title: 'Vegetariáni',
    text: 'Živia sa výhradne rastlinami – trávou, vodnými rastlinami, kôrou a ovocím. Ich zuby rastú celý život!',
    color: 'from-green-100 to-emerald-100',
    border: 'border-green-200',
  },
  {
    id: 3,
    emoji: '👨‍👩‍👧‍👦',
    title: 'Spoločenské zvieratá',
    text: 'Žijú v skupinách po 10–20 jedincov. Sú veľmi priateľské – dokonca si nechajú sadnúť vtáky, opice aj mačky!',
    color: 'from-yellow-100 to-amber-100',
    border: 'border-yellow-200',
  },
  {
    id: 4,
    emoji: '📏',
    title: 'Najväčší hlodavec',
    text: 'Kapibary sú najväčšie hlodavce na svete. Môžu dosiahnuť hmotnosť až 65 kg a dĺžku 130 cm!',
    color: 'from-orange-100 to-amber-100',
    border: 'border-orange-200',
  },
  {
    id: 5,
    emoji: '🌡️',
    title: 'Termoregulácia',
    text: 'Váľajú sa v bahne, aby sa ochladili – podobne ako prasiatka. Bahno ich tiež chráni pred hmyzom.',
    color: 'from-brown-100 to-amber-50',
    border: 'border-amber-200',
    colorFallback: 'from-amber-50 to-orange-100',
  },
  {
    id: 6,
    emoji: '🎶',
    title: 'Komunikujú zvukmi',
    text: 'Vydávajú rôzne zvuky – klikanie, hvízdanie, štekot aj mňaukanie. Každý zvuk má iný význam!',
    color: 'from-purple-100 to-pink-100',
    border: 'border-purple-200',
  },
]

const gallery = [
  {
    id: 1,
    label: 'Kapibara pri vode',
    gradient: 'from-cyan-300 via-blue-400 to-teal-500',
    emoji: '🦫',
    desc: 'Šťastná kapibara si vychutnáva bazénik',
  },
  {
    id: 2,
    label: 'Priateľská kapibara',
    gradient: 'from-green-300 via-emerald-400 to-lime-400',
    emoji: '🦫',
    desc: 'Kamarátka s vtáčikmi na chrbte',
  },
  {
    id: 3,
    label: 'Rodinka kapibar',
    gradient: 'from-amber-300 via-orange-400 to-yellow-400',
    emoji: '🦫',
    desc: 'Celá rodinná skupinka',
  },
  {
    id: 4,
    label: 'Kapibara v bahne',
    gradient: 'from-brown-400 via-amber-500 to-orange-400',
    emoji: '🦫',
    desc: 'Wellness deň v bahennom kúpeli',
    gradientFallback: 'from-amber-400 via-orange-500 to-yellow-500',
  },
]

function CapybaraSVG({ size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 200 150"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="100" cy="95" rx="65" ry="42" fill="#c4956a" />
      {/* Head */}
      <ellipse cx="148" cy="72" rx="38" ry="32" fill="#c4956a" />
      {/* Nose bump */}
      <ellipse cx="180" cy="76" rx="14" ry="10" fill="#b5825a" />
      {/* Eye */}
      <circle cx="162" cy="62" r="5" fill="#2d1a0e" />
      <circle cx="163.5" cy="60.5" r="1.5" fill="white" />
      {/* Nostril */}
      <ellipse cx="187" cy="78" rx="3" ry="2" fill="#8a5c3a" />
      {/* Ear */}
      <ellipse cx="148" cy="44" rx="10" ry="7" fill="#b5825a" />
      {/* Legs */}
      <rect x="50" y="125" width="18" height="20" rx="6" fill="#b5825a" />
      <rect x="78" y="125" width="18" height="20" rx="6" fill="#b5825a" />
      <rect x="105" y="125" width="18" height="20" rx="6" fill="#b5825a" />
      <rect x="133" y="125" width="18" height="20" rx="6" fill="#b5825a" />
      {/* Smile */}
      <path d="M 175 82 Q 182 88 189 82" stroke="#8a5c3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Cheek blush */}
      <ellipse cx="155" cy="74" rx="8" ry="5" fill="#e88c8c" opacity="0.4" />
    </svg>
  )
}

function HeroCapybara() {
  return (
    <svg width="280" height="210" viewBox="0 0 280 210" aria-label="Roztomilá kapibara" role="img">
      {/* Water ripples */}
      <ellipse cx="140" cy="185" rx="120" ry="18" fill="#93c5fd" opacity="0.5" />
      <ellipse cx="140" cy="185" rx="90" ry="12" fill="#60a5fa" opacity="0.4" />
      {/* Body in water */}
      <ellipse cx="140" cy="150" rx="80" ry="48" fill="#c4956a" />
      {/* Water line */}
      <rect x="20" y="165" width="240" height="40" rx="4" fill="#bfdbfe" opacity="0.6" />
      {/* Head */}
      <ellipse cx="210" cy="118" rx="52" ry="44" fill="#c4956a" />
      {/* Snout */}
      <ellipse cx="254" cy="126" rx="18" ry="13" fill="#b5825a" />
      {/* Eyes */}
      <circle cx="228" cy="106" r="8" fill="#2d1a0e" />
      <circle cx="230" cy="104" r="2.5" fill="white" />
      {/* Nostril */}
      <ellipse cx="262" cy="129" rx="4" ry="3" fill="#8a5c3a" />
      {/* Ear */}
      <ellipse cx="206" cy="80" rx="14" ry="10" fill="#b5825a" />
      {/* Smile */}
      <path d="M 248 134 Q 258 142 268 134" stroke="#8a5c3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="220" cy="118" rx="12" ry="8" fill="#e88c8c" opacity="0.45" />
      {/* Little bird on head */}
      <ellipse cx="185" cy="86" rx="10" ry="7" fill="#fcd34d" />
      <circle cx="191" cy="82" r="5" fill="#fbbf24" />
      <circle cx="193" cy="81" r="1.5" fill="#1c1917" />
      <path d="M 194 82 L 198 82" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sparkles */}
      <text x="30" y="60" fontSize="20" opacity="0.8">✨</text>
      <text x="240" y="55" fontSize="16" opacity="0.7">⭐</text>
      <text x="60" y="90" fontSize="14" opacity="0.6">💧</text>
    </svg>
  )
}

function GalleryCard({ item }) {
  return (
    <div className={`card-hover rounded-3xl overflow-hidden shadow-lg border-2 border-amber-200 cursor-pointer`}>
      <div className={`bg-gradient-to-br ${item.gradient || item.gradientFallback} h-48 flex flex-col items-center justify-center gap-3 relative`}>
        <span className="text-7xl drop-shadow-md" role="img" aria-label={item.label}>
          {item.emoji}
        </span>
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm py-2 px-3">
          <p className="text-white text-sm font-semibold text-center">{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

function FactCard({ fact }) {
  const [liked, setLiked] = useState(false)
  return (
    <article
      className={`fact-card rounded-3xl p-6 border-2 ${fact.border} bg-gradient-to-br ${fact.color || fact.colorFallback} shadow-md relative overflow-hidden`}
    >
      <div className="absolute top-3 right-3">
        <button
          onClick={() => setLiked(l => !l)}
          aria-label={liked ? 'Odstrániť z obľúbených' : 'Pridať do obľúbených'}
          className="text-2xl transition-transform hover:scale-125 active:scale-90"
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="text-4xl mb-3" role="img" aria-label={fact.title}>{fact.emoji}</div>
      <h3 className="text-lg font-bold text-amber-900 mb-2">{fact.title}</h3>
      <p className="text-amber-800 text-sm leading-relaxed">{fact.text}</p>
    </article>
  )
}

function App() {
  const [quizAnswer, setQuizAnswer] = useState(null)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fef9f0 0%, #fef3c7 50%, #fed7aa 100%)' }}>

      {/* Header */}
      <header className="text-center py-6 px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl wiggle-anim inline-block" role="img" aria-hidden="true">🌿</span>
          <span className="text-sm font-semibold text-amber-700 tracking-widest uppercase">Svet kapibar</span>
          <span className="text-3xl wiggle-anim inline-block" role="img" aria-hidden="true">🌿</span>
        </div>
        <nav aria-label="Hlavná navigácia">
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-amber-800">
            <li><a href="#o-kapibarkach" className="hover:text-amber-600 transition-colors">O kapibarkách</a></li>
            <li><a href="#fakty" className="hover:text-amber-600 transition-colors">Zaujímavosti</a></li>
            <li><a href="#galeria" className="hover:text-amber-600 transition-colors">Galéria</a></li>
            <li><a href="#kviz" className="hover:text-amber-600 transition-colors">Kvíz</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="text-center px-4 py-10" aria-labelledby="hero-title">
          <div className="float-anim inline-block mb-6">
            <HeroCapybara />
          </div>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            <span className="shimmer-text">Kapibary</span>
            <br />
            <span className="text-amber-900">sú najlepšie!</span>
          </h1>
          <p className="text-xl text-amber-800 max-w-xl mx-auto mb-8 leading-relaxed">
            Vitaj na najroztomilejšej stránke o kapibarkách na celom internete! 🦫✨
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#fakty"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 hover:shadow-xl"
            >
              Zistiť viac 🌿
            </a>
            <a
              href="#galeria"
              className="bg-white hover:bg-amber-50 text-amber-700 font-bold py-3 px-8 rounded-full shadow-lg border-2 border-amber-300 transition-all hover:scale-105 active:scale-95"
            >
              Galéria 🖼️
            </a>
          </div>
        </section>

        {/* About section */}
        <section id="o-kapibarkach" className="px-4 py-12 max-w-4xl mx-auto" aria-labelledby="about-title">
          <div className="bg-white/70 backdrop-blur rounded-3xl p-8 shadow-xl border-2 border-amber-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <CapybaraSVG size={160} className="drop-shadow-lg" />
              </div>
              <div className="text-left">
                <h2 id="about-title" className="text-3xl font-black text-amber-900 mb-4">
                  Čo je to kapibara? 🦫
                </h2>
                <p className="text-amber-800 leading-relaxed mb-4">
                  Kapibara (<em>Hydrochoerus hydrochaeris</em>) je <strong>najväčší hlodavec sveta</strong>.
                  Pochádza z Južnej Ameriky a žije v blízkosti riek, jazier a mokradí.
                  Svojím pokojným a priateľským správaním si získala srdcia ľudí po celom svete!
                </p>
                <p className="text-amber-800 leading-relaxed">
                  Kapibary sú známe tým, že sa <strong>kamarátia s každým</strong> – vtáky, opice,
                  kačice, mačky... Aj internet ich zbožňuje! 💕
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {['🌿 Bylinožravec', '🌊 Plavec', '🫂 Spoločenský', '🏆 Najväčší hlodavec'].map(tag => (
                    <span key={tag} className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facts grid */}
        <section id="fakty" className="px-4 py-12 max-w-5xl mx-auto" aria-labelledby="facts-title">
          <div className="text-center mb-10">
            <h2 id="facts-title" className="text-4xl font-black text-amber-900 mb-3">
              🌟 Zaujímavé fakty
            </h2>
            <p className="text-amber-700">Klikni na srdce, ak sa ti fakt páči!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map(fact => <FactCard key={fact.id} fact={fact} />)}
          </div>
        </section>

        {/* Gallery */}
        <section id="galeria" className="px-4 py-12 max-w-5xl mx-auto" aria-labelledby="gallery-title">
          <div className="text-center mb-10">
            <h2 id="gallery-title" className="text-4xl font-black text-amber-900 mb-3">
              🖼️ Galéria
            </h2>
            <p className="text-amber-700">Najroztomilejšie momenty kapibarek</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallery.map(item => <GalleryCard key={item.id} item={item} />)}
          </div>
          <div className="text-center mt-8">
            <div className="inline-block bg-white/70 rounded-2xl px-6 py-4 border border-amber-200 shadow">
              <p className="text-amber-800 font-medium">
                🦫 Vedel si, že kapibary sú jediné divoké zvieratá,
                ktoré sa nechajú použiť ako živé kreslá? 😄
              </p>
            </div>
          </div>
        </section>

        {/* Fun facts strip */}
        <section className="py-8 my-4 overflow-hidden" aria-label="Štatistiky">
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {[
              { num: '65 kg', label: 'Maximálna hmotnosť', emoji: '⚖️' },
              { num: '130 cm', label: 'Maximálna dĺžka', emoji: '📏' },
              { num: '5 min', label: 'Pod vodou', emoji: '🌊' },
              { num: '~10', label: 'V skupinke', emoji: '👨‍👩‍👧‍👦' },
              { num: '8 rokov', label: 'Vek v prírode', emoji: '🌿' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/80 rounded-2xl p-5 text-center shadow border border-amber-100 min-w-[130px]">
                <div className="text-2xl mb-1" role="img" aria-hidden="true">{stat.emoji}</div>
                <div className="text-3xl font-black text-amber-700">{stat.num}</div>
                <div className="text-xs text-amber-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz */}
        <section id="kviz" className="px-4 py-12 max-w-2xl mx-auto" aria-labelledby="quiz-title">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border-2 border-amber-200 text-center">
            <h2 id="quiz-title" className="text-3xl font-black text-amber-900 mb-2">
              🧠 Mini kvíz
            </h2>
            <p className="text-amber-700 mb-6">Otestuj svoje znalosti o kapibarkách!</p>
            <div className="bg-amber-50 rounded-2xl p-5 mb-6 border border-amber-200">
              <p className="text-lg font-bold text-amber-900">
                Koľko minút môže kapibara zostať pod vodou?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {['1 minútu', '5 minút', '10 minút', '30 sekúnd'].map((answer) => {
                const isCorrect = answer === '5 minút'
                const isSelected = quizAnswer === answer
                let cls = 'rounded-2xl py-3 px-4 font-semibold border-2 transition-all hover:scale-105 active:scale-95 cursor-pointer '
                if (!quizAnswer) {
                  cls += 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
                } else if (isSelected && isCorrect) {
                  cls += 'bg-green-100 border-green-400 text-green-800'
                } else if (isSelected && !isCorrect) {
                  cls += 'bg-red-100 border-red-400 text-red-800'
                } else if (!isSelected && isCorrect && quizAnswer) {
                  cls += 'bg-green-50 border-green-300 text-green-700'
                } else {
                  cls += 'bg-gray-50 border-gray-200 text-gray-500'
                }
                return (
                  <button
                    key={answer}
                    onClick={() => !quizAnswer && setQuizAnswer(answer)}
                    className={cls}
                    aria-pressed={isSelected}
                    disabled={!!quizAnswer}
                  >
                    {answer}
                  </button>
                )
              })}
            </div>
            {quizAnswer && (
              <div className={`rounded-2xl p-4 ${quizAnswer === '5 minút' ? 'bg-green-100 border-2 border-green-300' : 'bg-orange-100 border-2 border-orange-300'}`}>
                <p className="font-bold text-lg mb-1">
                  {quizAnswer === '5 minút' ? '🎉 Správne!' : '🤔 Takmer...'}
                </p>
                <p className="text-sm text-amber-800">
                  Kapibary môžu zostať pod vodou až <strong>5 minút</strong>! Sú úžasní plavci 🌊
                </p>
                <button
                  onClick={() => setQuizAnswer(null)}
                  className="mt-3 text-sm text-amber-600 underline hover:text-amber-800"
                >
                  Skúsiť znova
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Love banner */}
        <section className="text-center py-10 px-4" aria-label="Záver">
          <div className="max-w-xl mx-auto">
            <div className="text-6xl mb-4 pulse-heart inline-block" role="img" aria-label="Srdce">❤️</div>
            <h2 className="text-3xl font-black text-amber-900 mb-3">
              Kapibary milujem! 🦫
            </h2>
            <p className="text-amber-700 text-lg leading-relaxed">
              Kapibary nás učia, že byť priateľský, pokojný a rád vo vode
              je najlepší životný štýl. 🌿💕
            </p>
            <div className="mt-6 flex justify-center gap-2 text-4xl">
              {'🦫🌿💧🌟🦫'.split('').map((c, i) => (
                <span key={i} className="inline-block" style={{ animation: `float ${2.5 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} role="img" aria-hidden="true">{c}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-4 border-t border-amber-200 bg-white/50">
        <p className="text-amber-700 text-sm">
          Vytvorené s ❤️ pre všetkých milovníkov kapibarek • 2025
        </p>
        <p className="text-amber-500 text-xs mt-1">
          🦫 Všetky kapibary sú tu šťastné a v bezpečí 🦫
        </p>
      </footer>

    </div>
  )
}

export default App
