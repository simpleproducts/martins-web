/** Hand-drawn signature mark. Placeholder — swap for a traced scan of the real one. */
export default function Signature({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 76"
      fill="none"
      role="img"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      >
        <path
          d="M8 62C13 40 18 20 24 16c5-3 6 6 5 18-1 12-3 22 1 25 5 3 11-10 16-24 4-12 9-19 13-16 4 4 1 18 0 27-1 7 1 11 5 10 6-2 12-14 17-25"
          strokeWidth="2.1"
        />
        <path
          d="M86 55c4-9 9-18 13-18s3 10 2 17c0 5 2 8 6 6 5-3 9-12 13-21 3-7 7-11 9-8s0 12-1 18c-1 5 1 8 5 7 5-2 10-11 14-20"
          strokeWidth="2.1"
        />
        <path d="M150 34c6-2 13-4 19-7" strokeWidth="1.6" />
        <path
          d="M158 58c3-14 7-27 11-34 2-4 4-2 3 4-2 12-6 25-6 33 0 5 3 6 7 3 6-4 11-13 15-22"
          strokeWidth="2.1"
        />
        <path
          d="M196 56c3-10 7-19 10-19 3 0 2 8 2 13 0 4 2 6 5 4 5-3 9-11 13-19 3-6 7-9 9-6 2 4-1 13-2 19-1 5 1 8 5 7 6-2 13-12 18-23"
          strokeWidth="2.1"
        />
        <path d="M252 20c14 10 28 19 42 24-10 5-21 8-33 9" strokeWidth="1.5" opacity="0.85" />
      </g>
    </svg>
  )
}
