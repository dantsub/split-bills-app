type Props = {
  isLink?: boolean;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export default function Btn({
  isLink,
  className,
  children,
  ...props
}: Props) {
  const classes = className?.concat(" btn-neon") || "btn-neon";
  return isLink ? (
    <a className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button className={classes} {...props}>{children}</button>
  );
}
