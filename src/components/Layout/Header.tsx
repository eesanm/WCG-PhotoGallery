import { PropsWithChildren } from "react";



const Header: React.FC<PropsWithChildren> = ({ children }) => {
    return ( 
        <div className="h-14 flex items-center shrink-0 bg-slate-500 py-2 px-4 border-b border-gray-300 ">
            {children}
        </div>
    );
}

export default Header;