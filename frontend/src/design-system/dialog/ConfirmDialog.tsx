import { TriangleAlert } from "lucide-react";

import { AppButton } from "../button";
import AppDialog from "./AppDialog";

export interface ConfirmDialogProps {
  open: boolean;

  title: string;

  message: string;

  confirmText?: string;

  cancelText?: string;

  confirmVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";

  loading?: boolean;

  onConfirm: () => void;

  onClose: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,

  confirmText = "Confirm",

  cancelText = "Cancel",

  confirmVariant = "primary",

  loading = false,

  onConfirm,

  onClose,
}: ConfirmDialogProps) {
  return (
    <AppDialog
      open={open}
      title={title}
      onClose={onClose}
      maxWidth="xs"
      actions={
        <>
          <AppButton
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </AppButton>

          <AppButton
            variant={confirmVariant}
            loading={loading}
            onClick={onConfirm}
          >
            {confirmText}
          </AppButton>
        </>
      }
    >
      <div className="flex flex-col items-center py-2 text-center">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <TriangleAlert
            size={34}
            className="text-amber-600"
          />
        </div>

        <p className="text-base text-slate-600">
          {message}
        </p>

      </div>
    </AppDialog>
  );
}