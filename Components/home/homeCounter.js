"use client";
import Countdown from "react-countdown";

export default function CountdownTimer() {
  // লক্ষ্য সময় নির্ধারণ করো (যেমন: ৩ দিন পর)
  const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-2xl font-bold text-black">Offer Expired 🎉</span>
      );
    } else {
      return (
        <div className="flex gap-2 justify-center text-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white">{days}</p>
            <p className="text-sm text-gray-200">Days</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white">{hours}</p>
            <p className="text-sm text-gray-200">Hours</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white">{minutes}</p>
            <p className="text-sm text-gray-200">Mins</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white">{seconds}</p>
            <p className="text-sm text-gray-200">Secs</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-8 rounded-2xl max-w-md mx-auto text-center shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-white">Special Offer Ends In:</h2>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}
