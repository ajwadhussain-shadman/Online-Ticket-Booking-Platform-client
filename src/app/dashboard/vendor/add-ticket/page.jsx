import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const AddTicket = async () => {
    const user=await verifyRole('vendor');
    return (
        <div>
            add ticket
        </div>
    );
};

export default AddTicket; 