
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName=usePathname();
   const isActive= href===pathName;
    return (
       <Link href={href}
       className={`"text-lg font-medium " ${isActive ? "rounded-full px-6 py-2   border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10" : "transition-all duration-300 "}`}
       >
          {children}
       </Link>
    );
};

export default NavLink;