"use client";

import { useEffect, useState } from "react";

const Countdown = ({
  departureDate,
  compact = false,
}) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(departureDate) - new Date();

    if (difference <= 0) {
      return {
        expired: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      expired: false,
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) %
          60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [mounted, setMounted] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, departureDate]);

  if (!mounted || !timeLeft) {
    return null;
  }

  if (timeLeft.expired) {
    return (
      <p className="text-center font-medium text-red-400">
        Trip Expired
      </p>
    );
  }

  // Compact version for cards
  if (compact) {
    return (
      <div className="text-center text-sm font-medium text-cyan-400">
        {timeLeft.days}d{" "}
        {timeLeft.hours}h{" "}
        {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    );
  }

  // Full version for Ticket Details page
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.days).padStart(
            2,
            "0"
          )}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Days
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.hours).padStart(
            2,
            "0"
          )}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Hours
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.minutes).padStart(
            2,
            "0"
          )}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Minutes
        </p>
      </div>

      <div className="rounded-xl bg-[#091425] p-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          {String(timeLeft.seconds).padStart(
            2,
            "0"
          )}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;