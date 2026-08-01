import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import {
//   ASSET_CATEGORY_LABELS,
//   type AssetCategory,
//   type ComplianceStatus,
// } from "../../modules/assets/asset.schema";

type DocumentStatus =
  | "valid"
  | "approaching_expiry"
  | "expired"
  | "missing"
  | "awaiting_verification"
  | "archived";

interface ComplianceDocument {
  id: string;
  type: string; // e.g. "Vehicle Inspection Certificate"
  documentNumber: string | null;
  issuingAuthority: string | null;
  issueDate: string | null;
  expiryDate: string | null;
  status: DocumentStatus;
}

interface AssetProfileData {
  id: string;
  registrationNumber: string;
  category: AssetCategory;
  make: string;
  model: string;
  company: string;
  complianceStatus: ComplianceStatus;
  documents: ComplianceDocument[];
  requiredDocumentTypes: string[];
}

async function fetchAssetProfile(assetId: string): Promise<AssetProfileData> {
  const response = await fetch(`/api/assets/${assetId}`);
  if (!response.ok) throw new Error("Could not load this asset's compliance profile.");
  return response.json();
}

export default function AssetProfile() {
  const { assetId } = useParams();
  const [asset, setAsset] = useState<AssetProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!assetId) return;
    fetchAssetProfile(assetId)
      .then(setAsset)
      .catch((err) => setError(err.message));
  }, [assetId]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      </div>
    );
  }

  if (!asset) {
    return <div className="mx-auto max-w-3xl px-4 py-10 text-sm text-slate-500">Loading…</div>;
  }

  const missingTypes = asset.requiredDocumentTypes.filter(
    (type) => !asset.documents.some((doc) => doc.type === type && doc.status !== "archived")
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/trucks" className="text-sm text-slate-500 hover:text-slate-700">
        &larr; Back to trucks
      </Link>

      <div className="mt-2 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{asset.registrationNumber}</h1>
          <p className="mt-1 text-sm text-slate-500">
            {ASSET_CATEGORY_LABELS[asset.category]} · {asset.make} {asset.model} · {asset.company}
          </p>
        </div>
        <ComplianceBadge status={asset.complianceStatus} />
        <Link
          to={`/trucks/${asset.id}/edit`}
          className="ml-4 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Edit
        </Link>
      </div>

      {missingTypes.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-slate-900">Missing documents</h2>
          <ul className="mt-2 divide-y divide-slate-100 rounded-md border border-slate-200">
            {missingTypes.map((type) => (
              <li key={type} className="px-4 py-2.5 text-sm text-slate-700">
                {type}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-sm font-semibold text-slate-900">Documents</h2>
        <ul className="mt-2 divide-y divide-slate-100 rounded-md border border-slate-200">
          {asset.documents.map((doc) => (
            <li key={doc.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm font-medium text-slate-900">{doc.type}</p>
                <p className="text-xs text-slate-500">
                  {doc.documentNumber ?? "No document number"}
                  {doc.expiryDate ? ` · Expires ${doc.expiryDate}` : ""}
                </p>
              </div>
              <DocumentStatusBadge status={doc.status} />
            </li>
          ))}
          {asset.documents.length === 0 && (
            <li className="px-4 py-3 text-sm text-slate-500">No documents uploaded yet.</li>
          )}
        </ul>
      </section>
    </div>
  );
}

// --- Badges -----------------------------------------------------------------

const COMPLIANCE_STYLES: Record<ComplianceStatus, { label: string; className: string }> = {
  compliant: { label: "Compliant", className: "bg-green-100 text-green-800" },
  expiring_soon: { label: "Expiring soon", className: "bg-amber-100 text-amber-800" },
  non_compliant: { label: "Non-compliant", className: "bg-red-100 text-red-800" },
  incomplete: { label: "Incomplete records", className: "bg-slate-100 text-slate-700" },
};

function ComplianceBadge({ status }: { status: ComplianceStatus }) {
  const style = COMPLIANCE_STYLES[status];
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${style.className}`}>
      {style.label}
    </span>
  );
}

const DOCUMENT_STATUS_STYLES: Record<DocumentStatus, { label: string; className: string }> = {
  valid: { label: "Valid", className: "bg-green-100 text-green-800" },
  approaching_expiry: { label: "Approaching expiry", className: "bg-amber-100 text-amber-800" },
  expired: { label: "Expired", className: "bg-red-100 text-red-800" },
  missing: { label: "Missing", className: "bg-slate-100 text-slate-700" },
  awaiting_verification: { label: "Awaiting verification", className: "bg-blue-100 text-blue-800" },
  archived: { label: "Archived", className: "bg-slate-100 text-slate-500" },
};

function DocumentStatusBadge({ status }: { status: DocumentStatus }) {
  const style = DOCUMENT_STATUS_STYLES[status];
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.className}`}>
      {style.label}
    </span>
  );
}
