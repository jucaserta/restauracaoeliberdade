import React from 'react'
import { useForm } from "react-hook-form"
import Toast from 'react-hot-toast'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import { FaCalendarAlt } from 'react-icons/fa'

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async () => {
        try {
            Toast.success('Your information is submitted!')
            reset()
        } catch {
            Toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type Your Full Name"
                        {...register("nameRequired", { required: true })}
                    />
                    {errors.nameRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 lg:col-span-6 xl:col-span-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                            {...register("numberRequired", { required: true })}
                        />
                        {errors.numberRequired && (
                            <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="sm:col-span-3 lg:col-span-6 xl:col-span-3">
                        <label className="form-label">Date & Time</label>
                        <div className="mb-2 py-3 px-6 flex items-center border border-light-green rounded-lg d2c-date cursor-pointer">
                            <Flatpickr
                                options={{
                                    enableTime: true,
                                    dateFormat: 'Y-m-d H:i',
                                }}
                                className="form-control border-0 p-0 bg-transparent focus:outline-none w-full"
                                placeholder="dd/mm/yy"
                            />
                            <span className="text-darkgray pl-2">
                                <FaCalendarAlt />
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Type Your Email Address"
                        {...register("emailRequired", { required: true })}
                    />
                    {errors.emailRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>

                <div data-aos="fade-up" data-aos-delay="1000">
                    <label className="form-label">Messages</label>
                    <textarea
                        rows="4"
                        className="form-control"
                        placeholder="Type your Project brief here"
                        {...register("messageRequired", { required: true })}
                    ></textarea>
                    {errors.messageRequired && (
                        <span className="mt-2 inline-block font-primary text-red-400 text-sm">
                            This field is required
                        </span>
                    )}
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                    <button
                        type="submit"
                        className="d2c_btn d2c_btn_primary w-full md:w-fit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Book' : 'Book now'}
                    </button>
                </div>
            </form>
        </>
    )
}
