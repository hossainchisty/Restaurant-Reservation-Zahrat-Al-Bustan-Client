const Explore = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-12 md:grid-cols-2 md:gap-24 lg:grid-cols-2 lg:gap-32'>
          <div className='flex flex-col justify-between space-y-4'>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                A Culinary Journey Awaits
              </h2>
              <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Our menu is a celebration of exquisite flavors and masterful
                culinary artistry. Each dish is thoughtfully prepared to delight
                your palate, offering a harmonious symphony of taste and
                texture.
              </p>
            </div>
            <a
              className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm px-8 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900'
              href='#'
              rel='ugc'
            >
              Explore the Menu
            </a>
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='https://www.bproperty.com/blog/wp-content/uploads/Forest-Lounge.jpg'
              width='600'
              height='400'
              alt='Interior'
              className='mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
