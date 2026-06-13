import Link from "next/link"
import { footerLinks } from "@/lib/consts"

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-brand-primary border-t border-[--color-brand-border]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-5 px-4 sm:px-6 lg:px-8">
                <div className="md:col-span-1 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-wider text-white">
                            FORGEWELL
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 mt-0.5">
                            Precision. By Design.
                        </span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed max-w-[180px]">
                        Industrial grade manufacturing solutions built to spec.
                    </p>
                    <a href="tel:+16035550123" className="flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-70 transition-opacity w-fit">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +1 (603) 555-0123
                    </a>
                </div>

                <div className="md:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {footerLinks.map(({ heading, links }) => (
                        <div key={heading}>
                            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white">{heading}</h2>
                            <ul className="space-y-3">
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>


        </footer>
    )
}

export default Footer