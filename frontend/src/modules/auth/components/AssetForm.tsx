import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assetSchema,
  type AssetFormData,
  ASSET_CATEGORIES,
  ASSET_CATEGORY_LABELS,
  categoryRequiresCapacity,
} from "../../modules/assets/schema";
import { useAssetForm } from "../../modules/assets/useAssetForm";

export default function AssetForm() {
  const { assetId } = useParams();
  const isEditing = Boolean(assetId);
  const { submit, serverError, isSubmitting } = useAssetForm(assetId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AssetFormData>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      category: undefined,
      yearOfManufacture: undefined,
    },
  });

  const category = watch("category");
  const showCapacity = categoryRequiresCapacity(category);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-8">
        <Link to="/trucks" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Back to trucks
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          {isEditing ? "Edit asset" : "Add a truck or trailer"}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          This information is used to match compliance documents to the right vehicle.
        </p>
      </div>

      <form onSubmit={handleSubmit(submit)} className="space-y-6" noValidate>
        {serverError && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Registration number" error={errors.registrationNumber?.message}>
            <input
              {...register("registrationNumber")}
              placeholder="KDA 123B"
              className={inputClass(errors.registrationNumber)}
            />
          </Field>

          <Field label="Chassis number" error={errors.chassisNumber?.message}>
            <input
              {...register("chassisNumber")}
              placeholder="JT131AB..."
              className={inputClass(errors.chassisNumber)}
            />
          </Field>

          <Field label="Asset category" error={errors.category?.message}>
            <select {...register("category")} className={inputClass(errors.category)}>
              <option value="">Select category</option>
              {ASSET_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {ASSET_CATEGORY_LABELS[cat]}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Assigned company / branch" error={errors.company?.message}>
            <input
              {...register("company")}
              placeholder="Company name"
              className={inputClass(errors.company)}
            />
          </Field>

          <Field label="Make" error={errors.make?.message}>
            <input
              {...register("make")}
              placeholder="Scania"
              className={inputClass(errors.make)}
            />
          </Field>

          <Field label="Model" error={errors.model?.message}>
            <input
              {...register("model")}
              placeholder="P410"
              className={inputClass(errors.model)}
            />
          </Field>

          <Field label="Year of manufacture" error={errors.yearOfManufacture?.message}>
            <input
              type="number"
              {...register("yearOfManufacture", { valueAsNumber: true })}
              placeholder="2019"
              className={inputClass(errors.yearOfManufacture)}
            />
          </Field>

          {showCapacity && (
            <Field label="Tanker capacity (litres)" error={errors.tankerCapacityLitres?.message}>
              <input
                type="number"
                {...register("tankerCapacityLitres", { valueAsNumber: true })}
                placeholder="30000"
                className={inputClass(errors.tankerCapacityLitres)}
              />
            </Field>
          )}
        </div>

        <Field label="Notes (optional)" error={errors.notes?.message}>
          <textarea
            {...register("notes")}
            rows={3}
            placeholder="Anything a compliance officer should know about this asset"
            className={inputClass(errors.notes)}
          />
        </Field>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            {isSubmitting ? "Saving…" : isEditing ? "Save changes" : "Add asset"}
          </button>
          <Link
            to="/trucks"
            className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

// --- Small local helpers ---------------------------------------------------

function inputClass(error?: unknown) {
  return [
    "mt-1 block w-full rounded-md border px-3 py-2 text-sm text-slate-900 shadow-sm",
    "focus:outline-none focus:ring-2 focus:ring-slate-400",
    error ? "border-red-400" : "border-slate-300",
  ].join(" ");
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  );
}
