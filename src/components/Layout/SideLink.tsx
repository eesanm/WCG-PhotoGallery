/** @format */

import classNames from "classnames";
import Link from "next/link";

export interface SideLinkProps {
  id: string;
  slug: string;
  label: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const SideLink: React.FC<SideLinkProps> = ({
  id,
  slug,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <Link
      href={`/topic/${slug}`}
      className={classNames(
        "h-14 w-full flex items-center cursor-pointer px-6 py-4",
        { "bg-white text-black": isSelected }
      )}
      onClick={() => {
        onClick(id);
      }}
    >
      {label}
    </Link>
  );
};

export default SideLink;
