import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { Icon, cn } from "@/Components/website/ui";
import type { SubmitStatus } from "./useFormSubmit";

/** Envelope for the email inputs. Not in the icon set yet, so it stays local. */
export const MailIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const control =
  "w-full rounded-lg border border-ink-100 bg-white text-xs text-ink-900 placeholder:text-slate-400 transition-colors focus:border-[#0078FF] focus:outline-none focus:ring-2 focus:ring-[#0078FF]/20";

/** Label + control. The control sits inside the <label>, so no ids are needed. */
export function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-[10px] font-semibold text-[#0F1B2D]">
        {label}
        {required && (
          <span aria-hidden="true" className="text-blue-pulse">
            {" "}
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

export function TextInput({
  icon,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { icon?: ReactNode }) {
  if (!icon) {
    return <input className={cn(control, "h-9 px-3", className)} {...props} />;
  }
  return (
    <span className="relative block">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      >
        {icon}
      </span>
      <input className={cn(control, "h-9 pl-9 pr-3", className)} {...props} />
    </span>
  );
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(control, "resize-none px-3 py-2.5 leading-relaxed", className)}
      {...props}
    />
  );
}

export function SelectInput({
  placeholder,
  options,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder: string;
  options: string[];
}) {
  return (
    <span className="relative block">
      <select
        defaultValue=""
        className={cn(control, "h-9 appearance-none pl-3 pr-8 invalid:text-slate-400", className)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      >
        <Icon name="chevron-down" size={14} />
      </span>
    </span>
  );
}

export function Checkbox({
  label,
  hint,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  hint?: string;
}) {
  return (
    <label className="flex items-start gap-2.5">
      <input
        type="checkbox"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-ink-100 accent-[#0078FF]"
        {...props}
      />
      <span>
        <span className="block text-[11px] font-medium text-[#0F1B2D]">{label}</span>
        {hint && <span className="mt-0.5 block text-[10px] text-slate-400">{hint}</span>}
      </span>
    </label>
  );
}

export function SubmitButton({
  children,
  loading,
  disabled,
}: {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0078FF] px-6 py-3 text-sm font-semibold text-white shadow-[0px_10px_24px_-6px_#0078FF8C] transition-colors hover:bg-[#005BC2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078FF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
      {loading ? <Icon name="spinner" size={16} /> : <Icon name="arrow-right" size={16} />}
    </button>
  );
}

/** Success / error message under the submit button. */
export function FormStatus({
  status,
  successMessage,
}: {
  status: SubmitStatus;
  successMessage: string;
}) {
  if (status === "success") {
    return (
      <p role="status" className="rounded-lg bg-[#E6F6EE] px-3 py-2 text-[11px] text-[#1B7F4B]">
        {successMessage}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className="rounded-lg bg-[#FDECEC] px-3 py-2 text-[11px] text-[#B42318]">
        Something went wrong. Please try again, or email us directly.
      </p>
    );
  }
  return null;
}
