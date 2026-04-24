import { cn } from "@/lib/utils";

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = "/",
}: LogoProps) {
  return (
    <a href={href} className={cn("flex items-center", className)}>
      <img
        src="/layout/maestro-logo.svg"
        alt="Maestro"
        width={116}
        height={18}
        className={cn(
          "h-[13px] w-auto object-contain md:h-[15px]",
          iconClassName,
          wordmarkClassName,
        )}
      />
    </a>
  );
}
