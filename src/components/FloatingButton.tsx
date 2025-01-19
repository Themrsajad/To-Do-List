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
      className="fixed right-[2vw] bottom-[2rem] flex items-center rtl:flex-row-reverse  gap-x-3 bg-a text-d font-semibold rtl:font-medium px-4 py-3 shadow-md rounded-lg text-sm hover:brightness-95 no-select group"
    >
      {children}
      <ArrowRight
        size={16}
        className="transform duration-100 ease-in group-hover:translate-x-1"
      />
    </Link>
  );
}
