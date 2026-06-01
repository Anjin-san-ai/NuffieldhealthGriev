import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import type { Case } from '../../types/case';

interface Props {
  caseData: Case;
}

function Section({
  icon,
  title,
  count,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  if (count === 0) {
    return (
      <div>
        <div className="flex items-center gap-2 text-slate-muted mb-2">
          {icon}
          <h4 className="text-xs font-semibold uppercase tracking-wider">
            {title} ({count})
          </h4>
        </div>
        <div className="text-sm text-slate-muted italic px-2">None on file.</div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center gap-2 text-nuffield-dark mb-2">
        {icon}
        <h4 className="text-xs font-semibold uppercase tracking-wider">
          {title} ({count})
        </h4>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export function EvidenceTab({ caseData }: Props) {
  const { emails, chats, calls, documents, internalNotes } = caseData.evidence;

  return (
    <div className="space-y-6">
      <Section icon={<EmailIcon fontSize="small" />} title="Emails" count={emails.length}>
        {emails.map((e, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-white">
            <div className="flex items-center justify-between gap-2 text-xs text-slate-muted">
              <span>{e.date}</span>
              <span className="truncate">From: {e.from}</span>
            </div>
            <div className="text-sm font-semibold text-slate-ink mt-1">{e.subject}</div>
            <div className="text-sm text-slate-ink mt-1 leading-relaxed">{e.excerpt}</div>
          </div>
        ))}
      </Section>

      <Section icon={<ChatIcon fontSize="small" />} title="Chat Transcripts" count={chats.length}>
        {chats.map((c, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-white">
            <div className="flex items-center justify-between text-xs text-slate-muted">
              <span>{c.date}</span>
              <span>{c.agent}</span>
            </div>
            <div className="text-sm text-slate-ink mt-1 leading-relaxed">{c.excerpt}</div>
          </div>
        ))}
      </Section>

      <Section icon={<CallIcon fontSize="small" />} title="Call Summaries" count={calls.length}>
        {calls.map((c, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-white">
            <div className="flex items-center justify-between text-xs text-slate-muted">
              <span>{c.date} · {c.duration}</span>
              <span>{c.agent}</span>
            </div>
            <div className="text-sm text-slate-ink mt-1 leading-relaxed">{c.summary}</div>
          </div>
        ))}
      </Section>

      <Section
        icon={<DescriptionIcon fontSize="small" />}
        title="Uploaded Documents"
        count={documents.length}
      >
        {documents.map((d, i) => (
          <div
            key={i}
            className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-white"
          >
            <div>
              <div className="text-sm font-medium text-slate-ink">{d.name}</div>
              <div className="text-xs text-slate-muted">{d.type}</div>
            </div>
            <div className="text-xs text-slate-muted">{d.uploadedOn}</div>
          </div>
        ))}
      </Section>

      <Section
        icon={<NoteAltIcon fontSize="small" />}
        title="Internal Notes"
        count={internalNotes.length}
      >
        {internalNotes.map((n, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3 bg-amber-50/40">
            <div className="flex items-center justify-between text-xs text-slate-muted">
              <span>{n.date}</span>
              <span>{n.author}</span>
            </div>
            <div className="text-sm text-slate-ink mt-1 leading-relaxed">{n.note}</div>
          </div>
        ))}
      </Section>
    </div>
  );
}
