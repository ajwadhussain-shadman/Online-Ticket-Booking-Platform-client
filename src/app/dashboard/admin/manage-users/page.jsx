import { verifyRole } from '@/lib/protected-route';
import React from 'react';
import UserRow from './UserRow';
import { getAllUsers } from '@/lib/user/getAllUsers';

const ManageUsers =async () => {
    const user=await verifyRole('admin');
    const users=await getAllUsers();
    return (
        <div className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#111827]/70 backdrop-blur">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[900px]">
      <thead>
        <tr className="border-b border-white/10 text-left text-sm uppercase tracking-wider text-gray-500">
          <th className="px-6 py-5">User</th>
          <th className="px-6 py-5">Email</th>
          <th className="px-6 py-5">Role</th>
          <th className="px-6 py-5">Status</th>
          <th className="px-6 py-5">Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>
    );
};

export default ManageUsers;