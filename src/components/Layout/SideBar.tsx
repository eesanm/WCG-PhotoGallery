/** @format */

import SideLink, { SideLinkProps } from "./SideLink";

export interface SideBarProps {
  sideLinks: SideLinkProps[];
}

const SideBar: React.FC<SideBarProps> = ({ sideLinks }) => {
  return (
    <div className="shrink-0 w-72 bg-cyan-700 overflow-y-auto text-white font-semibold">
      {sideLinks.map((link) => (
        <SideLink key={link.id} {...link} />
      ))}
    </div>
  );
};

export default SideBar;
