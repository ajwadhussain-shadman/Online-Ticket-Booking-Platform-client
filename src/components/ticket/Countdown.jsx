"use client";

import { useEffect, useState } from "react";

const Countdown = ({ departureDate }) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(departureDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),

      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),

      seconds: Math.floor(
        (difference % (1000 * 60)) /
          1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [departureDate]);

  if (!timeLeft) {
    return (
      <div className="text-center text-red-400">
        Departure Time Passed
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.days).padStart(2, "0")}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Days
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.hours).padStart(2, "0")}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Hours
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.minutes).padStart(2, "0")}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Minutes
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.seconds).padStart(2, "0")}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;