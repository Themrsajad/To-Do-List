export default function Title({ children }: { children: string }) {
  return (
    <div className="flex justify-center py-10 text-4xl font-bold no-select rtl:font-black text-dLight dark:text-bDark">
      {children}
    </div>
  );
}
