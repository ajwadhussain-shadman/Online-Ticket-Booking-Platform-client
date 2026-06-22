import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const TransactionHistory = async () => {
    const user=await verifyRole('user');
    return (
        <div>
            Transaction History
        </div>
    );
};

export default TransactionHistory;