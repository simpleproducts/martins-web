/**
 * The vermilion stroke lifted out of the artwork: one broad, dry-edged mark
 * with a little spatter beside it. Edges are roughened with a turbulence
 * displacement so it reads as pigment rather than vector.
 */
export default function BrushStroke({
  className,
  seed = 7,
  opacity = 1,
}: {
  className?: string
  seed?: number
  opacity?: number
}) {
  const id = `brush-${seed}`
  return (
    <svg
      viewBox="0 0 200 1000"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`${id}-rough`} x="-40%" y="-8%" width="180%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.09"
            numOctaves="3"
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="11"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <linearGradient id={`${id}-fill`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#e12a30" />
          <stop offset="55%" stopColor="#d4202a" />
          <stop offset="100%" stopColor="#9d1118" />
        </linearGradient>
      </defs>

      <g filter={`url(#${id}-rough)`} opacity={opacity}>
        {/* Main mark: loaded at the top, dragging dry toward the bottom. */}
        <path
          d="M74 8c26 4 44 22 48 52 6 44 2 90-2 134-8 88-14 176-10 264 3 68 10 136 6 204-2 38-9 78-27 110-7 12-18 22-30 18-10-4-12-18-10-30 8-44 16-88 18-132 4-86-4-172-8-258-4-86-2-172 6-256 3-32 6-66 9-98 1-6 2-10 0-8z"
          fill={`url(#${id}-fill)`}
        />
        {/* Second pass, slightly offset, where the brush reloaded. */}
        <path
          d="M118 96c14 40 18 86 16 130-4 74-16 148-16 222 0 44 4 88 4 132"
          stroke="#c11a22"
          strokeWidth="34"
          strokeLinecap="round"
          opacity="0.42"
        />
      </g>

      {/* Spatter — unfiltered so the specks stay crisp. */}
      <g fill="#c8191f" opacity={0.5 * opacity}>
        <ellipse cx="152" cy="236" rx="19" ry="27" />
        <ellipse cx="168" cy="330" rx="9" ry="13" />
        <circle cx="140" cy="404" r="5" />
        <circle cx="176" cy="196" r="3.5" />
        <ellipse cx="34" cy="520" rx="7" ry="11" />
        <circle cx="24" cy="612" r="3" />
      </g>
    </svg>
  )
}
