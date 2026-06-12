import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-[--color-brand-border] sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-(--spacing-navbar) flex items-center justify-between">
        
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-wider text-(--color-brand-primary)">
            FORGEWELL
          </span>
          <span className="text-[9px] font-bold uppercase tracking-(0.2em) text-(--color-brand-primary) mt-0.5">
            Precision. By Design.
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          <Link href="/capabilities" className="nav-link">Capabilities</Link>
          <Link href="/industries" className="nav-link">Industries</Link>
          <Link href="/quality" className="nav-link">Quality & Compliance</Link>
          <Link href="/case-studies" className="nav-link">Case Studies</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* buttons on the right side */}
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <a 
            href="tel:+16035550123" 
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[--color-brand-primary] hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (603) 555-0123
          </a>

          <Link href="/portal" className="btn-secondary py-2 px-4 text-xs">
            Client Portal
          </Link>

          <Link href="/quote" className="btn-primary py-2 px-4 text-xs">
            Request a Quote
          </Link>
        </div>

      </div>
    </header>
  )
}