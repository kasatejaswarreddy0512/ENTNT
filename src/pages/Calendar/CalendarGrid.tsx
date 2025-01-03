import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useStore } from '../../store/useStore';
import { CalendarDay } from './CalendarDay';

export function CalendarGrid() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="title_name bg-white rounded-lg shadow">
      <div className=" title_head p-4 flex items-center justify-between border-b">
        <h2 className=" text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <div className="space-x-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="title_head px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="title_head px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Today
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="title_head px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <CalendarDay key={day.toISOString()} date={day} />
        ))}
      </div>
    </div>
  );
}