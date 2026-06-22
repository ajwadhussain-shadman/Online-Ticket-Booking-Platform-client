import DashBoardProfile from '@/components/dashboard-component/DashBoardProfile';
import { verifyRole } from '@/lib/protected-route';
import Image from 'next/image';
import React from 'react';

const Profile = async () => {
    const user=await verifyRole('user');
    return (
        <div className="max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-white">
        My Profile
      </h1>

      <DashBoardProfile user={user}></DashBoardProfile>
    </div>
    );
};

export default Profile; 