import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-[84px] bg-surface-2 transition-colors duration-500"
    >
      <div className="mx-auto max-w-[1080px] px-[clamp(20px,5vw,48px)] py-[clamp(72px,10vw,128px)]">
        <SectionHeading title="Experience" />

        <RevealGroup className="mt-[clamp(44px,6vw,72px)] flex flex-col gap-[22px]">
          {experience.map((item, index) => (
            <RevealItem
              key={`${item.company}-${item.role}`}
              index={index}
              as="article"
              className="flex flex-wrap gap-[clamp(20px,4vw,56px)] rounded border border-line bg-surface p-[clamp(24px,3.5vw,40px)] transition-colors duration-500"
            >
              <div className="min-w-[210px] flex-[1_1_230px]">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {item.period}
                </span>
                <h3 className="mt-3 font-serif text-[26px] font-semibold text-text">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-[15px] font-medium text-muted">
                  {item.company} · {item.type}
                </p>
                <span className="mt-3.5 inline-block rounded border border-line px-[11px] py-[5px] text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                  {item.commitment}
                </span>
              </div>
              <div className="flex min-w-[260px] flex-[2_1_380px] flex-col gap-4">
                {item.points.map((point, index) => (
                  <div key={index} className="flex gap-3.5">
                    <span className="mt-[9px] h-px w-[18px] flex-shrink-0 bg-accent" />
                    <p className="text-[15.5px] leading-[1.7] text-muted">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
