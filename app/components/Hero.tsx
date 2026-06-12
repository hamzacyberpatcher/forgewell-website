import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center gap-12 lg:gap-8">

        <div className="flex-1 space-y-6 max-w-3xl lg:max-w-none text-left z-10">

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-[10px] font-bold tracking-[0.15em] text-[--color-brand-primary] uppercase opacity-90">
            <span>ISO 13485:2016</span>
            <span className="text-gray-300">•</span>
            <span>FDA Registered</span>
            <span className="text-gray-300">•</span>
            <span>Class 8 Cleanroom</span>
          </div>

          <h1 className='md:w-2xl'>
            Precision Components <br className="hidden md:inline" />
            for Surgical & Medical <br />
            Device OEMs.
          </h1>

          <p className="max-w-lg">
            Manufacturing implant-grade and mission-critical medical components since 1978.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/quote" className="btn-primary group h-12 px-6">
              Request a Quote
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link href="/quality" className="btn-secondary group h-12 px-6">
              View Quality Systems
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Completely hidden on mobile, renders as a layout-balanced half-section on md screens and up */}
        <div className="hidden lg:flex flex-1 justify-end">
          <div className="relative w-[45vw] max-w-[750px] min-w-[500px] aspect-[5/4]">
            <Image
              src="/scalpel.jpg"
              alt="Precision surgical scalpel component"
              fill
              priority
              className="object-contain"
              sizes="45vw"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50/70 border-t border-b border-[--color-brand-border] py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="space-y-1">
            <span className="label-caps block text-[10px]">Tolerance</span>
            <div className="text-sm md:text-2xl tracking-tight text-[--color-brand-text-dark]">
              &plusmn;0.0002&quot;
            </div>
          </div>

          <div className="space-y-1 border-l border-gray-200 pl-6 md:pl-8">
            <span className="label-caps block text-[10px]">Quality Management</span>
            <div className="text-sm md:text-2xl tracking-tight text-[--color-brand-text-dark] uppercase">
              ISO 13485:2016
            </div>
          </div>

          <div className="space-y-1 md:border-l border-gray-200 md:pl-6">
            <span className="label-caps block text-[10px]">Regulatory</span>
            <div className="text-sm md:text-2xl tracking-tight text-[--color-brand-text-dark] uppercase">
              FDA Registered
            </div>
          </div>

          <div className="space-y-1 border-l border-gray-200 pl-6 md:pl-8">
            <span className="label-caps block text-[10px]">Cleanroom Capability</span>
            <div className="text-sm md:text-2xl tracking-tight text-[--color-brand-text-dark] uppercase">
              Class 8 Cleanroom
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}