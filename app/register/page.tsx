
"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFEFB] text-[#51432F]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap');
        .register-serif { font-family: 'Playfair Display', Georgia, serif; }
        .register-sans { font-family: 'DM Sans', sans-serif; }
        .register-input {
          width: 100%; padding: 13px 14px; background: #FFFEFB;
          border: 1px solid #E7DDCA; color: #51432F; font-size: 12px;
          outline: none; transition: border-color .2s, box-shadow .2s;
        }
        .register-input:focus {
          border-color: #B68A3A; box-shadow: 0 0 0 3px rgba(182,138,58,.09);
        }
        .register-input::placeholder { color: #B1A38B; }
        .register-label {
          display: block; margin-bottom: 8px; color: #74634A;
          font-size: 11px; font-weight: 600;
        }
      `}</style>

      <header className="border-b border-[#EEE4D2] bg-[#FFFEFB]">
        <div className="mx-auto flex min-h-[76px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3 no-underline">
            <span className="register-serif flex h-10 w-10 items-center justify-center border border-[#C7A566] text-xl text-[#A77A30]">
              K
            </span>
            <span>
              <span className="register-serif block text-[17px] tracking-[.13em] text-[#8F6A2E]">
                KAMALL
              </span>
              <span className="block text-[9px] font-semibold tracking-[.25em] text-[#9A8A70]">
                FX PRO · ACADEMY
              </span>
            </span>
          </a>

          <a href="/" className="text-[11px] text-[#8A795F] no-underline hover:text-[#B68A3A]">
            ← Back to homepage
          </a>
        </div>
      </header>

      <div className="register-sans mx-auto grid min-h-[calc(100vh-77px)] max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-16">
        <section className="max-w-lg">
          <p className="text-[10px] font-bold uppercase tracking-[.23em] text-[#A17B39]">
            YOUR TRADING JOURNEY STARTS HERE
          </p>

          <h1 className="register-serif mt-6 text-[43px] leading-[1.13] tracking-[-.035em] text-[#51432F] sm:text-[54px]">
            Invest in your
            <br />
            knowledge.{" "}
            <span className="italic text-[#B68A3A]">Begin today.</span>
          </h1>

          <p className="mt-6 max-w-md text-[13px] leading-7 text-[#897A63]">
            Create your student account to prepare for your learning journey
            with Kamall FX Pro. Build your knowledge, develop discipline and
            learn to approach the markets responsibly.
          </p>

          <div className="mt-9 space-y-5">
            {[
              ["01", "A structured learning journey", "Explore forex topics from the foundations upward."],
              ["02", "Learning resources", "Keep your learning materials organised as features become available."],
              ["03", "Your student space", "A dedicated dashboard is planned for course access and progress."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4">
                <span className="register-serif flex h-10 w-10 shrink-0 items-center justify-center border border-[#E4D3AF] text-[15px] italic text-[#B68A3A]">
                  {number}
                </span>
                <div>
                  <h2 className="text-[12px] font-semibold text-[#6A5639]">{title}</h2>
                  <p className="mt-1 text-[11px] leading-5 text-[#94846C]">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-[#C7A566] bg-[#FAF5EA] px-5 py-4">
            <p className="register-serif text-[17px] italic text-[#78613C]">
              “Knowledge before execution.”
            </p>
            <p className="mt-2 text-[10px] text-[#98866B]">
              The Kamall FX Pro learning philosophy
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[490px] border border-[#E9DFCE] bg-white p-6 shadow-[0_18px_65px_rgba(126,94,40,0.07)] sm:p-10">
          <div className="mb-8">
            <p className="text-[9px] font-bold uppercase tracking-[.22em] text-[#A17B39]">
              STUDENT REGISTRATION
            </p>
            <h2 className="register-serif mt-3 text-[31px] text-[#59472F]">
              Create your account
            </h2>
            <p className="mt-2 text-[11px] leading-5 text-[#92816A]">
              Fill in your details to get started.
            </p>
          </div>

          <form action="/register" method="get" onSubmit={(event) => event.preventDefault()}>
            <div className="mb-5">
              <label className="register-label" htmlFor="fullName">Full name</label>
              <input
                className="register-input"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="mb-5">
              <label className="register-label" htmlFor="email">Email address</label>
              <input
                className="register-input"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-5">
              <label className="register-label" htmlFor="password">Create password</label>
              <div className="relative">
                <input
                  className="register-input pr-16"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#A17B39]"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="register-label" htmlFor="confirmPassword">Confirm password</label>
              <div className="relative">
                <input
                  className="register-input pr-16"
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#A17B39]"
                >
                  {showConfirmPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <label className="mb-6 flex cursor-pointer items-start gap-3 text-[11px] leading-5 text-[#83735B]">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                required
                className="mt-1 accent-[#B68A3A]"
              />
              <span>
                I agree to the{" "}
                <a href="/terms" className="font-semibold text-[#A17B39] underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="font-semibold text-[#A17B39] underline">
                  Privacy Policy
                </a>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full border border-[#B68A3A] bg-[#B68A3A] px-5 py-4 text-[11px] font-bold tracking-[.09em] text-white transition hover:bg-[#9D742B]"
            >
              CREATE STUDENT ACCOUNT ↗
            </button>

            <p className="mt-6 text-center text-[11px] text-[#94846C]">
              Already have an account?{" "}
              <a href="/login" className="font-bold text-[#A17B39] underline">
                Sign in
              </a>
            </p>
          </form>

          <div className="mt-7 border-t border-[#EEE5D7] pt-5 text-center">
            <p className="text-[9px] leading-5 text-[#A0927B]">
              Educational content only; not financial advice. Trading carries
              risk, and losses are possible.
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#EEE4D2] bg-[#FAF6EE] px-5 py-5 text-center">
        <p className="text-[10px] text-[#99876C]">
          © 2026 Kamall FX Pro. Trade responsibly. Protect your capital.
        </p>
      </footer>
    </main>
  );
}
