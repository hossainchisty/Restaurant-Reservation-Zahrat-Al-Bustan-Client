const Reservation = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
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
                Enter your details below to make a reservation and savor an
                unforgettable dining experience.
              </p>
            </div>
            <div className='grid gap-4'>
              <input
                type='text'
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                placeholder='Name'
              />
              <input
                type='email'
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                placeholder='Email'
              />
              <input
                type='text'
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                placeholder='Phone'
              />
              <input
                type='text'
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                placeholder='Date'
              />
              <input
                type='text'
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                placeholder='Time'
              />
              <select
                className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full max-w-[300px]'
                aria-hidden='true'
                tabIndex='-1'
              >
                <option value='2'>Number of Guests</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-black text-white hover:bg-primary/90 h-10 px-4 py-2 w-full max-w-xs'>
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
