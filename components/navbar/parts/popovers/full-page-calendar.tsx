"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function CalendarSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [currentDate, setCurrentDate] = React.useState(new Date(2026, 0, 1));

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfWeekShort = ["S", "M", "T", "W", "T", "F", "S"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i),
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Next month's days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const isToday = (date: Date) => {
    const today = new Date(2026, 0, 21); // January 21, 2026
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth(currentDate);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="fixed right-0 top-20 h-[90%] w-[100%] md:w-[95%] sm:w-[500px] md:w-[500px] bg-black text-white transform transition-transform flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 shrink-0">
          <div className="flex items-center gap-2 text-sm font-medium">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Calendar</span>
          </div>
          <button onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-3 sm:py-4 shrink-0">
          <button
            onClick={goToPreviousMonth}
            className="hover:bg-white/10 rounded p-1"
          >
            <ChevronLeft className="h-4 w-4 text-white/70" />
          </button>
          <span className="text-sm sm:text-base font-semibold min-w-[140px] text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={goToNextMonth}
            className="hover:bg-white/10 rounded p-1"
          >
            <ChevronRight className="h-4 w-4 text-white/70" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-7 border-t border-white/10">
            {/* Day headers - responsive */}
            {daysOfWeek.map((day, i) => (
              <div
                key={day}
                className="border-b border-r border-white/10 px-1 sm:px-2 py-1 sm:py-2 text-[9px] sm:text-[10px] text-white/50 text-center font-medium"
              >
                <span className="hidden sm:inline">{day}</span>
                <span className="sm:hidden">{daysOfWeekShort[i]}</span>
              </div>
            ))}

            {/* Calendar days */}
            {days.map((dayInfo, i) => (
              <div
                key={i}
                className={`relative border-b border-r border-white/10 p-1 sm:p-2 min-h-[50px] sm:min-h-[70px] ${
                  !dayInfo.isCurrentMonth ? "bg-white/5" : ""
                }`}
              >
                <span
                  className={`text-[10px] sm:text-xs ${
                    dayInfo.isCurrentMonth ? "text-white/90" : "text-white/30"
                  } ${
                    isToday(dayInfo.date)
                      ? "bg-blue-600 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 font-semibold"
                      : ""
                  }`}
                >
                  {dayInfo.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
