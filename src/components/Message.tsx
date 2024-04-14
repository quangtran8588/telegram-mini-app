interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Message({ children, className }: Props) {
  return <div className={className ? className : ""}>{children}</div>;
}
