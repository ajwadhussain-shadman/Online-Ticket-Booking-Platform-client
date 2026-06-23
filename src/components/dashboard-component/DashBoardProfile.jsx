import Image from 'next/image';
import React from 'react';

const DashBoardProfile = ({user}) => {
    return (
        <div className="rounded-3xl border border-cyan-500/20 bg-[#091425] p-8">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src={
            user?.image ||
             "https://w7.pngwing.com/pngs/188/501/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png"
          }
          alt={user?.name}
          width={150}
          height={150}
          className="h-36 w-36 rounded-full border-4 border-cyan-500 object-cover"
        />

        <div className="grid flex-1 gap-5 md:grid-cols-2">
          <div>
            <p className="mb-1 text-sm text-gray-400">
              Full Name
            </p>

            <h3 className="text-lg font-semibold text-white">
              {user?.name}
            </h3>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">
              Email Address
            </p>

            <h3 className="text-lg font-semibold text-white">
              {user?.email}
            </h3>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">
              Role
            </p>

            <h3 className="text-lg font-semibold capitalize text-cyan-400">
              {user?.role}
            </h3>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-400">
              User ID
            </p>

            <h3 className="break-all text-sm text-white">
              {user?.id}
            </h3>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DashBoardProfile;