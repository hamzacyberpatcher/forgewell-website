import Image from "next/image";
import { industrialFeatures } from "@/lib/consts";

export default function IndustrialGrid() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 h-[calc(100vh-var(--spacing-navbar))] flex flex-col py-12">

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-current/10 shrink-0">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {industrialFeatures.map((item) => (
        <div key={item.id} className="quality-card">
          <span className="card-counter">{item.id}</span>
          
          <div className="card-icon-box">
            <Image src={`${item.iconName}.svg`} alt={`${item.title} icon`} width={20} height={20} />
          </div>

          <div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}