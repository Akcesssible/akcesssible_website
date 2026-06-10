import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import ScrambleText from "@/components/animations/ScrambleText";

// Headline kept as two fixed lines so each word scrambles in place.
const LINES = [
  ["Digital", "platforms"],
  ["built", "for", "Africa."],
];

/**
 * Hero background images. One is picked at random on every request (the route
 * opts out of caching via noStore), so a refresh can swap day ↔ night. Each
 * image carries a `tone` so the headline and scrim can flip for legibility:
 * a light photo gets black text on a soft light scrim, a dark photo gets white
 * text on a dark scrim.
 */
const HERO_IMAGES = [
  {
    src: "/hero/hero-day.jpg",
    tone: "light",
    alt: "Daytime view of the Nairobi city skyline under a clear blue sky.",
  },
  {
    src: "/hero/hero-night.jpg",
    tone: "dark",
    alt: "Aerial view of a sprawling city lit up at night.",
  },
] as const;

export default function Hero() {
  // Opt out of caching so the random pick re-runs on every request/refresh.
  noStore();
  const image = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)];
  const isDark = image.tone === "dark";

  return (
    <section
      data-hero-tone={image.tone}
      className={`relative isolate overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background photo (day or night, chosen per request) */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Tone-adaptive scrim: keeps the headline legible over the busy cityscape */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-t ${
          isDark
            ? "from-black/80 via-black/30 to-black/10"
            : "from-white/85 via-white/35 to-white/10"
        }`}
      />

      {/* Top scrim: only on the dark (night) photo, where the white navbar sits.
          The day photo keeps its clean sky and pairs with a dark navbar instead. */}
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent"
        />
      )}

      {/* Subtle film-grain overlay (design layer: div.grain @ 2% opacity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/grain.svg)",
          backgroundSize: "300px 300px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1312px] flex-col justify-end px-6 pb-16 pt-32 sm:px-8 lg:pb-24">
        {/* Two fixed lines; each word scrambles in place (staggered) */}
        <h1
          className={`max-w-[997px] font-normal leading-[0.96] tracking-[-0.067em] text-[clamp(2.75rem,10.5vw,132px)] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {LINES.map((line, li) => {
            const offset = LINES.slice(0, li).reduce(
              (n, l) => n + l.length,
              0,
            );
            return (
              <span key={li} className="block">
                {line.map((word, wi) => {
                  const i = offset + wi;
                  return (
                    <span key={`${word}-${i}`}>
                      <ScrambleText
                        as="span"
                        text={word}
                        trigger="load"
                        delay={i * 0.09}
                        duration={0.8}
                        chars="upperAndLowerCase"
                        className="inline-block"
                      />
                      {wi < line.length - 1 ? " " : ""}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
      </div>
    </section>
  );
}
