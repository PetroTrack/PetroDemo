interface Props {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}