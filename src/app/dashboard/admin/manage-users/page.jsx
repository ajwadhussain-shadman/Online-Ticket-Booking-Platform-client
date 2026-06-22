import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const ManageUsers =async () => {
    const user=await verifyRole('admin');
    return (
        <div>
            manage users
        </div>
    );
};

export default ManageUsers;