import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardLink = ({href,children}) => {
     const pathName=usePathname();
       const isActive= href===pathName;
        return (
           <Link href={href}
           className={`"text-lg font-medium  " ${isActive ? "  text-cyan-400  shadow-cyan-500/10" : "transition-all duration-300 "}`}
           >
              {children}
           </Link>
    );
};

export default DashboardLink;