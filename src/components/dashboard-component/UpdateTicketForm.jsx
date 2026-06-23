"use client";

import React, { useState } from "react";
import TransportTypeSelector from "./TransportTypeSelector";
import { uploadImage } from "@/lib/uploadImage";
import toast from "react-hot-toast";
import { updateTicket } from "@/lib/api/vendor";
import { redirect } from "next/navigation";

const UpdateTicketForm = ({ user, ticket}) => {
  
  console.log(ticket)
  const [transportType, setTransportType] = useState(
    ticket?.transportType || ""
  );

  const [perks, setPerks] = useState(
    ticket?.perks || []
  );

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handlePerkChange = (perk) => {
    if (perks.includes(perk)) {
      setPerks(perks.filter((item) => item !== perk));
    } else {
      setPerks([...perks, perk]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    let imgUrl = ticket.image;

    if (image) {
      imgUrl = await uploadImage(image);
    }
    const ticketData = {
      title: formData.get("title"),
      from: formData.get("from"),
      to: formData.get("to"),
      transportType,
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
      departureDateTime: formData.get("departureDateTime"),

      perks,

      image: imgUrl,
      vendorId: user.id,
      vendorName: user.name,
      vendorEmail: user.email
    };
    console.log(ticketData)
    const result = await updateTicket(ticket._id, ticketData);

    if (result.modifiedCount > 0) {
      setLoading(false)
      toast.success("Ticket updated successfully 🎉");
      redirect("/dashboard/vendor/my-added-tickets");
    }

  };
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Ticket Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Ticket Title
          </label>

          <input
            name="title"
            type="text"
            placeholder="Hero Express"
            defaultValue={ticket?.title}
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 placeholder:text-gray-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Price Per Ticket
          </label>

          <input
            name="price"
            type="number"
            defaultValue={ticket?.price}
            placeholder="1200"
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 placeholder:text-gray-500"
          />
        </div>

        {/* From */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            From
          </label>

          <input
            name="from"
            type="text"
            defaultValue={ticket?.from}
            placeholder="Dhaka"
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 placeholder:text-gray-500"
          />
        </div>

        {/* To */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            To
          </label>

          <input
            name="to"
            type="text"
            defaultValue={ticket?.to}
            placeholder="Sylhet"
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Transport Type */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Transport Type
        </label>

        <TransportTypeSelector
          value={transportType}
          onChange={setTransportType}
        />
      </div>
      {/* Quantity & Departure */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Ticket Quantity */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Ticket Quantity
          </label>

          <input
            name="quantity"
            type="number"
            min="1"
            defaultValue={ticket?.quantity}
            placeholder="40"
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400 placeholder:text-gray-500"
          />
        </div>

        {/* Departure Date & Time */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Departure Date & Time
          </label>

          <input
            name="departureDateTime"
            type="datetime-local"
            defaultValue={ticket?.departureDateTime}
            className="w-full rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-white outline-none transition-all focus:border-cyan-400"
          />
        </div>

      </div>
      {/* Vendor Information */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Vendor Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Vendor Name
          </label>

          <input
            type="text"
            value={user?.name || ""}
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-gray-400 outline-none"
          />
        </div>

        {/* Vendor Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Vendor Email
          </label>

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-cyan-500/20 bg-[#0D1B2A] px-4 py-3 text-gray-400 outline-none"
          />
        </div>
      </div>
      {/* Perks */}
      <div>
        <label className="mb-4 block text-sm font-medium text-gray-300">
          Ticket Perks
        </label>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {["AC", "WiFi", "Breakfast", "Charging", "Reclining Seat",].map((perk) => (
            <label
              key={perk}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all ${perks.includes(perk)
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-cyan-500/20 bg-[#0D1B2A]"
                }`}
            >
              <input
                type="checkbox"
                checked={perks.includes(perk)}
                onChange={() => handlePerkChange(perk)}
                className="h-4 w-4 accent-cyan-500"
              />

              <span className="text-sm text-white">
                {perk}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* Ticket Image Upload */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Ticket Image
        </label>

        <div className="rounded-2xl border-2 border-dashed border-cyan-500/20 bg-[#0D1B2A] p-6 text-center transition hover:border-cyan-400">
          {image ? (
            <p className="mt-2 text-sm text-cyan-400">
              {image.name}
            </p>
          ) : (
            <img
              src={ticket?.image}
              alt={ticket?.title}
              className="mx-auto h-24 w-24 rounded-xl object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
            id="ticketImage"
          />

          <label
            htmlFor="ticketImage"
            className="cursor-pointer"
          >
            <div className="space-y-2">
              <p className="text-4xl">📷</p>

              <h3 className="font-medium text-white">
                Upload Ticket Image
              </h3>

              <p className="text-sm text-gray-400">
                PNG, JPG, JPEG supported
              </p>

              {image && (
                <p className="mt-2 text-sm text-cyan-400">
                  {image.name}
                </p>
              )}
            </div>
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="h-14 w-full rounded-xl bg-cyan-500 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Updating Ticket..." : "Update Ticket"}
      </button>
    </form>
  );
};

export default UpdateTicketForm;