import type { Case } from '../../types/case';

interface Props {
  caseData: Case;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-slate-100 rounded-lg p-3 bg-slate-50/50">
      <div className="text-[11px] uppercase tracking-wider text-slate-muted font-semibold">
        {label}
      </div>
      <div className="text-sm text-slate-ink mt-1">{value}</div>
    </div>
  );
}

export function CustomerInfoTab({ caseData }: Props) {
  const { customer } = caseData;
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-nuffield-primary/15 text-nuffield-dark flex items-center justify-center font-semibold">
          {customer.name
            .split(' ')
            .map((p) => p[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <div className="text-lg font-semibold text-slate-ink">{customer.name}</div>
          <div className="text-sm text-slate-muted">{customer.id}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Membership Type" value={customer.membershipType} />
        <Field label="Customer Since" value={customer.customerSince} />
        <Field label="Email" value={customer.contact.email} />
        <Field label="Phone" value={customer.contact.phone} />
        <Field label="Preferred Contact Method" value={customer.preferredContactMethod} />
      </div>
    </div>
  );
}
