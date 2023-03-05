import { PropsWithChildren } from "react";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-16 flex relative items-center shrink-0 bg-cyan-900 py-2 px-4 text-white">
      {children}
    </div>
  );
};

export default Header;
