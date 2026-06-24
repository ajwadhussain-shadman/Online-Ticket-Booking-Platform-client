"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { FaTicketAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { createBooking } from "@/lib/shared/ticket/createBooking";

const BookTicketModal = ({ ticket, user }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPrice = quantity * ticket.price;

  const handleBooking = async () => {
    if (quantity < 1) {
      return toast.error(
        "Quantity must be at least 1"
      );
    }

    if (quantity > ticket.quantity) {
      return toast.error(
        `Only ${ticket.quantity} tickets available`
      );
    }

    setLoading(true);

    try {
      const bookingData = {
        ticketId: ticket._id,
        ticketTitle: ticket.title,
        ticketImage: ticket.image,

        vendorId: ticket.vendorId,

        userId: user.id,
        userName: user.name,
        userEmail: user.email,

        quantity,

        unitPrice: ticket.price,

        totalPrice,

        departureDateTime:
          ticket.departureDateTime,
      };

      console.log(bookingData);

      const result = await createBooking(bookingData);

      toast.success(
        "Booking request submitted"
      );
    } catch (error) {
      toast.error(
        "Failed to submit booking"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button
        className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white hover:bg-cyan-600"
      >
        Book Now
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[450px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-cyan-500/20 text-cyan-400">
                <FaTicketAlt className="size-4" />
              </Modal.Icon>

              <Modal.Heading>
                Book Ticket
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>

              <div className="space-y-5">

                <div>
                  <p className="text-sm text-gray-400">
                    Ticket
                  </p>

                  <h3 className="font-semibold">
                    {ticket.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Route
                  </p>

                  <h3 className="font-semibold">
                    {ticket.from} → {ticket.to}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Available Tickets
                  </p>

                  <h3 className="font-semibold text-cyan-400">
                    {ticket.quantity}
                  </h3>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Booking Quantity
                  </label>

                  <input
                    type="number"
                    min="1"
                    max={ticket.quantity}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="rounded-xl bg-[#0D1B2A] p-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Unit Price
                    </span>

                    <span>
                      ৳{ticket.price}
                    </span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-400">
                      Total Price
                    </span>

                    <span className="font-bold text-cyan-400">
                      ৳{totalPrice}
                    </span>
                  </div>
                </div>

              </div>

            </Modal.Body>

            <Modal.Footer>

              <Button
                variant="outline"
                slot="close"
              >
                Cancel
              </Button>

              <Button
                onPress={handleBooking}
                disabled={loading}
                className="bg-cyan-500 text-white"
              >
                {loading
                  ? "Booking..."
                  : "Confirm Booking"}
              </Button>

            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookTicketModal;