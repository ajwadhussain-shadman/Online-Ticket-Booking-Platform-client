import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const AdvertiseTickets = async () => {
    const user=await verifyRole('admin');
    return (
        <div>
            advertise tickets
        </div>
    );
};

export default AdvertiseTickets;