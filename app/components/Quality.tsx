import Image from "next/image";
import { industrialFeatures } from "@/lib/consts";
import ScrollStagger from "@/components/ScrollStagger";
import ScrollReveal from "@/components/ScrollReveal";

export default function IndustrialGrid() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col py-12">
      <ScrollReveal delay={0.2} direction="left">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-current/10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 opacity-50">
              Why choose forgewell?
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Engineered for<br />
              <span className="text-brand-primary">zero failure</span><br />
              at scale.
            </h1>
          </div>
          <p className="leading-relaxed max-w-sm text-sm opacity-60 lg:pb-2 lg:text-right shrink-0">
            Discover the rigorous architectural principles and continuous
            optimization cycles that guarantee flawless performance under load.
          </p>
        </div>
      </ScrollReveal>


      <ScrollStagger
        staggerDelay={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 place-items-center md:place-items-stretch"
        itemClassName="h-full w-full"
      >
        {industrialFeatures.map((item) => (
          <div key={item.id} className="quality-card h-full">
            <span className="card-counter">{item.id}</span>
            <div className="card-icon-box">
              <Image
                src={`icons/${item.iconName}.svg`}
                alt={`${item.title} icon`}
                width={20}
                height={20}
              />
            </div>
            <div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.desc}</p>
            </div>
          </div>
        ))}
      </ScrollStagger>
    </div>
  );
}