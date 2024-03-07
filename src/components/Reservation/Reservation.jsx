import { useState } from 'react';
import { toast } from 'react-hot-toast';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Reservation = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    date: '',
    time: '',
    phone_number: '',
    seating_preference: '',
    numberOfGuests: '',
    promoCode: '',
  });
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneNumberChange = (value) => {
    setFormData({ ...formData, phone_number: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiBaseDomain}/api/v1/reservation`,
        formData
      );
      if (response.data.status === 201) {
        toast.success('Reservation booked successfully.');
        resetForm();
      } else if (response.data.status === 404) {
        toast.error('Promo code expired!');
      } else {
        toast.error('Invalid Promo code!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      full_name: '',
      email: '',
      date: '',
      time: '',
      phone_number: '',
      seating_preference: '',
      numberOfGuests: '',
      promoCode: '',
    });
  };

  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='container px-4 md:px-6'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-24 lg:grid-cols-2 lg:gap-32'>
          <div className='flex items-center justify-center'>
            <img
              src='https://ratekom.com/wp-content/uploads/2021/03/Pinewood-Cafe-N-Restaurant.jpg'
              width='600'
              height='400'
              alt='Interior'
              className='mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center'
            />
          </div>
          <div className='flex flex-col justify-between space-y-4'>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                Reserve Your Table
              </h2>
              <p className='max-w-[500px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed'>
                Reservations booked through our website 3 hours prior to the
                time of arrival at the restaurant confirm the availability of a
                table.
              </p>
            </div>
            <div className='flex justify-center'>
              <form onSubmit={handleSubmit} className='w-full max-w-xs'>
                <div className='grid gap-4'>
                  <input
                    type='text'
                    name='full_name'
                    value={formData.full_name}
                    onChange={handleChange}
                    className='input-with-icon flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    placeholder='Full Name'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='input-with-icon flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    placeholder='Email'
                    required
                  />
                  <input
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    required
                  />
                  <input
                    type='time'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                    className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    required
                  />
                  <PhoneInput
                    placeholder='Enter phone number'
                    defaultCountry='BD'
                    value={formData.phone_number}
                    onChange={handlePhoneNumberChange}
                    className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    required
                  />
                  <select
                    name='seating_preference'
                    value={formData.seating_preference}
                    onChange={handleChange}
                    className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    required
                  >
                    <option value='' disabled>
                      Select seating type
                    </option>
                    <option value='Family Seating'>Family Seating</option>
                    <option value='Single'>Single</option>
                  </select>

                  <select
                    name='numberOfGuests'
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    required
                  >
                    <option value='' disabled>
                      Number of Guests
                    </option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15+'>15+</option>
                  </select>
                  <input
                    type='text'
                    name='promoCode'
                    value={formData.promoCode}
                    onChange={handleChange}
                    className='input-with-icon flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full'
                    placeholder='Promom Code'
                  />
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-black text-white hover:bg-primary/90 h-10 px-4 py-2 w-full'
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
