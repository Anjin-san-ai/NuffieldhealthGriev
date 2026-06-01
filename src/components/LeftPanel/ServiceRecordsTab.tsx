import Chip from '@mui/material/Chip';
import type {
  Case,
  GymServiceRecords,
  HealthcareServiceRecords,
  InsuranceServiceRecords,
} from '../../types/case';
import { Timeline } from '../common/Timeline';

interface Props {
  caseData: Case;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-muted mb-2">
      {children}
    </h4>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number | null)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-semibold text-slate-ink px-3 py-2 border-b border-slate-200 text-xs"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-slate-ink align-top">
                  {cell ?? <span className="text-slate-muted">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HealthcareRecords({ records }: { records: HealthcareServiceRecords }) {
  return (
    <div className="space-y-6">
      <div>
        <SectionHeading>Consultations</SectionHeading>
        <Table
          headers={['Date', 'Consultant', 'Speciality', 'Notes']}
          rows={records.consultations.map((c) => [
            c.date,
            c.consultant,
            c.speciality,
            c.notes,
          ])}
        />
      </div>
      <div>
        <SectionHeading>Appointments</SectionHeading>
        <Table
          headers={['Date', 'Type', 'Location', 'Status']}
          rows={records.appointments.map((a) => [a.date, a.type, a.location, a.status])}
        />
      </div>
      <div>
        <SectionHeading>Diagnostic Tests</SectionHeading>
        <Table
          headers={['Date', 'Test', 'Location', 'Results Available', 'Expected Turnaround']}
          rows={records.diagnosticTests.map((d) => [
            d.date,
            d.test,
            d.location,
            d.resultsAvailable,
            d.expectedTurnaround,
          ])}
        />
      </div>
      <div>
        <SectionHeading>Referrals</SectionHeading>
        <Table
          headers={['Date', 'From', 'To', 'Reason']}
          rows={records.referrals.map((r) => [r.date, r.from, r.to, r.reason])}
        />
      </div>
      <div>
        <SectionHeading>Treatment Timeline</SectionHeading>
        <Timeline events={records.treatmentTimeline} />
      </div>
    </div>
  );
}

function GymRecords({ records }: { records: GymServiceRecords }) {
  return (
    <div className="space-y-6">
      <div>
        <SectionHeading>Membership Activity</SectionHeading>
        <Table
          headers={['Date', 'Activity']}
          rows={records.membershipActivity.map((m) => [m.date, m.activity])}
        />
      </div>
      <div>
        <SectionHeading>Access Logs</SectionHeading>
        <Table
          headers={['Date', 'Location', 'Duration (min)']}
          rows={records.accessLogs.map((a) => [a.date, a.location, a.durationMinutes])}
        />
      </div>
      <div>
        <SectionHeading>Membership Changes</SectionHeading>
        <Table
          headers={['Date', 'Change', 'Initiated By']}
          rows={records.membershipChanges.map((m) => [m.date, m.change, m.initiatedBy])}
        />
      </div>
      <div>
        <SectionHeading>Cancellation Requests</SectionHeading>
        <Table
          headers={['Date', 'Channel', 'Reference', 'Acknowledged', 'Ack Date']}
          rows={records.cancellationRequests.map((c) => [
            c.date,
            c.channel,
            c.reference,
            c.acknowledged ? 'Yes' : 'No',
            c.acknowledgmentDate,
          ])}
        />
      </div>
    </div>
  );
}

function InsuranceRecords({ records }: { records: InsuranceServiceRecords }) {
  const r = records.referral;
  const t = records.treatmentRequest;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
          <SectionHeading>Consultant Referral</SectionHeading>
          <dl className="text-sm text-slate-ink space-y-1.5">
            <div><span className="text-slate-muted text-xs">Date:</span> {r.date}</div>
            <div><span className="text-slate-muted text-xs">Consultant:</span> {r.consultant}</div>
            <div><span className="text-slate-muted text-xs">Speciality:</span> {r.speciality}</div>
            <div><span className="text-slate-muted text-xs">Diagnosis:</span> {r.diagnosis}</div>
            <div><span className="text-slate-muted text-xs">Recommended:</span> {r.recommendedTreatment}</div>
          </dl>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
          <SectionHeading>Treatment Request</SectionHeading>
          <dl className="text-sm text-slate-ink space-y-1.5">
            <div><span className="text-slate-muted text-xs">Date:</span> {t.date}</div>
            <div><span className="text-slate-muted text-xs">Provider:</span> {t.provider}</div>
            <div><span className="text-slate-muted text-xs">Type:</span> {t.treatmentType}</div>
            <div><span className="text-slate-muted text-xs">Sessions:</span> {t.sessionsRequested}</div>
            <div><span className="text-slate-muted text-xs">Estimated Cost:</span> {t.estimatedCost}</div>
          </dl>
        </div>
      </div>

      <div>
        <SectionHeading>Claim History</SectionHeading>
        <Table
          headers={['Date', 'Reference', 'Status', 'Amount', 'Notes']}
          rows={records.claims.map((c) => [c.date, c.reference, c.status, c.amount, c.notes])}
        />
      </div>

      <div>
        <SectionHeading>Prior Authorisations</SectionHeading>
        <div className="space-y-2">
          {records.priorAuthorisations.map((pa, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3"
            >
              <div>
                <div className="text-sm text-slate-ink font-medium">{pa.treatment}</div>
                <div className="text-xs text-slate-muted">
                  {pa.date} · Ref: {pa.reference ?? '—'}
                </div>
              </div>
              <Chip
                label={pa.status}
                size="small"
                color={
                  pa.status === 'Approved'
                    ? 'success'
                    : pa.status === 'Declined' || pa.status === 'Not Submitted'
                      ? 'error'
                      : 'warning'
                }
                variant="outlined"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceRecordsTab({ caseData }: Props) {
  const records = caseData.serviceRecords;
  switch (records.kind) {
    case 'healthcare':
      return <HealthcareRecords records={records} />;
    case 'gym':
      return <GymRecords records={records} />;
    case 'insurance':
      return <InsuranceRecords records={records} />;
  }
}
