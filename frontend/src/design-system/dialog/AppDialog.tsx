import type { ReactNode } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import { X } from "lucide-react";

export interface AppDialogProps {
  open: boolean;
  title: string;
  children: ReactNode;

  actions?: ReactNode;

  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";

  fullWidth?: boolean;

  onClose: () => void;
}

export default function AppDialog({
  open,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  onClose,
}: AppDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      slotProps={{
        paper: {
          className:
            "rounded-2xl border border-slate-200 shadow-2xl overflow-hidden",
        },
      }}
    >
      <DialogTitle className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>

        <IconButton
          size="small"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </IconButton>

      </DialogTitle>

      <DialogContent className="px-6 py-6">
        {children}
      </DialogContent>

      {actions && (
        <DialogActions className="border-t border-slate-200 px-6 py-4">
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}