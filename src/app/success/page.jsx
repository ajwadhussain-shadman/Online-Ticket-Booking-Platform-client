import { createPayment } from '@/lib/payment/createPayment';
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'


export default async function Success({ searchParams }) {
  const { session_id } = await searchParams
    
  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session =
  await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: [
        "line_items",
        "payment_intent",
      ],
    }
  );

const status = session.status;

const customerEmail =
  session.customer_details?.email;
  console.log(session.payment_intent);

console.log( session.metadata);

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const {bookingId,ticketId,userId,bookingQuantity,ticketTitle,vendorId}=session.metadata;
    const paymentData={
        bookingId:bookingId,
        ticketId:ticketId,
        vendorId:vendorId,
        userId:userId,
        ticketTitle:ticketTitle,
        bookingQuantity:bookingQuantity,
        amount: session.amount_total/100,
        stripeSessionId:session.id,
        transactionId: session.payment_intent.id
    }
    console.log(paymentData);
    console.log('session:', session)
    await createPayment(paymentData);
    return (
      <section id="success">
      <div className="flex min-h-screen items-center justify-center bg-[#07111F] px-4">
  <div className="w-full max-w-md rounded-3xl border border-green-500/20 bg-[#091425] p-8 text-center">
    
    <div className="mb-4 text-6xl">
      ✅
    </div>

    <h1 className="text-3xl font-bold text-white">
      Payment Successful
    </h1>

    <p className="mt-3 text-gray-400">
      Your ticket booking has been confirmed.
    </p>

    <div className="mt-6 rounded-2xl bg-[#0D1B2A] p-4">
      <p className="text-sm text-gray-400">
        Email
      </p>

      <p className="mt-1 text-cyan-400">
        {customerEmail}
      </p>
    </div>

    <a
      href="/dashboard/user/my-booked-tickets"
      className="mt-6 inline-block w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white"
    >
      Go To My Bookings
    </a>
  </div>
</div>
      </section>
    )
  }
}