type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
  return (
    <div className={dark ? "section-heading section-heading-dark" : "section-heading"}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
