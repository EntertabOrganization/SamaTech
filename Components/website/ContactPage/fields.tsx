import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { Icon, cn } from "@/Components/website/ui";
import MailIconSrc from "@/public/figma/input-mail.svg";
import ChevronIcon from "@/public/figma/select-chevron.svg";
import ArrowIcon from "@/public/figma/hero-arrow.svg";
import type { SubmitStatus } from "./useFormSubmit";

/** Envelope for the email inputs. */
export const MailIcon = () => (
  <Image src={MailIconSrc} alt="" width={18} height={18} className="-scale-y-100" />
);

const control =
  "w-full rounded-input border border-ink-200 bg-white text-body font-medium text-ink-900 placeholder:text-[#757575] transition-colors focus:border-blue-pulse focus:outline-none focus:ring-2 focus:ring-blue-pulse/20";

/** Label + control. The control sits inside the <label>, so no ids are needed. */
export function Field({
  label,
  children,
  className,
}: {
  label: string;
  /** Kept for the form's own validation; the design shows no marker. */
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-body-small font-bold leading-[1.65] text-ink-900">
        <Trans>{label}</Trans>
      </span>
      <Trans>{children}</Trans>
    </label>
  );
}

export function TextInput({
  icon,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { icon?: ReactNode }) {
  if (!icon) {
    return <input className={cn(control, "h-12 px-4.5", className)} {...props} />;
  }
  return (
    <span className="relative block">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute start-4 top-1/2 flex -translate-y-1/2"
      >
        <Trans>{icon}</Trans>
      </span>
      <input className={cn(control, "h-12 pe-4.5 ps-11.5", className)} {...props} />
    </span>
  );
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(control, "resize-none px-4.5 pt-3 leading-[1.65]", className)}
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
        className={cn(control, "h-12 appearance-none pe-11 ps-4 invalid:text-ink-300", className)}
        {...props}
      >
        <option value="" disabled>
          <Trans>{placeholder}</Trans>
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            <Trans>{option}</Trans>
          </option>
        ))}
      </select>
      <Image
        src={ChevronIcon}
        alt=""
        width={16}
        height={16}
        className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 -scale-y-100"
      />
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
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        className="mt-0.5 size-5 shrink-0 rounded-checkbox border-ink-200 accent-blue-pulse"
        {...props}
      />
      <span>
        <span className="block text-body-small font-semibold leading-[1.65] text-ink-900"><Trans>{label}</Trans></span>
        {hint && <span className="block text-[13px] font-medium leading-[21.45px] text-ink-500"><Trans>{hint}</Trans></span>}
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
      className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-pulse px-8 text-base font-bold tracking-[0.16px] text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)] transition-colors hover:bg-blue-sovereign focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Trans>{children}</Trans>
      {loading ? (
        <Icon name="spinner" size={19} />
      ) : (
        <Image src={ArrowIcon} alt="" width={19} height={19} className="directional-arrow" />
      )}
    </button>
  );
}

/** Small grey note under a form. */
export function FormNote({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-medium leading-[1.45] text-ink-300">
      <Trans>{children}</Trans>
    </p>
  );
}

/** Success / error message under the submit button. */
export function FormStatus({
  status,
  successMessage,
  errorMessage = "Something went wrong. Please try again, or email us directly.",
}: {
  status: SubmitStatus;
  successMessage: string;
  errorMessage?: string;
}) {
  if (status === "success") {
    return (
      <p role="status" className="rounded-input bg-[#E6F6EE] px-4 py-3 text-body-small text-[#1B7F4B]">
        <Trans>{successMessage}</Trans>
      </p>
    );
  }
  if (status === "error") {
    return (
      <p role="alert" className="rounded-input bg-[#FDECEC] px-4 py-3 text-body-small text-[#B42318]">
        <Trans>{errorMessage}</Trans>
      </p>
    );
  }
  return null;
}
