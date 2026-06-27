
import MyTicketCard from '@/components/dashboard-component/MyTicketCard';
import { getVendorTickets } from '@/lib/api/vendor-server';

import { verifyRole } from '@/lib/protected-route';
import { getAllTickets } from '@/lib/shared/getAllTickets';
import { Pagination } from '@heroui/react';
import Link from 'next/link';

import React from 'react';

const MyAddedTickets = async ({ searchParams }) => {
    const user = await verifyRole('vendor');
    const filters = await searchParams;
    const currentPage = Number(filters.page) || 1;
    const querySearch = new URLSearchParams(filters);
    querySearch.set("vendorId", `${user.id}`);
    querySearch.set("page", currentPage);
   
    const queryString = querySearch.toString();
    console.log(queryString);
    const ticketData = await getAllTickets(queryString);
    console.log("ticket data",ticketData)
    const tickets = ticketData.data;
        const totalPage = ticketData.totalPage;
        const pages = []
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i)
        }
   
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
                {tickets?.map((ticket) => (
                    <MyTicketCard key={ticket._id} ticket={ticket}></MyTicketCard>
                ))}
            </div>
             <div className="my-5">
                <Pagination size="xl" className="mt-10 justify-center">
                    <Pagination.Content>

                        <Pagination.Item>
                            <Pagination.Previous
                                isDisabled={currentPage === 1}
                            >
                                <Link
                                    href={`/dashboard/vendor/my-added-tickets?page=${currentPage-1}`}
                                    className="flex items-center gap-2"
                                >
                                    <Pagination.PreviousIcon />
                                    Prev
                                </Link>
                            </Pagination.Previous>
                        </Pagination.Item>

                        {pages.map((p) => (
                            <Pagination.Item key={p}>
                                <Link
                                href={`/dashboard/vendor/my-added-tickets?page=${p}`}
                                 >
                                    <Pagination.Link
                                        isActive={p === currentPage}
                                        className={
                                            p === currentPage
                                                ? "bg-cyan-500 text-white"
                                                : ""
                                        }
                                    >
                                        {p}
                                    </Pagination.Link>
                                </Link>
                            </Pagination.Item>
                        ))}

                        <Pagination.Item>
                            <Pagination.Next
                                isDisabled={currentPage === totalPage}
                            >
                                <Link
                                    href={`/dashboard/vendor/my-added-tickets?page=${currentPage+1}`}
                                    className="flex items-center gap-2"
                                >
                                    Next
                                    <Pagination.NextIcon />
                                </Link>
                            </Pagination.Next>
                        </Pagination.Item>

                    </Pagination.Content>
                </Pagination>
            </div>
        </div>
    );
};

export default MyAddedTickets;