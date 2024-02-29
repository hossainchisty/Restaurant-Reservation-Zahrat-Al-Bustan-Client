const chefs = [
  {
    name: 'John Doe',
    image:
      'https://dg1xqmhtoint1.cloudfront.net/img/vadodara/blog/blog-chef.webp?mtime=20220615123310&focal=none',
    specialty: 'Italian Cuisine',
  },
  {
    name: 'Jane Smith',
    image:
      'https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg',
    specialty: 'French Cuisine',
  },
  {
    name: 'Maria Garcia',
    image:
      'https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=',
    specialty: 'Mediterranean Cuisine',
  },
];

const Chef = () => {
  return (
    <div className='py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Meet Our Chefs</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {chefs.map((chef, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={chef.image}
                alt={chef.name}
                className='w-full h-64 object-cover object-center'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{chef.name}</h3>
                <p className='text-gray-600 mb-2'>{chef.specialty}</p>
                <div className='flex justify-center'>
                  <button className='bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300'>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
