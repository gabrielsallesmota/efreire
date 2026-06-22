type EyebrowProps = {
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
};

export function Eyebrow({ children, center }: EyebrowProps) {
  return (
    <div
      className={
        "mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand" +
        (center ? " text-center" : "")
      }
    >
      {children}
    </div>
  );
}

type TitleProps = {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionTitle({ children, center, className }: TitleProps) {
  return (
    <h2
      className={
        "text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-ink" +
        (center ? " mx-auto max-w-[720px] text-center" : " max-w-[600px]") +
        (className ? " " + className : "")
      }
    >
      {children}
    </h2>
  );
}

type SubtitleProps = {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionSubtitle({ children, center, className }: SubtitleProps) {
  return (
    <p
      className={
        "mt-3.5 text-base leading-[1.75] text-muted-ink" +
        (center ? " mx-auto max-w-[540px] text-center" : " max-w-[540px]") +
        (className ? " " + className : "")
      }
    >
      {children}
    </p>
  );
}
