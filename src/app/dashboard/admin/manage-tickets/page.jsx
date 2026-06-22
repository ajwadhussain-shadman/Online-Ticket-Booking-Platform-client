import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const ManageTickets = async () => {
    const user=await verifyRole('admin');
    return (
        <div>
            manage tickets
        </div>
    );
};

export default ManageTickets;