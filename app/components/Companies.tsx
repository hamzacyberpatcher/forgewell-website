import LogoLoop from '@/components/LogoLoop';
import { imageLogos } from '@/lib/consts';
import { metrics } from '@/lib/consts';
import CountUp from '@/components/CountUp';
import ScrollReveal from '@/components/ScrollReveal';

const SmartCountUp = ({ value }: { value: string | number }) => {
  const match = String(value).match(/^([^\d]*)([\d.,]+)([^0-9]*)$/);

  if (!match) return <>{value}</>;

  const prefix = match[1];
  const numberValue = parseFloat(match[2].replace(/,/g, ''));
  const suffix = match[3];

  return (
    <>
      {prefix}
      <CountUp to={numberValue} separator="," delay={0.2} />
      {suffix}
    </>
  );
};

const Companies = () => {
  return (
    <div className="relative w-full bg-brand-primary text-brand-text-dark flex flex-col lg:h-[calc(100vh-var(--spacing-navbar))] lg:overflow-hidden">
      <ScrollReveal className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 lg:py-0">
        

          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-gray-400">Trusted by industry leaders</p>

          <div className="relative">
            <span className="absolute -top-8 -left-2 sm:-left-4 text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black leading-none select-none pointer-events-none opacity-10" aria-hidden="true">
              200+
            </span>

            <h2 className="text-white relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-2xl">
              Built alongside the<br />
              world&apos;s most demanding<br />
              manufacturers.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl text-brand-accent font-bold tracking-tight">
                  <SmartCountUp value={value} />
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{label}</span>
              </div>
            ))}
          </div>
        
      </ScrollReveal>

      <div className="w-full border-t border-white/10 shrink-0" />

      <div className="shrink-0 py-2">
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="var(--color-brand-primary)"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default Companies;