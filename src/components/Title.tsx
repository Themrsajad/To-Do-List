export default function Title({ children }: { children: string }) {
  return (
    <div className="flex justify-center py-10 text-4xl text-d font-bold no-select">
      {children}
    </div>
  );
}
