const Hero = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container space-y-8 px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Welcome to Zahrat al-Bustan
          </h1>
          <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Experience the perfect blend of elegance and flavor. Our
            meticulously crafted dishes and enchanting ambiance will elevate
            your dining experience.
          </p>
        </div>
        <img
          src='https://tds-images.thedailystar.net/sites/default/files/images/2022/11/22/ks_24.jpg'
          width='940'
          height='400'
          alt='Interior'
          className='mx-auto aspect-[2.35/1] overflow-hidden rounded-xl object-cover object-center'
        />
      </div>
    </section>
  );
};

export default Hero;
