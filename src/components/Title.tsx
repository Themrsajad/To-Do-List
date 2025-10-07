export default function Title({ children }: { children: string }) {
  return (
    <div className="flex sm:justify-center sm:pl-0 py-7 sm:py-10 text-2xl sm:text-4xl font-bold no-select rtl:font-black text-dLight dark:text-bDark">
      {children}
    </div>
  );
}
