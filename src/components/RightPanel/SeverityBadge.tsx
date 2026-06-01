import type { Severity } from '../../types/case';
import { severityColors } from '../../theme';

interface Props {
  severity: Severity;
  size?: 'sm' | 'md';
}

export function SeverityBadge({ severity, size = 'md' }: Props) {
  const color = severityColors[severity];
  const pad = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wide ${pad}`}
      style={{
        backgroundColor: `${color}1A`, // 10% alpha
        color: color,
        border: `1px solid ${color}40`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {severity}
    </span>
  );
}
