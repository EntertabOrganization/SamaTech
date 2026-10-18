"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { ArrowRight } from "./Icons";

export interface DialogProps {
  open: boolean;
  /** Called on Escape, backdrop click, or when a footer action closes it. */
  onClose: () => void;
  title: string;
  description?: ReactNode;
  /** Extra content between the description and the footer. */
  children?: ReactNode;
  /** Usually <DialogActions />. */
  footer?: ReactNode;
  className?: string;
}

/**
 * Uses the native <dialog> element: focus is trapped, Escape closes it,
 * and everything behind it is inert while it is open.
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const uid = useId().replace(/:/g, "");
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      onClose={onClose}
      onClick={(event) => {
        // The inner wrapper fills the dialog, so a click that lands on the
        // <dialog> itself can only be a click on the backdrop.
        if (event.target === ref.current) onClose();
      }}
      className={cn(
        "m-auto w-[calc(100%-2rem)] max-w-lg rounded-panel border-0 bg-white p-0 text-left shadow-[0px_30px_80px_-20px_#0E182366]",
        "backdrop:bg-[#0E1823]/60 backdrop:backdrop-blur-[6px]",
        className,
      )}
    >
      <div className="p-8 sm:p-10">
        <h2 id={titleId} className="text-2xl font-bold tracking-tight text-[#0F1B2D]">
          {title}
        </h2>
        {description && (
          <p id={descId} className="mt-3 text-sm leading-relaxed text-ink-500">
            {description}
          </p>
        )}
        {children && <div className="mt-5">{children}</div>}
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </dialog>
  );
}

export interface DialogActionsProps {
  cancelLabel?: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
  /** Icon after the confirm label. Pass `null` for none. */
  confirmIcon?: ReactNode;
}

/** Cancel (text button) + primary pill button, right-aligned. */
export function DialogActions({
  cancelLabel = "Cancel",
  confirmLabel,
  onCancel,
  onConfirm,
  confirmIcon = <ArrowRight />,
}: DialogActionsProps) {
  return (
    <div className="flex items-center justify-end gap-6">
      <button
        type="button"
        onClick={onCancel}
        className="rounded-full px-1 text-sm font-medium text-blue-pulse transition-colors hover:text-blue-sovereign focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse focus-visible:ring-offset-2"
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onConfirm}
        className="inline-flex items-center gap-2 rounded-full bg-blue-pulse px-6 py-2.5 text-sm font-medium text-white shadow-[0px_10px_24px_-6px_#0078FF8C] transition-colors hover:bg-blue-sovereign focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse focus-visible:ring-offset-2"
      >
        {confirmLabel}
        {confirmIcon}
      </button>
    </div>
  );
}
