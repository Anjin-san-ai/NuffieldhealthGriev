export type Decision =
  | 'Uphold Complaint'
  | 'Partially Uphold Complaint'
  | 'Reject Complaint';

export type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
export type RiskLevel = Severity;

export type CaseType =
  | 'Private Healthcare'
  | 'Gym Membership'
  | 'Insurance Claim';

export type CaseStatus = 'Open' | 'Under Review' | 'Resolved';

export interface Complaint {
  description: string;
  category: string;
  dateRaised: string; // ISO date
  status: CaseStatus;
  assignedReviewer: string;
  customerImpactSummary: string;
}

export interface Customer {
  name: string;
  id: string;
  membershipType: string;
  contact: { email: string; phone: string };
  customerSince: string;
  preferredContactMethod: string;
}

export interface Consultation {
  date: string;
  consultant: string;
  speciality: string;
  notes: string;
}
export interface Appointment {
  date: string;
  type: string;
  location: string;
  status: string;
}
export interface DiagnosticTest {
  date: string;
  test: string;
  location: string;
  resultsAvailable: string | null;
  expectedTurnaround: string;
}
export interface Referral {
  date: string;
  from: string;
  to: string;
  reason: string;
}
export interface TimelineEvent {
  date: string;
  event: string;
  detail?: string;
}

export interface HealthcareServiceRecords {
  kind: 'healthcare';
  consultations: Consultation[];
  appointments: Appointment[];
  diagnosticTests: DiagnosticTest[];
  referrals: Referral[];
  treatmentTimeline: TimelineEvent[];
}

export interface MembershipActivity {
  date: string;
  activity: string;
}
export interface AccessLog {
  date: string;
  location: string;
  durationMinutes: number;
}
export interface MembershipChange {
  date: string;
  change: string;
  initiatedBy: string;
}
export interface CancellationRequest {
  date: string;
  channel: string;
  reference: string;
  acknowledged: boolean;
  acknowledgmentDate: string | null;
}

export interface GymServiceRecords {
  kind: 'gym';
  membershipActivity: MembershipActivity[];
  accessLogs: AccessLog[];
  membershipChanges: MembershipChange[];
  cancellationRequests: CancellationRequest[];
}

export interface InsuranceReferral {
  date: string;
  consultant: string;
  speciality: string;
  diagnosis: string;
  recommendedTreatment: string;
}
export interface TreatmentRequest {
  date: string;
  provider: string;
  treatmentType: string;
  sessionsRequested: number;
  estimatedCost: string;
}
export interface ClaimRecord {
  date: string;
  reference: string;
  status: string;
  amount: string;
  notes: string;
}
export interface PriorAuthorisation {
  date: string;
  treatment: string;
  status: 'Approved' | 'Declined' | 'Pending' | 'Not Submitted';
  reference: string | null;
}

export interface InsuranceServiceRecords {
  kind: 'insurance';
  referral: InsuranceReferral;
  treatmentRequest: TreatmentRequest;
  claims: ClaimRecord[];
  priorAuthorisations: PriorAuthorisation[];
}

export type ServiceRecords =
  | HealthcareServiceRecords
  | GymServiceRecords
  | InsuranceServiceRecords;

export interface Policy {
  id: string;
  title: string;
  excerpt: string;
}

export interface EmailEvidence {
  date: string;
  from: string;
  to: string;
  subject: string;
  excerpt: string;
}
export interface ChatEvidence {
  date: string;
  agent: string;
  excerpt: string;
}
export interface CallEvidence {
  date: string;
  duration: string;
  agent: string;
  summary: string;
}
export interface DocumentEvidence {
  name: string;
  type: string;
  uploadedOn: string;
}
export interface InternalNote {
  date: string;
  author: string;
  note: string;
}

export interface Evidence {
  emails: EmailEvidence[];
  chats: ChatEvidence[];
  calls: CallEvidence[];
  documents: DocumentEvidence[];
  internalNotes: InternalNote[];
}

export interface Insight {
  title: string;
  description: string;
  riskLevel: RiskLevel;
}

export interface EvidenceWeight {
  source: string;
  weight: number; // percentage
}

export interface Recommendation {
  decision: Decision;
  confidenceScore: number; // 0-100
  severity: Severity;
  justification: {
    serviceAssessment: string;
    customerImpact: string;
    policyReview: string;
  };
  recommendedActions: string[];
  insights: Insight[];
  explainability: {
    evidenceReviewed: string[];
    evidenceWeighting: EvidenceWeight[];
  };
}

export interface Case {
  caseId: string;
  caseType: CaseType;
  complaint: Complaint;
  customer: Customer;
  serviceRecords: ServiceRecords;
  policies: Policy[];
  evidence: Evidence;
  recommendation: Recommendation;
}
