
const courses = [
  {
    number: "01",
    title: "Forex Foundations",
    description:
      "Understand the currency market, currency pairs, pips, spreads, leverage and risk before placing your first trade.",
    tag: "START HERE",
    duration: "Beginner friendly",
  },
  {
    number: "02",
    title: "Market Structure",
    description:
      "Learn to read price movement, identify structure and build a more organised approach to market analysis.",
    tag: "TECHNICAL ANALYSIS",
    duration: "Intermediate",
  },
  {
    number: "03",
    title: "Liquidity & Execution",
    description:
      "Explore liquidity concepts, trading setups, entries, stop losses and the importance of disciplined execution.",
    tag: "PRICE ACTION",
    duration: "Skill development",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₦25,000",
    period: "/ month",
    description: "Build a stronger foundation.",
    features: [
      "Forex learning materials",
      "Beginner trading lessons",
      "Market structure fundamentals",
      "Learning support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₦75,000",
    period: "/  months",
    description: "Develop your trading process.",
    features: [
      "Everything in Starter",
      "Structured mentorship",
      "Advanced market analysis",
      "Trading review sessions",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "₦150,000",
    period: "/  months",
    description: "A longer-term learning journey.",
    features: [
      "Everything in Professional",
      "Extended mentorship period",
      "Deeper strategy development",
      "Progress review sessions",
    ],
    featured: false,
  },
];

const gold = "#B68A3A";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFEFB] text-[#51432F]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

        :root {
          --gold: #B68A3A;
          --gold-light: #E6D2A7;
          --ink: #51432F;
          --cream: #FFFEFB;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .gold-text {
          background: linear-gradient(110deg, #9A6D22, #D2AD64 55%, #A77A30);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .site-width { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          color: #9B7535; font-size: 10px; letter-spacing: .22em;
          font-weight: 700; text-transform: uppercase;
        }
        .eyebrow::before { content: ''; width: 25px; height: 1px; background: #C5A05A; }
        .gold-button {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          padding: 14px 21px; background: #B68A3A; color: white;
          text-decoration: none; font-size: 12px; font-weight: 700;
          border: 1px solid #B68A3A; transition: .25s ease;
        }
        .gold-button:hover { background: #9D742B; border-color: #9D742B; transform: translateY(-2px); }
        .outline-button {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 21px; border: 1px solid #D9C59F; color: #7B633D;
          text-decoration: none; font-size: 12px; font-weight: 700; transition: .25s ease;
        }
        .outline-button:hover { background: #F8F1E4; }
        .nav-link { color: #786A54; font-size: 11px; text-decoration: none; transition: color .2s; }
        .nav-link:hover { color: #B68A3A; }
        .hero-grid {
          display: grid; grid-template-columns: 1.08fr .92fr;
          align-items: center; gap: 50px;
        }
        .hero-art {
          position: relative; min-height: 410px; display: grid;
          place-items: center; isolation: isolate;
        }
        .hero-art::before {
          content: ''; position: absolute; width: 340px; height: 340px;
          border-radius: 50%; background: radial-gradient(circle, #F6EBD4 0%, #FCF8EF 55%, transparent 72%);
          z-index: -2;
        }
        .chart-frame {
          position: relative; width: 100%; max-width: 445px; padding: 25px;
          background: rgba(255,255,255,.8); border: 1px solid #E8DCC4;
          box-shadow: 0 25px 80px rgba(153,116,47,.10);
        }
        .chart-grid {
          position: absolute; inset: 0; opacity: .5; pointer-events: none;
          background-image: linear-gradient(#EDE4D4 1px, transparent 1px), linear-gradient(90deg, #EDE4D4 1px, transparent 1px);
          background-size: 38px 38px;
        }
        .metric {
          padding: 23px 28px; border-right: 1px solid #EDE3D1;
        }
        .metric:last-child { border-right: 0; }
        .section-pad { padding-block: 100px; }
        .course-card {
          background: white; border: 1px solid #EDE4D4; padding: 28px;
          transition: .25s ease; min-height: 285px;
        }
        .course-card:hover { transform: translateY(-5px); border-color: #C7A566; box-shadow: 0 18px 45px rgba(151,112,43,.08); }
        .plan-card {
          padding: 32px 28px; border: 1px solid #E8DDC9; background: #fff;
          position: relative; display: flex; flex-direction: column;
        }
        .plan-featured {
          border: 1px solid #B68A3A;
          box-shadow: 0 18px 55px rgba(182,138,58,.12);
          background: linear-gradient(160deg, #FFFFFF, #FFFCF5);
        }
        .plan-featured::before {
          content: 'RECOMMENDED'; position: absolute; top: -12px; left: 50%;
          transform: translateX(-50%); padding: 6px 13px; white-space: nowrap;
          color: white; background: #B68A3A; font-size: 9px; letter-spacing: .14em;
        }
        .book-panel {
          position: relative; min-height: 390px; display: grid; place-items: center;
          background: radial-gradient(ellipse at center, #F1E4C9 0%, #FAF5EA 50%, #FFFEFB 78%);
          overflow: hidden;
        }
        .book-cover {
          width: 205px; min-height: 280px; padding: 27px 22px;
          background: linear-gradient(140deg, #FFFDF7, #F3E5C8);
          border: 1px solid #D0B477; box-shadow: 15px 20px 30px rgba(103,77,31,.17);
          transform: rotate(-5deg); position: relative;
        }
        .book-cover::after {
          content: ''; position: absolute; inset: 8px; border: 1px solid #D5BC87; pointer-events: none;
        }
        .faq-item { padding: 21px 0; border-bottom: 1px solid #EDE4D4; }
        .footer-link { color: #EDE0C5; text-decoration: none; font-size: 12px; }
        .footer-link:hover { color: white; }
        @media (max-width: 800px) {
          .site-width { width: min(100% - 32px, 600px); }
          .hero-grid { grid-template-columns: 1fr; gap: 15px; }
          .hero-art { min-height: 330px; }
          .section-pad { padding-block: 70px; }
          .metric { padding: 16px 10px; }
          .metric-value { font-size: 20px !important; }
          .desktop-nav { display: none !important; }
          .course-grid, .plan-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
          .plan-featured { margin-top: 10px; }
          .hero-title { font-size: clamp(43px, 11vw, 66px) !important; }
          .section-title { font-size: clamp(34px, 8vw, 48px) !important; }
          .book-layout { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#EEE4D2] bg-[#FFFEFB]/95 backdrop-blur-md">
        <div className="site-width flex min-h-[76px] items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <span className="serif flex h-10 w-10 items-center justify-center border border-[#C7A566] text-xl text-[#A77A30]">K</span>
            <span className="leading-tight">
              <span className="serif block text-[18px] tracking-[.13em] text-[#8F6A2E]">KAMALL</span>
              <span className="block text-[9px] font-semibold tracking-[.29em] text-[#9A8A70]">FX PRO · ACADEMY</span>
            </span>
          </a>

          <nav className="desktop-nav flex items-center gap-7">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#academy">Academy</a>
            <a className="nav-link" href="#mentorship">Mentorship</a>
            <a className="nav-link" href="#book">Trading Book</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/login" className="nav-link hidden sm:block">Sign in</a>
            <a href="/register" className="gold-button !px-4 !py-3">Join the Academy <span>↗</span></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative border-b border-[#F0E7D8]">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[38%] bg-gradient-to-l from-[#FBF5E9] to-transparent" />
        <div className="site-width hero-grid relative py-16 md:py-20">
          <div className="py-4">
            <span className="eyebrow">THE ART OF TRADING WELL</span>
            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.24em] text-[#A08A66]">Education · Strategy · Discipline</p>
            <h1 className="serif hero-title mt-5 max-w-[620px] text-[68px] leading-[1.08] tracking-[-.045em] text-[#51432F]">
              Trade with <span className="gold-text italic">clarity.</span>
              <br />
              Grow with <span className="gold-text italic">discipline.</span>
            </h1>
            <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-[#877962]">
              A more thoughtful approach to forex education. Build your understanding of the market, develop your process and learn to protect your capital.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#academy" className="gold-button">Explore the Academy <span>↗</span></a>
              <a href="#mentorship" className="outline-button">Discover Mentorship</a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-[11px] text-[#98876B]">
              <span className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FFFEFB] bg-[#F1E4CB] text-[10px] text-[#8B6B35]">K</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FFFEFB] bg-[#E8D7B4] text-[10px] text-[#8B6B35]">FX</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FFFEFB] bg-[#F7EEDB] text-[10px] text-[#8B6B35]">+</span>
              </span>
              <span>Learn with purpose. Trade responsibly.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="absolute right-[5%] top-[7%] serif text-[13px] italic text-[#C2A36B]">A refined trading journey</div>
            <div className="chart-frame">
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#9A825B]">MARKET STUDY</p>
                  <p className="serif mt-1 text-[24px] text-[#665239]">Price in perspective.</p>
                </div>
                <span className="border border-[#E5D4B1] px-2 py-1 text-[9px] tracking-wider text-[#A27B36]">EDUCATION</span>
              </div>
              <div className="relative mt-7 h-[205px] overflow-hidden border border-[#EFE5D4] bg-[#FFFEFB]">
                <div className="chart-grid" />
                <svg viewBox="0 0 400 205" className="relative z-10 h-full w-full" role="img" aria-label="Decorative gold candlestick chart">
                  <defs>
                    <linearGradient id="candleGold" x1="0" x2="1">
                      <stop offset="0%" stopColor="#B68A3A" />
                      <stop offset="100%" stopColor="#D9BD81" />
                    </linearGradient>
                  </defs>
                  <path d="M15 162 C52 152, 58 132, 89 142 S130 111, 154 120 S192 89, 218 104 S261 65, 286 81 S327 38, 375 28" fill="none" stroke="#C7A15B" strokeWidth="1.7" strokeDasharray="4 4" opacity=".8" />
                  {[
                    [27,132,24,35],[57,117,29,40],[88,124,25,34],[119,94,31,46],
                    [151,103,24,37],[182,79,32,48],[214,88,23,36],[245,61,34,48],
                    [277,68,23,37],[307,45,30,43],[338,36,24,36],[365,26,25,40]
                  ].map(([x,y,w,h], i) => (
                    <g key={i}>
                      <line x1={x+w/2} y1={y-12} x2={x+w/2} y2={y+h+12} stroke="#B68A3A" strokeWidth="1.3" />
                      <rect x={x} y={y} width={w} height={h} fill={i%3===0 ? "#E6D2A7" : "url(#candleGold)"} opacity={i%3===0 ? ".8" : ".92"} />
                    </g>
                  ))}
                  <path d="M10 180 L390 180" stroke="#E7DCC8" strokeWidth="1" />
                </svg>
              </div>
              <div className="relative z-10 mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[.15em] text-[#A18A66]">OUR PHILOSOPHY</p>
                  <p className="serif mt-1 text-[17px] italic text-[#766143]">Knowledge before execution.</p>
                </div>
                <span className="serif text-3xl text-[#C2A15F]">✳</span>
              </div>
            </div>
            <span className="absolute bottom-[5%] left-[1%] serif text-[13px] italic text-[#B29662]">Learn. Refine. Repeat.</span>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-b border-[#EDE3D1] bg-white">
        <div className="site-width grid grid-cols-3 py-5">
          {[
            ["01", "Education first"],
            ["02", "Risk-aware thinking"],
            ["03", "Disciplined practice"],
          ].map(([n, label]) => (
            <div key={n} className="flex items-center justify-center gap-3 py-2">
              <span className="serif text-[18px] italic text-[#B68A3A]">{n}</span>
              <span className="text-center text-[10px] font-semibold tracking-[.08em] text-[#88775D] sm:text-[11px]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="section-pad">
        <div className="site-width">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[560px]">
              <span className="eyebrow">THE ACADEMY</span>
              <h2 className="serif section-title mt-5 text-[47px] leading-[1.14] tracking-[-.03em] text-[#51432F]">
                Knowledge is the <span className="gold-text italic">real edge.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-[12px] leading-6 text-[#8B7B64]">
              Learn the foundations, understand price action and build a process that puts risk management first.
            </p>
          </div>

          <div className="course-grid mt-11 grid grid-cols-3 gap-5">
            {courses.map((course) => (
              <article key={course.number} className="course-card">
                <div className="flex items-start justify-between">
                  <span className="serif text-[35px] text-[#D3BD8E]">{course.number}</span>
                  <span className="border border-[#E9DCC2] px-2 py-1 text-[8px] font-bold tracking-[.12em] text-[#A07A36]">{course.tag}</span>
                </div>
                <h3 className="serif mt-7 text-[24px] text-[#665239]">{course.title}</h3>
                <p className="mt-3 min-h-[78px] text-[12px] leading-6 text-[#8C7D66]">{course.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#F0E7D9] pt-4">
                  <span className="text-[10px] text-[#9B896E]">{course.duration}</span>
                  <a href="/register" className="text-[11px] font-bold text-[#A77A30] no-underline">Start learning ↗</a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[10px] leading-5 text-[#9B8B74]">Course materials and availability can be expanded as the academy is developed.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-[#EEE3D0] bg-[#FAF5EA]">
        <div className="site-width grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="serif mt-5 text-[38px] leading-tight text-[#5C4A31]">A calmer way to approach the markets.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["01", "Understand", "Learn the language of the market before risking capital."],
              ["02", "Prepare", "Build a clear plan with defined risk and entry criteria."],
              ["03", "Review", "Study your decisions and improve through consistent practice."],
            ].map(([n, title, body]) => (
              <div key={n} className="border-t border-[#C9AA6B] pt-4">
                <span className="text-[10px] tracking-[.18em] text-[#B68A3A]">{n}</span>
                <h3 className="serif mt-3 text-[22px] text-[#6B5536]">{title}</h3>
                <p className="mt-2 text-[11px] leading-6 text-[#8D7D64]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="section-pad">
        <div className="site-width">
          <div className="mx-auto max-w-[650px] text-center">
            <span className="eyebrow">PERSONAL DEVELOPMENT</span>
            <h2 className="serif section-title mt-5 text-[47px] leading-tight tracking-[-.03em] text-[#51432F]">
              Find your rhythm. <span className="gold-text italic">Build your method.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[490px] text-[12px] leading-6 text-[#8B7B64]">
              Structured learning options designed to support your development. Choose a period that fits your learning goals.
            </p>
          </div>

          <div className="plan-grid mt-14 grid grid-cols-3 gap-5">
            {plans.map((plan) => (
              <article key={plan.name} className={`plan-card ${plan.featured ? "plan-featured" : ""}`}>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#A08045]">{plan.name}</p>
                <p className="serif mt-4 text-[30px] tracking-[-.03em] text-[#57472F]">{plan.price}</p>
                <p className="mt-1 text-[10px] text-[#99896F]">{plan.period}</p>
                <p className="mt-5 border-t border-[#EEE4D3] pt-5 text-[12px] text-[#827159]">{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-4 pl-0">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex list-none gap-3 text-[11px] leading-5 text-[#7F7059]">
                      <span className="text-[#B68A3A]">✳</span>{feature}
                    </li>
                  ))}
                </ul>
                <a href={`/checkout?item=${plan.name.toLowerCase()}`} className={plan.featured ? "gold-button mt-8 w-full" : "outline-button mt-8 w-full"}>
                  View this plan <span>↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-[10px] leading-5 text-[#9B8B74]">
            Prices shown are proposed placeholders and should be confirmed before accepting payments. Mentorship does not guarantee trading profits.
          </p>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="border-y border-[#EEE4D3] bg-[#FBF7EF]">
        <div className="site-width book-layout grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="book-panel">
            <div className="absolute left-[8%] top-[9%] text-[9px] font-semibold uppercase tracking-[.23em] text-[#B39A68]">THE LEARNING LIBRARY</div>
            <div className="book-cover flex flex-col items-center justify-center text-center">
              <span className="text-[8px] tracking-[.25em] text-[#A27A32]">KAMALL FX PRO</span>
              <div className="my-6 h-px w-12 bg-[#C3A15D]" />
              <h3 className="serif text-[27px] leading-tight text-[#6D542E]">The Forex<br />Beginner's<br /><i>Guide</i></h3>
              <p className="mt-5 text-[8px] uppercase tracking-[.17em] text-[#947647]">Learn the fundamentals</p>
              <div className="mt-6 h-px w-12 bg-[#C3A15D]" />
              <span className="mt-4 text-[8px] tracking-[.15em] text-[#A27A32]">EDUCATION · DISCIPLINE</span>
            </div>
            <span className="absolute bottom-[8%] right-[7%] serif text-[13px] italic text-[#B29662]">Your first step.</span>
          </div>

          <div className="py-5">
            <span className="eyebrow">THE TRADING BOOK</span>
            <h2 className="serif section-title mt-5 text-[46px] leading-[1.14] tracking-[-.03em] text-[#51432F]">
              Start with the <span className="gold-text italic">fundamentals.</span>
            </h2>
            <p className="mt-5 text-[13px] leading-7 text-[#897A63]">
              A beginner-friendly guide to understanding forex, reading charts, managing risk and building good trading habits. Learn at your own pace with clear explanations.
            </p>
            <div className="mt-7 space-y-3">
              {["A free preview to get you started", "A complete paid edition planned", "Clear lessons for new traders"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[12px] text-[#79684E]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D6C092] text-[10px] text-[#A77A30]">✓</span>{item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/book-preview" className="gold-button">Read free preview ↗</a>
              <a href="/checkout?item=forex-book" className="outline-button">Full book access</a>
            </div>
            <p className="mt-4 text-[10px] leading-5 text-[#9B8B74]">Book links and paid access will be connected once the final book file and payment system are ready.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="site-width grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2 className="serif mt-5 text-[40px] leading-tight text-[#51432F]">A few things worth knowing.</h2>
            <p className="mt-4 text-[12px] leading-6 text-[#8B7B64]">Have another question? Contact the academy directly.</p>
            <a href="#contact" className="outline-button mt-6">Get in touch ↗</a>
          </div>
          <div>
            {[
              ["Is this suitable for beginners?", "Yes. The academy is being designed to help learners understand forex concepts step by step. Start with the foundations."],
              ["Does mentorship guarantee profit?", "No. Trading involves substantial risk, and losses are possible. Education cannot guarantee profits or remove market risk."],
              ["How will I access a course after payment?", "The intended system will verify payments and provide access through a student account. Live payment verification and course access still need to be implemented."],
              ["Can I read the book before buying?", "A free preview is planned, with the complete edition offered separately when the final book and access system are ready."],
            ].map(([question, answer]) => (
              <details key={question} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[13px] font-semibold text-[#68553A]">
                  {question}
                  <span className="serif text-[22px] font-normal text-[#B68A3A] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[590px] text-[12px] leading-6 text-[#8B7B64]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-4 pb-16">
        <div className="site-width relative overflow-hidden border border-[#E4D1AC] bg-[#F8F0E0] px-6 py-12 text-center sm:px-12 sm:py-16">
          <span className="absolute left-4 top-0 serif text-[100px] leading-none text-[#EBDDBF]">“</span>
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2 className="serif relative mt-5 text-[36px] leading-tight text-[#5A4830] sm:text-[45px]">Build knowledge before you risk capital.</h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[12px] leading-6 text-[#87765D]">Take the next step in your learning journey with Kamall FX Pro.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/2348089162222" target="_blank" rel="noreferrer" className="gold-button">Chat on WhatsApp ↗</a>
            <a href="https://t.me/kamallfxpro" target="_blank" rel="noreferrer" className="outline-button">Join Telegram ↗</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8D9BD] bg-[#F8F3E9]">
        <div className="site-width footer-grid grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="serif text-[20px] tracking-[.12em] text-[#9C742E] no-underline">KAMALL FX PRO</a>
            <p className="mt-4 max-w-[250px] text-[11px] leading-6 text-[#88775F]">A thoughtful approach to forex education, market understanding and trading discipline.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8E6B32]">Explore</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-[11px] text-[#817159] no-underline" href="#academy">Academy</a>
              <a className="text-[11px] text-[#817159] no-underline" href="#mentorship">Mentorship</a>
              <a className="text-[11px] text-[#817159] no-underline" href="#book">Trading book</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8E6B32]">Your account</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-[11px] text-[#817159] no-underline" href="/login">Sign in</a>
              <a className="text-[11px] text-[#817159] no-underline" href="/register">Register</a>
              <a className="text-[11px] text-[#817159] no-underline" href="/dashboard">Student dashboard</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8E6B32]">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="text-[11px] text-[#817159] no-underline" href="https://wa.me/2348089162222">WhatsApp</a>
              <a className="text-[11px] text-[#817159] no-underline" href="https://t.me/kamallfxpro">Telegram</a>
              <a className="text-[11px] text-[#817159] no-underline" href="/privacy">Privacy policy</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E8DCC6]">
          <div className="site-width flex flex-wrap items-center justify-between gap-3 py-5">
            <p className="text-[10px] text-[#95846B]">© 2026 Kamall FX Pro. All rights reserved.</p>
            <p className="text-[10px] text-[#95846B]">Trade responsibly. Protect your capital.</p>
          </div>
          <p className="site-width pb-5 text-[10px] leading-5 text-[#9A8B75]">Educational content only; not financial advice. Trading carries risk, and losses are possible. Nothing on this website guarantees trading results.</p>
        </div>
      </footer>
    </main>
  );
}
