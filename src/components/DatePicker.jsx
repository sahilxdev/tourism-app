import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles

const MyDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Call the parent's onDateChange function to pass the updated date
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <div className="relative max-w-sm">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Customize date format as needed
        className="w-32 text-left bg-gray-50 border border-gray-300 text-gray-900 focus:hidden text-sm rounded-lg  block ps-6 py-2.5"
        placeholderText="Select date"
      />
    </div>
  );
};

export default MyDatePicker;
