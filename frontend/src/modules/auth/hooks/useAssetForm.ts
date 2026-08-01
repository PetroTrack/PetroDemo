import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AssetFormData } from "./schema";

async function saveAsset(data: AssetFormData, assetId?: string) {
  const response = await fetch(assetId ? `/api/assets/${assetId}` : "/api/assets", {
    method: assetId ? "PATCH" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.message ?? "Could not save this asset. Try again.");
  }

  return response.json() as Promise<{ id: string }>;
}

export function useAssetForm(assetId?: string) {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(data: AssetFormData) {
    setServerError(null);
    setIsSubmitting(true);
    try {
      const saved = await saveAsset(data, assetId);
      navigate(`/trucks/${saved.id}`);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, serverError, isSubmitting };
}
