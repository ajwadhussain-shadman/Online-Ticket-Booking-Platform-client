"use client";

import toast from "react-hot-toast";
import { Button, Modal } from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { deleteTicket } from "@/lib/api/vendor-client";



const DeleteTicketModal = ({ ticketId , isDisabled}) => {
  const handleDelete = async () => {
    const result = await deleteTicket(ticketId);

    if (result?.deletedCount > 0) {
      toast.success("Ticket deleted successfully");
      window.location.reload();
    } else {
      toast.error("Failed to delete ticket");
    }
  };

  return (
    <Modal>
      <Button
        color="danger"
         isDisabled={isDisabled}
        className="w-full bg-red-500 rounded-xl py-3 font-medium "

      >
        Delete
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[420px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-500/20 text-red-500">
               <FaTrash className="size-4" />
              </Modal.Icon>

              <Modal.Heading>
                Delete Ticket
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-gray-400">
                Are you sure you want to delete this
                ticket? This action cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="outline"
                slot="close"
              >
                Cancel
              </Button>

              <Button
                color="danger"
                className='bg-red-500'
                onPress={handleDelete}
              >
                Delete Ticket
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteTicketModal;