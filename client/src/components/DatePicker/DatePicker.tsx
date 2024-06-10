import React, { useEffect, useState } from 'react';
import './DatePicker.scss';

interface DatePickerProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dateValue: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setDateValue: any;
}

const DatePicker: React.FC<DatePickerProps> = ({ register, dateValue, setDateValue }) => {
    const [selectedDate, setSelectedDate] = useState<string>('datepicker__date1');

    useEffect(() => {
        const today = new Date();
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + parseInt(selectedDate.replace('datepicker__date', '')) - 1);
        setDateValue(targetDate.toISOString());
    }, [selectedDate, setDateValue])

    const handleDateClick = (dateClassName: string) => {
        setSelectedDate(dateClassName);
    };

    const renderDate = (dayOffset: number): string => {
        const today = new Date();
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + dayOffset);

        const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'short' }).substring(0, 3);
        const dayOfMonth = targetDate.getDate();
        const month = targetDate.getMonth() + 1;

        return `${dayName} ${dayOfMonth}/${month}`;
    };

    return (
        <div className='datepicker'>
            <div className={`datepicker__date1 ${selectedDate === 'datepicker__date1' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date1')}><p>{renderDate(0)}</p></div>
            <div className={`datepicker__date2 ${selectedDate === 'datepicker__date2' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date2')}><p>{renderDate(1)}</p></div>
            <div className={`datepicker__date3 ${selectedDate === 'datepicker__date3' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date3')}><p>{renderDate(2)}</p></div>
            <div className={`datepicker__date4 ${selectedDate === 'datepicker__date4' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date4')}><p>{renderDate(3)}</p></div>
            <div className={`datepicker__date5 ${selectedDate === 'datepicker__date5' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date5')}><p>{renderDate(4)}</p></div>
            <div className={`datepicker__date6 ${selectedDate === 'datepicker__date6' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date6')}><p>{renderDate(5)}</p></div>
            <div className={`datepicker__date7 ${selectedDate === 'datepicker__date7' ? 'selectedDate' : ''}`} onClick={() => handleDateClick('datepicker__date7')}><p>{renderDate(6)}</p></div>
            <input type='hidden' value={dateValue} {...register("date")} />
        </div>
    );
};

export default DatePicker;