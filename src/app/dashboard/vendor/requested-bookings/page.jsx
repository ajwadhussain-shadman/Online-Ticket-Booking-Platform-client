import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const RequestedBookings = async () => {
     const user=await verifyRole('vendor');
    return (
        <div>
            requested booking
        </div>
    );
};

export default RequestedBookings; async