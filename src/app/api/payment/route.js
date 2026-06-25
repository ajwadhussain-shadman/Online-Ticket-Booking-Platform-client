import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';


export async function POST(req) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const booking= await req.json();

    // Create Checkout Sessions from body params.
   const session =
  await stripe.checkout.sessions.create({
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "bdt",

          product_data: {
            name: booking.ticketTitle,
          },

          unit_amount: booking.totalPrice*100,
        },

        quantity: 1,
      },
    ],
      metadata: {
    bookingId:booking._id,
ticketId:booking.ticketId,
userId:booking.userId,
bookingQuantity: booking.quantity,
ticketTitle:booking.ticketTitle,

vendorId:booking.vendorId
    },
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel`,
  });
   return NextResponse.json({url: session.url});
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}