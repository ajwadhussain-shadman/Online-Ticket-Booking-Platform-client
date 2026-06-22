import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const MyAddedTickets = async () => {
     const user=await verifyRole('vendor');
    return (
        <div>
            my added tickets
        </div>
    );
};

export default MyAddedTickets;