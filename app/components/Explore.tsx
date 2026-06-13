import Image from "next/image"
import { explore } from "@/lib/consts"

export const Explore = () => {
  return (
    <section className="w-full bg-white lg:h-[calc(100vh-var(--spacing-navbar))] lg:overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-6 pt-2 flex flex-col gap-8">

        <div className="flex flex-col items-center gap-3 text-center shrink-0">
          <h1>Explore more about us</h1>
          <p className="max-w-xl text-balance">
            Get to know more about our worldclass infrastructure, cutting edge
            products and the opportunities that await for you at forgewell
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center min-h-0 flex-1">
          {explore.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-card-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="feature-card-image"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCn/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDIT--V3A="
                />
              </div>
              <div className="feature-card-content">
                <h2 className="feature-card-title">{item.title}</h2>
                <p className="feature-card-body">{item.text}</p>
                <button className="btn-primary group h-12 px-6">
                  {item.button}
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}