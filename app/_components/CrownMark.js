// Marca da CrownTech (mesma geometria de public/logo.svg), inline para não gerar requisição.
export default function CrownMark({ size = 32, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="100" height="100" rx="20" fill="#1D4ED8" />
      <rect x="20" y="62" width="60" height="11" rx="3" fill="#fff" />
      <polygon points="20,62 20,38 34,52 42,38" fill="#fff" />
      <polygon points="42,38 50,22 58,38 42,38" fill="#fff" />
      <polygon points="58,38 66,52 80,38 80,62" fill="#fff" />
      <circle cx="20" cy="38" r="5" fill="#F59E0B" />
      <circle cx="50" cy="22" r="5" fill="#F59E0B" />
      <circle cx="80" cy="38" r="5" fill="#F59E0B" />
    </svg>
  );
}
