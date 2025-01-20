import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export default function FloatingButton({
  children,
  to,
}: {
  children: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="bg-dLight text-cLight dark:bg-bDark dark:text-cDark active:scale-95 delay-0 transition-all fixed right-[2vw] bottom-[2rem] flex items-center rtl:flex-row-reverse gap-x-3 font-semibold rtl:font-medium px-4 py-3 shadow-lg rounded-lg text-sm hover:brightness-95 no-select group"
    >
      <span className="fa">{children}</span>
      <ArrowRight
        size={16}
        className="transform duration-100 ease-in group-hover:translate-x-1"
      />
    </Link>
  );
}
