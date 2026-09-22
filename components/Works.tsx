import Image from 'next/image'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { ARTWORK } from '@/lib/site'

const pad = (n: number) => String(n).padStart(2, '0')

export default function Works({ dict }: { dict: Dictionary }) {
  const pieces = dict.works.pieces
  const total = pieces.length

  return (
    <section id="works" className="ink-ground grain relative scroll-mt-0">
      {/* Intro */}
      <div className="mx-auto max-w-[110rem] px-gutter pt-28 pb-16 lg:pt-44 lg:pb-24">
        <div className="rule-inverse grid grid-cols-12 gap-y-8 border-t pt-8">
          <p
            data-reveal
            style={reveal(0)}
            className="eyebrow col-span-12 text-paper-light/50 lg:col-span-3"
          >
            {dict.works.label}
          </p>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-reveal
              style={reveal(100)}
              className="font-display text-heading font-extralight tracking-[-0.02em] text-paper-light"
            >
              {dict.works.heading}
            </h2>
            <p
              data-reveal
              style={reveal(220)}
              className="text-balance-pretty mt-6 max-w-[46ch] text-lede font-light text-paper-light/60"
            >
              {dict.works.lede}
            </p>
          </div>
        </div>
      </div>

      {/* One full-height panel per piece, alternating sides. */}
      {pieces.map((piece, i) => {
        const art = ARTWORK[i % ARTWORK.length]
        const flipped = i % 2 === 1

        return (
          <article
            key={piece.title}
            className="relative flex min-h-[100svh] items-center overflow-hidden py-16 lg:min-h-dvh lg:py-24"
          >
            {/* Ghost numeral behind the plate. */}
            <span
              aria-hidden="true"
              data-parallax="0.14"
              className={[
                'pointer-events-none absolute top-1/2 select-none font-display leading-none',
                'text-[clamp(16rem,42vw,40rem)] font-extralight text-paper-light/[0.05]',
                flipped ? 'right-[-0.08em]' : 'left-[-0.08em]',
              ].join(' ')}
              style={{ transform: 'translate3d(0, calc(-50% + var(--parallax-y, 0px)), 0)' }}
            >
              {pad(i + 1)}
            </span>

            <div className="relative mx-auto grid w-full max-w-[110rem] grid-cols-12 items-center gap-x-8 gap-y-10 px-gutter">
              {/* Plate */}
              <figure
                data-reveal
                style={reveal(0, '3rem')}
                className={[
                  'col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-7 lg:col-start-auto',
                  flipped ? 'lg:order-2' : 'lg:order-1',
                ].join(' ')}
              >
                <div className="plate plate-inverse relative aspect-[4/5] w-full overflow-hidden lg:aspect-[16/11]">
                  <div
                    data-parallax="0.07"
                    className="absolute inset-[-8%]"
                    style={{ transform: 'translate3d(0, var(--parallax-y, 0px), 0)' }}
                  >
                    <Image
                      src={art.src}
                      alt={`${piece.title} — ${piece.medium}`}
                      fill
                      sizes="(min-width: 1024px) 58vw, 92vw"
                      style={{ objectPosition: art.focus }}
                      className="object-cover"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink/40"
                  />
                </div>
              </figure>

              {/* Meta */}
              <div
                className={[
                  'col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-auto',
                  flipped ? 'lg:order-1' : 'lg:order-2',
                ].join(' ')}
              >
                <p
                  data-reveal
                  style={reveal(120)}
                  className="eyebrow flex items-center gap-4 text-vermilion"
                >
                  <span aria-hidden="true" className="h-px w-8 bg-vermilion" />
                  {dict.works.piece} {pad(i + 1)} {dict.works.of} {pad(total)}
                </p>

                <h3
                  data-reveal
                  style={reveal(200)}
                  className="text-balance-pretty mt-5 font-display text-[clamp(1.8rem,3.3vw,2.75rem)] leading-[1.1] font-light tracking-[-0.02em] text-paper-light"
                >
                  {piece.title}
                </h3>

                <p
                  data-reveal
                  style={reveal(280)}
                  className="rule-inverse mt-5 border-t pt-5 text-sm font-light tracking-wide text-paper-light/60"
                >
                  <span className="text-paper-light/85">{piece.year}</span>
                  <span aria-hidden="true" className="mx-3 opacity-40">
                    /
                  </span>
                  {piece.medium}
                </p>

                <p
                  data-reveal
                  style={reveal(360)}
                  className="text-balance-pretty mt-6 max-w-[38ch] text-[1.0625rem] leading-[1.7] font-light text-paper-light/70"
                >
                  {piece.caption}
                </p>
              </div>
            </div>
          </article>
        )
      })}

      {/* Soft hand-off back to paper. */}
      <div
        aria-hidden="true"
        className="pointer-events-none h-32 bg-gradient-to-b from-transparent to-paper lg:h-48"
      />
    </section>
  )
}
