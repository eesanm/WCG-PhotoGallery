/** @format */

import classNames from "classnames";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export interface HamburgerProps {
  isSideBarHidden: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({
  isSideBarHidden,
  onClick,
  className,
}) => {
  return (
    <div onClick={onClick} className={classNames("cursor-pointer", className)}>
      {isSideBarHidden && <IoIosMenu size={30} />}
      {!isSideBarHidden && <IoClose size={30} />}
    </div>
  );
};

export default Hamburger;
