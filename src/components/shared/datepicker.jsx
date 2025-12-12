import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function DateTimeInput() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="sm:col-span-3 lg:col-span-6 xl:col-span-3">
            <label className="form-label">Date & Time</label>
            <div className="mb-2 py-3 px-6 flex items-center border border-light-green rounded-lg d2c-date">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy h:mm aa"
                    placeholderText="dd/mm/yyyy hh:mm"
                    className="form-control border-0 p-0 bg-transparent focus:outline-none w-full text-dark"
                />
                <span className="text-darkgray pl-2">
                    <i className="fa-solid fa-calendar-days"></i>
                </span>
            </div>
        </div>
    );
}
