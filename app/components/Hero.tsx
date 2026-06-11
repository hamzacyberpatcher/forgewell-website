import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Main hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* left side*/}
        <div className="flex-1 space-y-6 max-w-3xl lg:max-w-none text-left z-10">
          
          {/* tags*/}
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-[10px] font-bold tracking-[0.15em] text-[--color-brand-primary] uppercase opacity-90">
            <span>ISO 13485:2016</span>
            <span className="text-gray-300">•</span>
            <span>FDA Registered</span>
            <span className="text-gray-300">•</span>
            <span>Class 8 Cleanroom</span>
          </div>

          {/* Hero Main Heading */}
          <h1 className='lg:w-2xl'>
            Precision Components <br className="hidden md:inline" />
            for Surgical & Medical <br />
            Device OEMs.
          </h1>

          {/* Subheading Description */}
          <p className="max-w-lg">
            Manufacturing implant-grade and mission-critical medical components since 1978.
          </p>

          {/* buttons group */}
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

        {/* the image on the right side */}
        <div className="flex-1 relative w-full lg:w-auto flex justify-center lg:justify-end">
          {/* Subtle background glow mimicking the studio lighting in the image */}
          <div className="absolute inset-0 bg-radial from-gray-50 via-transparent to-transparent scale-150 -z-10" />
          
          {/* 
            place the image over here whenever it is provided
          */}
          
        </div>
      </div>

      <div className="w-full bg-gray-50/70 border-t border-b border-[--color-brand-border] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Metric 1 */}
          <div className="space-y-1">
            <span className="label-caps block text-[10px]">Tolerance</span>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-[--color-brand-text-dark]">
              ±0.0002&quot;
            </div>
          </div>

          {/* Metric 2 */}
          <div className="space-y-1 border-l border-gray-200 pl-6 md:pl-8">
            <span className="label-caps block text-[10px]">Quality Management</span>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-[--color-brand-text-dark] uppercase">
              ISO 13485:2016
            </div>
          </div>

          {/* Metric 3 */}
          <div className="space-y-1 border-l border-gray-200 pl-6 md:pl-8">
            <span className="label-caps block text-[10px]">Regulatory</span>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-[--color-brand-text-dark] uppercase">
              FDA Registered
            </div>
          </div>

          {/* Metric 4 */}
          <div className="space-y-1 border-l border-gray-200 pl-6 md:pl-8">
            <span className="label-caps block text-[10px]">Cleanroom Capability</span>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-[--color-brand-text-dark] uppercase">
              Class 8 Cleanroom
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}