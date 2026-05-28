"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#about", label: "Обо мне" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-semibold text-foreground tracking-wide">
            Елена<span className="text-primary">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#booking">Записаться</Link>
            </Button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#booking" onClick={() => setIsMenuOpen(false)}>Записаться</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
