
import { getVendorTickets } from '@/lib/api/vendor';
import { verifyRole } from '@/lib/protected-route';

import React from 'react';

const MyAddedTickets = async () => {

    const user = await verifyRole('vendor');
    const tickets = await getVendorTickets(user.id);
    console.log(tickets)
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">
                    My Added Tickets
                </h1>

                <p className="mt-2 text-gray-400">
                    Manage all tickets you have created
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {tickets.map((ticket) => (
                   <MyAddedTickets key={ticket._id} ticket={ticket}></MyAddedTickets>
                ))}
            </div>
        </div>
    );
};

export default MyAddedTickets;