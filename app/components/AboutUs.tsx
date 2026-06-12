import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-brand-primary overflow-hidden py-6 sm:py-8 lg:py-0 h-[calc(100vh-var(--spacing-navbar))]">
      
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 sm:px-8 lg:px-0 pt-4 lg:pt-0 h-1/2 lg:h-full">
        <div className="relative w-[60%] sm:w-[50%] md:w-[45%] lg:w-[65%] xl:w-[55%] h-full max-h-[90%]">
          <Image
            src="/deckel.png"
            alt="Forgewell machinery"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 45vw, 35vw"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center py-4 lg:py-10">
        <div className="w-full space-y-3 sm:space-y-4">
          <p className="text-gray-300 text-sm sm:text-base tracking-wide">Since 1978</p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-semibold">
            We&apos;ve kept on delivering
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-full">
            We&apos;ve been delivering quality for 45+ years, and now our parts
            move everything, from life-saving surgical tools to defense applications.
            Times have changed, but we are still remembered for our speedy deliveries
            and excellent quality.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutUs