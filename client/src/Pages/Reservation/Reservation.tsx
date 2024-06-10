import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { DatePicker, Navbar } from '../../components';
import './Reservation.scss'

type FormData = {
    date: Date;
    time: string;
    numberOfGuests: number;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
}

type availabilityType = {
    date: Date;
    count: number;
}

const Reservation: React.FC = () => {
    const [dateValue, setDateValue] = useState<Date>(new Date());
    const [availability, setAvailability] = useState<Array<availabilityType>>([])
    const [isAvailable, setIsAvailable] = useState<boolean>(false)

    const { register, handleSubmit, formState, setValue, reset } = useForm<FormData>();

    const { errors } = formState;

    const setAvailable = useCallback(() => {
        const available = availability?.find((data) => {
            const dataDate = new Date(data.date);
            const currentDate = new Date(dateValue)
            return dataDate.getDate() === currentDate.getDate() &&
                   dataDate.getMonth() === currentDate.getMonth() &&
                   dataDate.getFullYear() === currentDate.getFullYear() &&
                   data.count >= 10;
        });

        return !!available;
    }, [availability, dateValue]);

    useEffect(() => {
        setValue('date', new Date(dateValue));
        setIsAvailable(setAvailable)
    }, [dateValue, setValue, setAvailable]);

    const handleFormSubmit = async (data: FormData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/BookTable`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error:', errorText);
            } else {
                console.log('Success:', response);
                fetch(`https://broken-waterfall-2bb7.mohdirfanshafi.workers.dev/?bookingName=${data.contactName}&email=${data.contactEmail}&bookingDate=${data.date}&bookingTime=${data.time}&noOfSeats=${data.numberOfGuests}`, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                reset();
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            } else {
                console.error('Unknown error:', error);
            }
        }
    };

    useEffect(() => {
        async function dateAvailability() {
            const available_dates = await fetch(`${import.meta.env.VITE_API_URL}/available_dates`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (available_dates.ok) {
                const result = await available_dates.json();
                setAvailability(result);
            } else {
                console.error('Failed to fetch available dates:', available_dates.statusText);
            }
        }

        dateAvailability()
    }, [])

    return (
        <main>
            <Navbar isReservation={true} />
            <form onSubmit={handleSubmit(handleFormSubmit)} className="reservation__form">
                <DatePicker register={register} dateValue={dateValue} setDateValue={setDateValue} />

                <label>
                    Time:
                    <select {...register("time", { required: true })}>
                        <option value="04:00">04:00</option>
                        <option value="05:00">05:00</option>
                        <option value="06:00">06:00</option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                    </select>
                    {errors.time && <span className="error">Time is required</span>}
                </label>

                <label>
                    Number of Guests:
                    <input type="number" {...register("numberOfGuests", { required: true, min: 1 })} />
                    {errors.numberOfGuests && <span className="error">Please enter number of guests (minimum 1)</span>}
                </label>

                <label>
                    Contact Name:
                    <input type="text" {...register("contactName", { required: true })} />
                    {errors.contactName && <span className="error">Contact name is required</span>}
                </label>

                <label>
                    Email:
                    <input type="email" {...register("contactEmail", { required: true })} />
                    {errors.contactEmail && <span className="error">Valid email is required</span>}
                </label>

                <label>
                    Phone:
                    <input type="tel" {...register("contactPhone", { required: true })} />
                    {errors.contactPhone && <span className="error">Phone number is required</span>}
                </label>

                <button type="submit" className={`custom__button ${isAvailable && 'disabled'}`} disabled={isAvailable} aria-readonly={isAvailable}>
                    {isAvailable ? 'Tables Full' : 'Book Table'}
                </button>
            </form>
        </main>
    );
}

export default Reservation;