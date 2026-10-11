
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

const prices = [
  {
    title: "Beginner Class",
    description:
      "Build your forex foundation with beginner-friendly lessons and structured learning.",
    regular: "₦100,000",
    current: "₦50,000",
    saving: "Save ₦50,000",
    discount: "50% OFF",
  },
  {
    title: "Advanced Class",
    description:
      "Develop your technical analysis, market understanding, and trading decision-making.",
    regular: "₦50,000",
    current: "₦40,000",
    saving: "Save ₦10,000",
    discount: "20% OFF",
  },
  {
    title: "Forex Trading Beginners Guide",
    description:
      "Study essential forex concepts at your own pace with our beginner-friendly trading book.",
    regular: "₦20,000",
    current: "₦10,000",
    saving: "Save ₦10,000",
    discount: "50% OFF",
  },
];

const gold = "#B89550";
const whatsapp = "https://wa.me/2348089162222";
const telegram = "https://t.me/kamallfxpro";

const limitedOfferText =
  "Hello Kamall FX Pro, I am interested in your limited-time offer. ";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFEFA] text-[#24221E]">
      <header className="sticky top-0 z-50 border-b border-[#B89550]/20 bg-[#FFFEFA]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/kamall-logo.jfif"
              alt="Kamall FX Pro logo"
              className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
            />
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
            <a href="#about" className="transition hover:text-[#B89550]">
              About
            </a>
            <a href="#education" className="transition hover:text-[#B89550]">
              Education
            </a>
            <a href="#pricing" className="transition hover:text-[#B89550]">
              Pricing
            </a>
            <a href="#mentorship" className="transition hover:text-[#B89550]">
              Mentorship
            </a>
            <a href="#book" className="transition hover:text-[#B89550]">
              Trading Book
            </a>
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
        <img
          src="/kamall-logo.jfif"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-5rem] top-12 z-0 h-80 w-80 object-contain opacity-[0.06] md:right-10 md:h-[28rem] md:w-[28rem]"
        />
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
              <span className="block" style={{ color: gold }}>
                market.
              </span>
              Trade with purpose.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#706B63] sm:text-lg">
              Welcome to Kamall FX Pro â€” a trading education brand focused
              on understanding the market, technical analysis, and
              disciplined decision-making.
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
                href="#pricing"
                className="border border-[#B89550]/50 px-7 py-4 text-sm font-semibold transition hover:bg-[#B89550]/10"
              >
                View Offers
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
                      className={
                        index % 3 === 0
                          ? "bg-[#D6D0C4]"
                          : "bg-[#B89550]"
                      }
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
                    <p className="text-xs" style={{ color: gold }}>
                      {number}
                    </p>
                    <p className="mt-2 text-xs font-medium sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-[#89837A]">
                Illustrative graphic only. This is not live market data
                or a trading signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[#E9E0D0] bg-[#F8F5EE]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: gold }}
          >
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

      <section
        id="education"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-10"
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: gold }}
        >
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
              <p className="text-sm" style={{ color: gold }}>
                {lesson.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold">{lesson.title}</h3>
              <p className="mt-4 leading-7 text-[#706B63]">
                {lesson.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="border-y border-[#E9E0D0] bg-[#F8F5EE]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: gold }}
          >
            What we offer
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Services built around learning
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="border border-[#E9E0D0] bg-white p-7"
              >
                <p className="text-sm" style={{ color: gold }}>
                  {service.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#706B63]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: gold }}
          >
            Special promotion
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Limited-Time Offers
          </h2>
          <p className="mt-4 leading-7 text-[#706B63]">
            Take advantage of these promotional prices while the offer
            lasts. Contact us to confirm availability and enrolment details.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {prices.map((price) => (
            <article
              key={price.title}
              className="flex flex-col border border-[#DCCBA8] bg-white p-7 shadow-[0_15px_50px_rgba(80,60,20,0.05)]"
            >
              <span
                className="mb-5 inline-flex w-fit border border-[#B89550]/40 bg-[#F8F5EE] px-3 py-1 text-xs font-bold tracking-[0.12em]"
                style={{ color: gold }}
              >
                LIMITED-TIME OFFER · {price.discount}
              </span>

              <h3 className="text-2xl font-semibold">{price.title}</h3>
              <p className="mt-4 leading-7 text-[#706B63]">
                {price.description}
              </p>

              <div className="mt-7">
                <p className="text-sm text-[#89837A]">
                  Regular price:{" "}
                  <span className="line-through">{price.regular}</span>
                </p>
                <p
                  className="mt-2 text-3xl font-semibold"
                  style={{ color: gold }}
                >
                  {price.current}
                </p>
                <p className="mt-2 text-sm font-medium text-[#706B63]">
                  {price.saving}
                </p>
              </div>

              <a
                href={`${whatsapp}?text=${encodeURIComponent(
                  `${limitedOfferText}I am interested in the ${price.title} at ${price.current}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-85"
                style={{ backgroundColor: gold }}
              >
                Enquire on WhatsApp
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#89837A]">
          Promotional prices are subject to confirmation by Kamall FX Pro.
          Forex trading carries risk; educational programmes do not
          guarantee profits.
        </p>
      </section>

      <section
        id="mentorship"
        className="border-y border-[#E9E0D0] bg-[#F8F5EE]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-10">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: gold }}
          >
            Personal guidance
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions before you enrol?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#706B63]">
            Message us to discuss class content, mentorship options,
            and which learning path suits your current experience.
          </p>
          <a
            href={`${whatsapp}?text=${encodeURIComponent(
              "Hello Kamall FX Pro, I would like to discuss your classes and mentorship options."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block px-6 py-3 text-sm font-semibold text-white transition hover:opacity-85"
            style={{ backgroundColor: gold }}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <section
        id="book"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-10"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex min-h-72 items-center justify-center border border-[#DCCBA8] bg-[#F8F5EE] p-8">
            <div className="flex h-64 w-48 flex-col justify-between border border-[#B89550] bg-white p-5 shadow-lg">
              <img
                src="/kamall-logo.jfif"
                alt="Kamall FX Pro logo on trading book"
                className="mx-auto h-20 w-20 object-contain"
              />
              <div>
                <p className="text-xl font-semibold leading-snug">
                  Forex Trading
                </p>
                <p
                  className="text-xl font-semibold"
                  style={{ color: gold }}
                >
                  Beginners Guide
                </p>
              </div>
              <p className="text-xs text-[#89837A]">KAMALL FX PRO</p>
            </div>
          </div>

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: gold }}
            >
              The learning library
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Your trading knowledge, in one place.
            </h2>
            <p className="mt-5 leading-8 text-[#706B63]">
              Study essential forex concepts at your own pace with our
              beginner-friendly trading book.
            </p>

            <div className="mt-7 border border-[#DCCBA8] bg-white p-6">
              <span
                className="inline-block border border-[#B89550]/40 bg-[#F8F5EE] px-3 py-1 text-xs font-bold tracking-[0.12em]"
                style={{ color: gold }}
              >
                LIMITED-TIME OFFER · 50% OFF
              </span>

              <p className="mt-4 text-sm text-[#89837A]">
                Regular price:{" "}
                <span className="line-through">₦20,000</span>
              </p>
              <p
                className="mt-1 text-3xl font-semibold"
                style={{ color: gold }}
              >
                ₦10,000
              </p>
              <p className="mt-2 text-sm text-[#706B63]">Save ₦10,000</p>

              <a
                href={`${whatsapp}?text=${encodeURIComponent(
                  "Hello Kamall FX Pro, I would like to purchase the Forex Trading Beginners Guide at the limited-time offer price of ₦10,000."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block px-6 py-3 text-sm font-semibold text-white transition hover:opacity-85"
                style={{ backgroundColor: gold }}
              >
                Enquire about the book
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-5xl px-5 py-24 text-center"
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: gold }}
        >
          Let's connect
        </p>
        <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
          Your learning journey starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#706B63]">
          Contact Kamall FX Pro about forex education, mentorship,
          and the trading book.
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
          <p>Â© 2026 Kamall FX Pro. All rights reserved.</p>
          <p>Trade responsibly. Protect your capital.</p>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-xs leading-6 text-[#89837A]">
          Educational content only; not financial advice. Trading carries
          risk, and losses are possible.
        </p>
      </footer>
    </main>
  );
}

