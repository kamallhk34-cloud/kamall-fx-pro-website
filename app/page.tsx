
const services = [
  {
    number: "01",
    title: "Forex Education",
    description:
      "Build your foundation with beginner-friendly lessons on currency pairs, the forex market, and how trading works.",
  },
  {
    number: "02",
    title: "Trading Mentorship",
    description:
      "Develop chart-reading skills, trading discipline, and a structured approach to market analysis.",
  },
  {
    number: "03",
    title: "Market Insights",
    description:
      "Explore educational market analysis and trading concepts to help you make informed decisions.",
  },
];

const lessons = [
  {
    number: "01",
    title: "Forex Fundamentals",
    text: "Understand currency pairs, pips, spreads, lot sizes, and market sessions.",
  },
  {
    number: "02",
    title: "Technical Analysis",
    text: "Learn candlesticks, market structure, trends, and important price levels.",
  },
  {
    number: "03",
    title: "Risk Management",
    text: "Understand position sizing, stop losses, and protecting your trading capital.",
  },
];

const gold = "#B89550";
const whatsapp = "https://wa.me/2348089162222";
const telegram = "https://t.me/kamallfxpro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFEFA] text-[#24221E]">
      <header className="sticky top-0 z-50 border-b border-[#B89550]/20 bg-[#FFFEFA]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center border text-lg font-bold"
              style={{ borderColor: gold, color: gold }}
              aria-label="Temporary logo placeholder"
            >
              K
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.16em]">
                KAMALL
              </p>
              <p
                className="text-xs font-semibold tracking-[0.24em]"
                style={{ color: gold }}
              >
                FX PRO
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-[#666159] lg:flex">
            <a href="#about" className="transition hover:text-[#B89550]">About</a>
            <a href="#education" className="transition hover:text-[#B89550]">Education</a>
            <a href="#mentorship" className="transition hover:text-[#B89550]">Mentorship</a>
            <a href="#book" className="transition hover:text-[#B89550]">Trading Book</a>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border px-4 py-2.5 text-sm font-semibold transition hover:bg-[#B89550] hover:text-white"
            style={{ borderColor: gold, color: gold }}
          >
            Contact Us
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#B89550]/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28 lg:px-10">
          <div>
            <p
              className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: gold }}
            >
              Precision · Discipline · Growth
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Understand the
              <span className="block" style={{ color: gold }}>market.</span>
              Trade with purpose.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#706B63] sm:text-lg">
              Welcome to Kamall FX Pro — a trading education brand
              focused on understanding the market, technical analysis,
              and disciplined decision-making.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#education"
                className="px-7 py-4 text-sm font-semibold text-white transition hover:opacity-85"
                style={{ backgroundColor: gold }}
              >
                Explore Education
              </a>
              <a
                href="#mentorship"
                className="border border-[#B89550]/50 px-7 py-4 text-sm font-semibold transition hover:bg-[#B89550]/10"
              >
                Explore Mentorship
              </a>
            </div>

            <p className="mt-7 max-w-lg text-xs leading-6 text-[#89837A]">
              Forex trading involves substantial risk. Education does not
              guarantee profits or prevent losses.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#B89550]/40" />
            <div className="relative border border-[#E9E0D0] bg-white p-7 shadow-[0_20px_70px_rgba(80,60,20,0.07)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#89837A]">
                The Kamall FX Pro standard
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Learn the process.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#706B63]">
                Learn first. Analyze carefully. Manage risk.
              </p>

              <div className="my-9 flex h-44 items-end justify-center gap-3 border-b border-[#E9E0D0] pb-2">
                {[35, 58, 43, 72, 53, 83, 65, 95, 70, 110, 88, 125].map(
                  (height, index) => (
                    <div
                      key={index}
                      className={index % 3 === 0 ? "bg-[#D6D0C4]" : "bg-[#B89550]"}
                      style={{ height: `${height}px`, width: "12px" }}
                    />
                  )
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["01", "Learn"],
                  ["02", "Analyze"],
                  ["03", "Manage risk"],
                ].map(([number, label]) => (
                  <div key={number} className="border border-[#E9E0D0] p-3">
                    <p className="text-xs" style={{ color: gold }}>{number}</p>
                    <p className="mt-2 text-xs font-medium sm:text-sm">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-[#89837A]">
                Illustrative graphic only. This is not live market data or a trading signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#E9E0D0] bg-[#F8F5EE]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
            About Kamall FX Pro
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <h2 className="max-w-xl text-3xl font-semibold leading-snug sm:text-4xl">
              Serious learning. Structured thinking. Responsible trading.
            </h2>
            <p className="leading-8 text-[#706B63]">
              Our goal is to make forex concepts easier to understand,
              from fundamental terminology to technical analysis and
              risk management. We emphasize preparation and education
              rather than promises of quick profits.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
          Learn with purpose
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Build your trading foundation
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[#706B63]">
          Start with the basics and build your understanding step by step.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {lessons.map((lesson) => (
            <article
              key={lesson.number}
              className="border border-[#E9E0D0] bg-white p-7 transition hover:-translate-y-1 hover:border-[#B89550]/60"
            >
              <p className="text-sm" style={{ color: gold }}>{lesson.number}</p>
              <h3 className="mt-5 text-xl font-semibold">{lesson.title}</h3>
              <p className="mt-4 leading-7 text-[#706B63]">{lesson.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-[#E9E0D0] bg-[#F8F5EE]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
            What we offer
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Services built around learning
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="border border-[#E9E0D0] bg-white p-7">
                <p className="text-sm" style={{ color: gold }}>{service.number}</p>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#706B63]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mentorship" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
              Personal guidance
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Grow with structured mentorship.
            </h2>
            <p className="mt-5 leading-8 text-[#706B63]">
              Interested in mentorship? Contact us to discuss your learning
              goals, the available programme, and the appropriate fee.
            </p>
          </div>

          <div className="border border-[#DCCBA8] bg-white p-8 shadow-[0_15px_50px_rgba(80,60,20,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: gold }}>
              Mentorship programme
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Custom pricing</h3>
            <p className="mt-3 leading-7 text-[#706B63]">
              Ask us about programme details and pricing directly.
            </p>
            <a
              href={`${whatsapp}?text=${encodeURIComponent("Hello Kamall FX Pro, I would like to know more about your mentorship programme and pricing.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block px-6 py-3 text-sm font-semibold text-white transition hover:opacity-85"
              style={{ backgroundColor: gold }}
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="book" className="border-y border-[#E9E0D0] bg-[#F8F5EE]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-2 lg:px-10">
          <div className="flex min-h-72 items-center justify-center border border-[#DCCBA8] bg-white p-8">
            <div className="flex h-56 w-44 flex-col justify-between border border-[#B89550] p-5 shadow-lg">
              <div>
                <p className="text-xs tracking-[0.2em]" style={{ color: gold }}>KAMALL FX PRO</p>
                <div className="mt-5 h-px bg-[#B89550]" />
              </div>
              <div>
                <p className="text-xl font-semibold leading-snug">Forex Trading</p>
                <p className="text-xl font-semibold" style={{ color: gold }}>Beginners Guide</p>
              </div>
              <p className="text-xs text-[#89837A]">BOOK COVER PLACEHOLDER</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
              The learning library
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Your trading knowledge, in one place.
            </h2>
            <p className="mt-5 leading-8 text-[#706B63]">
              Explore our planned beginner-friendly forex guide. A free
              preview will be available, with access to the complete book
              offered separately.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#DCCBA8] bg-white p-5">
                <p className="text-sm font-semibold">Free preview</p>
                <p className="mt-2 text-sm leading-6 text-[#706B63]">
                  A sample of the book will be available here.
                </p>
                <span className="mt-4 inline-block text-xs font-semibold" style={{ color: gold }}>
                  COMING SOON
                </span>
              </div>
              <div className="border border-[#DCCBA8] bg-white p-5">
                <p className="text-sm font-semibold">Full book</p>
                <p className="mt-2 text-sm leading-6 text-[#706B63]">
                  Contact us for details about full-book access.
                </p>
                <a
                  href={`${whatsapp}?text=${encodeURIComponent("Hello Kamall FX Pro, I would like information about the full forex beginners guide.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                  style={{ color: gold }}
                >
                  Ask about the book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: gold }}>
          Let's connect
        </p>
        <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
          Your learning journey starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#706B63]">
          Contact Kamall FX Pro about forex education, mentorship, and our
          upcoming trading book.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-4 text-sm font-semibold text-white transition hover:opacity-85"
            style={{ backgroundColor: gold }}
          >
            Chat on WhatsApp
          </a>
          <a
            href={telegram}
            target="_blank"
            rel="noreferrer"
            className="border border-[#B89550] px-7 py-4 text-sm font-semibold transition hover:bg-[#B89550]/10"
          >
            Join us on Telegram
          </a>
        </div>

        <p className="mt-6 text-sm text-[#706B63]">
          WhatsApp: 08089162222
        </p>
        <p className="mt-2 text-sm text-[#706B63]">
          Telegram: @kamallfxpro
        </p>
      </section>

      <footer className="border-t border-[#E9E0D0] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#89837A] sm:flex-row">
          <p>© 2026  Kamall FX Pro. All rights reserved.</p>
          <p>Trade responsibly. Protect your capital.</p>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-xs leading-6 text-[#89837A]">
          Educational content only; not financial advice. Trading carries risk,
          and losses are possible.
        </p>
      </footer>
    </main>
  );
}
