import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const MyBookedTickets =async () => {
    const user=await verifyRole('user');
    return (
        <div>
            my booked tickets
        </div>
    );
};

export default MyBookedTickets;