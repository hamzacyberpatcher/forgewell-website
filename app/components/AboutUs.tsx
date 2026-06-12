import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="w-full h-2/5 flex flex-col-reverse lg:flex-row bg-brand-primary overflow-hidden py-4 lg:py-6">
      <div className="w-full lg:w-1/2 px-6 lg:px-10 flex items-center">
        <div className="max-w-2xl space-y-3">
          <p className="text-gray-300 text-base lg:text-lg">Since 1978</p>
          <h1 className="text-white text-5xl leading-tight font-semibold">We've kept on delivering</h1>
          <p className="text-gray-300 text-xl leading-relaxed lg:w-3/5">
            We've been delivering quality for 45+ years, and now our parts
            move everything, from life saving surgical tools to defense applications.
            Times have changed, but we are still remembered for our speedy deliveries
            and excellent quality.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="relative w-[75%] lg:w-[70%] aspect-4/5 mx-auto">
          <Image src="/deckel.png" alt="Forgewell machinery" fill priority
            className="object-contain" sizes="(max-width: 1024px) 75vw, 40vw" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs