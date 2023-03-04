/** @format */

import { IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export interface HamburgerProps {
  isSideBarHidden: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isSideBarHidden, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {isSideBarHidden && <IoIosMenu size={30} />}
      {!isSideBarHidden && <IoClose size={30} />}
    </div>
  );
};

export default Hamburger;
