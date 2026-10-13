"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="ReActEdge home">
          <span className="grid h-9 w-9 place-items-center border border-[#75a928]/60 text-[#52791d]">
            <span className="text-sm font-black">RE</span>
          </span>
          <span className="text-lg font-bold tracking-[.14em]">REACT<span className="text-[#52791d]">EDGE</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-500 transition hover:text-[#52791d]">{link.label}</a>)}
          <a href="#contact" className="inline-flex items-center gap-2 border border-[#75a928] px-4 py-2 text-sm font-semibold text-[#52791d] transition hover:bg-[#b7df78] hover:text-[#142331]">
            Secure your systems <ArrowUpRight size={15} />
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-700">{link.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block border border-[#75a928] px-4 py-3 text-center text-[#52791d]">Secure your systems</a>
      </nav>}
    </header>
  );
}
