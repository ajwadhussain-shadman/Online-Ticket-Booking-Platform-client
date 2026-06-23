import UpdateTicketForm from '@/components/dashboard-component/UpdateTicketForm';
import { getSingleTicket } from '@/lib/api/vendor';
import { verifyRole } from '@/lib/protected-route';
import React from 'react';

const UpdateTicket =async ({params}) => {
     const {id}= await params
     const user = await verifyRole("vendor");
     const ticket=await getSingleTicket(id);
    
    console.log(ticket)
    return (
        <div>
            ticket update section
            <UpdateTicketForm user={user} ticket={ticket} ></UpdateTicketForm>
        </div>
    );
};

export default UpdateTicket;