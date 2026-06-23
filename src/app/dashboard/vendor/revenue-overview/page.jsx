import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const RevenueOverview = async () => {
     const user=await verifyRole('vendor');
    return (
        <div>
            revenue overview
        </div>
    );
};

export default RevenueOverview; 