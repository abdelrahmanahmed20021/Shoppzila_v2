"use client";
// Import necessary modules and components
import { Button, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

// Define the component
const TimerComponent: React.FC = () => {
  const calculateTimeLeft = () => {
    function getDaysInMonth(month: number, year: number) {
      // Months are zero-based, so we subtract 1 from the input month
      return new Date(year, month, 0).getDate();
    }
    const now = new Date();
    const endOfMonth = new Date(
      now.getFullYear(), // Year
      now.getMonth() + 1, // Month (Note: Months in JavaScript are zero-based, so adding 1)
      0, // Day (specifying 0 gets the last day of the previous month, resulting in the last day of the current month)
      23, // Hours
      59, // Minutes
      59 // Seconds
    ); // Last day of the current month

    const difference: number = endOfMonth.getTime() - now.getTime();

    const currentMonth = now.getMonth() + 1; // Adding 1 to convert from zero-based to one-based
    const currentYear = now.getFullYear();

    const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);

    if (daysInCurrentMonth === 31) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) - 2;
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else if (daysInCurrentMonth === 30) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) - 1;
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 rounded-xl relative ">
      <div className="w-full   sm:h-[450px] rounded-xl relative overflow-hidden h-[430px]">
        <Image
            height={400}
            width={300}
          alt="second banner"
          className="relative object-cover w-full h-[800px] z-0  opacity-100 text-transparent    "
          src="/m8_deal_bg.webp"
          style={{
            
            transition: "all 0.3s ease-in-out 0s",
            transformOrigin: "center center",
          }}
        />
      </div>

      <div className="absolute w-full flex justify-center items-center flex-col gap-[20px] top-0 left-0 p-[30px] sm:p-[50px]">
        <span className="text-[1rem]">Up to 30% off</span>
        <h2 className="text-[1.1rem] font-[600]">Shoulder bags</h2>
        <Image alt="bag-img" width={120} height={120} src="/bag.webp" />
        <div className="flex gap-2">
          <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
            <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
              {countdown.days}
            </div>
            <div>Days</div>
          </Button>
          <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
            <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
              {countdown.hours}
            </div>
            <div>Hours</div>
          </Button>
          <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
            <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
              {countdown.minutes}
            </div>
            <div>Mins</div>
          </Button>
          <Button className="z-0 group relative items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none border-default text-foreground border-[1px] shadow-small bg-lit-900 flex flex-col h-[50px] min-w-[50px] rounded-[50px] sm:min-w-[60px] sm:h-[60px] gap-0 p-0 sm:rounded-[60px]">
            <div className="sm:text-[1.3rem] text-[20px] font-[500] sm:font-[600]">
              {countdown.seconds}
            </div>
            <div>Secs</div>
          </Button>
        </div>
        <Button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium min-w-unit-20 h-unit-10 gap-unit-2 rounded-full [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent border-default text-drk-900 w-max text-[16px] font-[600] px-[20px]">
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default TimerComponent;
