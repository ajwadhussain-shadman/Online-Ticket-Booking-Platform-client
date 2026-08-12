"use client";

import React, { useState } from "react";
import TransportTypeSelector from "./TransportTypeSelector";
import { uploadImage } from "@/lib/uploadImage";
import { postTicket } from "@/lib/postData";
import toast from "react-hot-toast";

const AddTicketForm = ({ user }) => {
  const [transportType, setTransportType] = useState("");
  const [perks, setPerks] = useState([]);
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
    const imgUrl = await uploadImage(image);
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
    const result = await postTicket(ticketData);
    if (result?.acknowledged) {
      toast.success("Ticket added successfully 🎉");
       setLoading(false);
      e.target.reset();

      setImage(null);
      setPerks([]);
      setTransportType("");
    }

  };
  return (
 <form onSubmit={handleSubmit} className="space-y-8">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Ticket Title
      </label>

      <input
        name="title"
        type="text"
        placeholder="Hero Express"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 placeholder:text-slate-400 dark:bg-[#0D1B2A] dark:text-white dark:placeholder:text-gray-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Price Per Ticket
      </label>

      <input
        name="price"
        type="number"
        placeholder="1200"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 placeholder:text-slate-400 dark:bg-[#0D1B2A] dark:text-white dark:placeholder:text-gray-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        From
      </label>

      <input
        name="from"
        type="text"
        placeholder="Dhaka"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 placeholder:text-slate-400 dark:bg-[#0D1B2A] dark:text-white dark:placeholder:text-gray-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        To
      </label>

      <input
        name="to"
        type="text"
        placeholder="Sylhet"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 placeholder:text-slate-400 dark:bg-[#0D1B2A] dark:text-white dark:placeholder:text-gray-500"
      />
    </div>
  </div>

  <div>
    <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-gray-300">
      Transport Type
    </label>

    <TransportTypeSelector
      value={transportType}
      onChange={setTransportType}
    />
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Ticket Quantity
      </label>

      <input
        name="quantity"
        type="number"
        min="1"
        placeholder="40"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 placeholder:text-slate-400 dark:bg-[#0D1B2A] dark:text-white dark:placeholder:text-gray-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Departure Date & Time
      </label>

      <input
        name="departureDateTime"
        type="datetime-local"
        className="w-full rounded-xl border border-cyan-500/20 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-cyan-400 dark:bg-[#0D1B2A] dark:text-white"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Vendor Name
      </label>

      <input
        type="text"
        value={user?.name || ""}
        readOnly
        className="w-full cursor-not-allowed rounded-xl border border-cyan-500/20 bg-slate-100 px-4 py-3 text-slate-500 outline-none dark:bg-[#0D1B2A] dark:text-gray-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300">
        Vendor Email
      </label>

      <input
        type="email"
        value={user?.email || ""}
        readOnly
        className="w-full cursor-not-allowed rounded-xl border border-cyan-500/20 bg-slate-100 px-4 py-3 text-slate-500 outline-none dark:bg-[#0D1B2A] dark:text-gray-400"
      />
    </div>
  </div>

  <div>
    <label className="mb-4 block text-sm font-medium text-slate-700 dark:text-gray-300">
      Ticket Perks
    </label>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {["AC", "WiFi", "Breakfast", "Charging", "Reclining Seat",].map((perk) => (
        <label
          key={perk}
          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all ${
            perks.includes(perk)
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-cyan-500/20 bg-slate-50 dark:bg-[#0D1B2A]"
          }`}
        >
          <input
            type="checkbox"
            checked={perks.includes(perk)}
            onChange={() => handlePerkChange(perk)}
            className="h-4 w-4 accent-cyan-500"
          />

          <span className="text-sm text-slate-700 dark:text-white">
            {perk}
          </span>
        </label>
      ))}
    </div>
  </div>

  <div>
    <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-gray-300">
      Ticket Image
    </label>

    <div className="rounded-2xl border-2 border-dashed border-cyan-500/20 bg-slate-50 p-6 text-center transition hover:border-cyan-400 dark:bg-[#0D1B2A]">
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

          <h3 className="font-medium text-slate-900 dark:text-white">
            Upload Ticket Image
          </h3>

          <p className="text-sm text-slate-500 dark:text-gray-400">
            PNG, JPG, JPEG supported
          </p>

          {image && (
            <p className="mt-2 text-sm text-cyan-600 dark:text-cyan-400">
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
    className="h-14 w-full rounded-xl bg-cyan-500 text-base font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {loading ? "Adding Ticket..." : "Add Ticket"}
  </button>
</form>
  );
};

export default AddTicketForm;