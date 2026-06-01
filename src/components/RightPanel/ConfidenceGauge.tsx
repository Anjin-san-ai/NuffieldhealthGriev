interface Props {
  value: number; // 0-100
  size?: number;
}

export function ConfidenceGauge({ value, size = 120 }: Props) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  // Colour shifts from amber to green as confidence rises
  const colour = value >= 85 ? '#00A39E' : value >= 70 ? '#F59E0B' : '#EF4444';

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={colour}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 800ms ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-ink leading-none">
          {value}%
        </span>
        <span className="text-[10px] uppercase tracking-wider text-slate-muted mt-1">
          AI Confidence
        </span>
      </div>
    </div>
  );
}
