import { industrialFeatures } from "@/lib/consts";
import ScrollStagger from "@/components/ScrollStagger";
import ScrollReveal from "@/components/ScrollReveal";
import HoverVideoIcon from "./HoverVideoIcon";

export default function Quality() {
  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-8 lg:px-16 flex flex-col py-12">
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

      <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 place-items-center md:place-items-stretch group/grid" itemClassName="h-full w-full">
        {industrialFeatures.map((item) => (
          <div key={item.id} className="quality-card h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary/50 hover:bg-white z-0 hover:z-10 group-hover/grid:opacity-60 hover:!opacity-100">
            <span className="card-counter">{item.id}</span>

            <div className="card-icon-box bg-white! transition-all duration-300 group-hover:border-brand-primary/20">
              <HoverVideoIcon iconPath={item.iconPath} />
            </div>

            <div>
              <h3 className="card-title transition-colors duration-300 group-hover:text-brand-primary">
                {item.title}
              </h3>
              <p className="card-body">{item.desc}</p>
            </div>
          </div>
        ))}
      </ScrollStagger>
    </div>
  );
}