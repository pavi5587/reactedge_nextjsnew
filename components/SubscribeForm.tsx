"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    // Connect this form to your CRM/API before production.
    setMessage("Thanks — your email is validated. Connect an API to save subscriptions.");
  }

  return (
    <form onSubmit={submit} className={compact ? "flex w-full flex-col gap-3 sm:flex-row" : "flex w-full max-w-xl flex-col gap-3 sm:flex-row"}>
      <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>Email address</label>
      <input id={compact ? "footer-email" : "hero-email"} type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address" className="min-h-12 min-w-0 flex-1 border border-line bg-white px-4 text-sm text-[#142331] placeholder:text-slate-400 focus:border-[#75a928] focus:outline-none" />
      <button className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#b7df78] px-5 text-sm font-bold text-[#142331] transition hover:bg-[#142331] hover:text-white">
        Subscribe <ArrowRight size={16} />
      </button>
      {message && <p role="status" className="basis-full text-xs text-[#52791d]">{message}</p>}
    </form>
  );
}
