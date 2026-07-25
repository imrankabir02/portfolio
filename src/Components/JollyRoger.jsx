/* Straw-hat skull emblem — the crew's Jolly Roger. Pure SVG, currentColor-driven. */
const JollyRoger = ({ size = 40, className = "", title = "Jolly Roger" }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    role="img"
    aria-label={title}
    fill="none"
  >
    <title>{title}</title>

    {/* crossed bones behind the skull */}
    <g stroke="currentColor" strokeWidth="6.5" strokeLinecap="round">
      <line x1="22" y1="60" x2="78" y2="94" />
      <line x1="78" y1="60" x2="22" y2="94" />
    </g>
    {/* bone knobs */}
    <g fill="currentColor">
      <circle cx="20" cy="58" r="5.5" />
      <circle cx="20" cy="66" r="5.5" />
      <circle cx="80" cy="58" r="5.5" />
      <circle cx="80" cy="66" r="5.5" />
      <circle cx="20" cy="90" r="5.5" />
      <circle cx="20" cy="98" r="5.5" />
      <circle cx="80" cy="90" r="5.5" />
      <circle cx="80" cy="98" r="5.5" />
    </g>

    {/* skull */}
    <g fill="currentColor">
      <path d="M50 30c-16 0-27 11-27 26 0 9 4 15 10 19 2 1 3 3 3 5v3c0 2 1 3 3 3h22c2 0 3-1 3-3v-3c0-2 1-4 3-5 6-4 10-10 10-19 0-15-11-26-27-26z" />
    </g>
    {/* eye sockets + nose knocked out of the skull */}
    <g fill="#04121f">
      <ellipse cx="39" cy="57" rx="7.5" ry="8.5" />
      <ellipse cx="61" cy="57" rx="7.5" ry="8.5" />
      <path d="M50 66l4 8h-8z" />
    </g>

    {/* straw hat: brim + crown + red band */}
    <ellipse cx="50" cy="30" rx="40" ry="10" fill="currentColor" />
    <path d="M28 30c0-13 9-21 22-21s22 8 22 21z" fill="currentColor" />
    <path d="M28 29c2-5 10-8 22-8s20 3 22 8z" fill="#c1272d" />
  </svg>
);

export default JollyRoger;
