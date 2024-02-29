import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dateOfVisit: '',
    timeOfVisit: '',
    howHeard: '',
    satisfaction: 'Excellent',
    recommendation: '',
  });

  const handleChange = (value) => {
    if (typeof value === 'string' || value === undefined) {
      setFormData({ ...formData, phoneNumber: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log(formData);
  };

  return (
    <section>
      <div className='text-white'>
        <div className='container mx-auto flex flex-col md:flex-row my-6 md:my-24'>
          <div className='flex flex-col w-full lg:w-1/3 p-8'>
            <p className='text-3xl md:text-5xl my-4 text-black md:leading-snug'>
              Your Feedback Matters To Us
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-2/3 justify-center'>
            <div className='container w-full px-4'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white'>
                    <div className='flex-auto p-5 lg:p-10'>
                      <h4 className='text-2xl mb-4 text-black font-semibold'>
                        Have a suggestion?
                      </h4>
                      <form onSubmit={handleSubmit} id='feedback'>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='name'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            Name
                          </label>
                          <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter full name'
                            value={formData.name}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          />
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='email'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            Email
                          </label>
                          <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter email address'
                            value={formData.email}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          />
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='phoneNumber'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            Phone Number
                          </label>
                          <div className='border border-gray-300 rounded-md shadow-sm'>
                            <PhoneInput
                              placeholder='Enter phone number'
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              className='border-0 px-3 py-3 rounded text-sm w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                              required
                            />
                          </div>
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='dateOfVisit'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            Date of Visit
                          </label>
                          <input
                            type='date'
                            id='dateOfVisit'
                            name='dateOfVisit'
                            value={formData.dateOfVisit}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          />
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='timeOfVisit'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            Time of Visit
                          </label>
                          <input
                            type='time'
                            id='timeOfVisit'
                            name='timeOfVisit'
                            value={formData.timeOfVisit}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          />
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='howHeard'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            How did you hear about Zahrat al-Bustan?
                          </label>
                          <select
                            id='howHeard'
                            name='howHeard'
                            value={formData.howHeard}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          >
                            <option value=''>Select</option>
                            <option value='Facebook'>Facebook</option>
                            <option value='Instagram'>Instagram</option>
                            <option value='Friends'>Friends/Family</option>
                            <option value='Others'>Others</option>
                          </select>
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            htmlFor='satisfaction'
                            className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          >
                            How satisfied were you with overall experience?
                          </label>
                          <select
                            id='satisfaction'
                            name='satisfaction'
                            value={formData.satisfaction}
                            onChange={handleChange}
                            className='border-0 px-3 py-3 rounded text-sm shadow w-full bg-white placeholder-black text-gray-800 outline-none focus:bg-white'
                            required
                          >
                            <option value='Bad'>Bad</option>
                            <option value='Average'>Average</option>
                            <option value='Good'>Good</option>
                            <option value='Excellent'>Excellent</option>
                          </select>
                        </div>
                        <div className='relative w-full mb-3'>
                          <label className='block text-gray-700 text-xs font-bold mb-2'>
                            Would you recommend friends & family to visit Zahrat
                            al-Bustan?
                          </label>
                          <div className='flex items-center'>
                            <input
                              type='radio'
                              id='recommendationYes'
                              name='recommendation'
                              value='Yes'
                              checked={formData.recommendation === 'Yes'}
                              onChange={handleChange}
                              className='mr-2'
                            />
                            <label
                              htmlFor='recommendationYes'
                              className='mr-4 text-black'
                            >
                              Yes
                            </label>
                            <input
                              type='radio'
                              id='recommendationNo'
                              name='recommendation'
                              value='No'
                              checked={formData.recommendation === 'No'}
                              onChange={handleChange}
                              className='mr-2'
                            />
                            <label
                              htmlFor='recommendationNo'
                              className='mr-4 text-black'
                            >
                              No
                            </label>
                          </div>
                        </div>

                        <div className='text-center mt-6'>
                          <button
                            id='feedbackBtn'
                            type='submit'
                            className='bg-black hover:text-white text-center mx-auto active:bg-gray-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
